import { writeFileSync } from 'fs'
import { resolve } from 'path'
export const onInit = (configuration: any) => {
	//@ts-ignore
	const paths = configuration.swaggerSchema.paths as any
	Object.entries(paths).forEach(([p, value]: [string, any]) => {
		Object.values(value).forEach((v: any, i) => {
			const hasDone: string[] = []
			setSchemaRequired(v.responses, configuration, hasDone)
		})
	})

	const path1 = Object.keys(paths)[0]
		.replace(/^\/.+?\//, '')
		.replace(/(?!\w+)\/.*$/, '')
	const isSameModuel = Object.keys(paths).every(path => {
		return path1 === path.replace(/^\/.+?\//, '').replace(/(?!\w+)\/.*$/, '')
	})

	Object.entries(paths).forEach(([path, value]: [string, any]) => {
		let l = Object.values(value).length
		Object.entries(value).forEach(([method, v]: [string, any]) => {
			v.tags = [
				path
					.replace(/^\/.+?\//, '')
					.replace(/(?!\w+)\/.*$/, '')
					.replace(/-\w/g, m => m[1].toUpperCase()),
			]
			if (isSameModuel) {
				v.tags = [
					path
						.replace(/^.+?\//, '')
						.replace(/^.+?\//, '')
						.replace(/(?!\w+)\/.*$/, '')
						.replace(/-\w/g, m => m[1].toUpperCase()),
				]
			}
			const res = createOptionId(path)

			if (l === 1 && (method === 'get' || method === 'post')) {
				v.operationId = res
			} else {
				v.operationId = method + res.replace(res[0], res[0].toUpperCase())
			}
		})
	})

	return configuration
}

const getObjectEntires: any = (obj: { [x: string]: any }) => {
	let list = []
	for (const key in obj) {
		if (typeof obj[key] === 'object') {
			list.push(...getObjectEntires(obj[key]))
		} else {
			list.push({ [key]: obj[key] })
		}
	}
	return list
}

const setSchemaRequired = (responses: any, configuration: any, hasDone: string[]) => {
	getObjectEntires(responses)
		.filter((x: { $ref: any }) => x.$ref)
		.map((x: { $ref: string }) => {
			const path = x.$ref.split('/').slice(1)
			return path.reduce((p: { [x: string]: any }, c: string | number) => {
				return p[c]
			}, configuration.swaggerSchema)
		})
		.forEach((schema: any) => {
			if (schema.properties) {
				if (!hasDone.includes(schema.title)) {
					hasDone.push(schema.title)
					schema.required = Object.keys(schema.properties)
					setSchemaRequired(schema.properties, configuration, hasDone)
				}
			}
		})
}

const createOptionId = (str: string) => {
	const paramsLength = str.split('').filter(v => v === '{').length
	str = str
		.replace(/^\/.+?\//, '')
		.replace(/^.+?\//, '')
		.replace(/\/.*by-(\w+)(.*\{\1\})/, '$2')

	str = str.replace(/\{(\w+)\}(.*)/, (m, m1, m2) => {
		return m2 + 'By' + m1.replace(m1[0], m1[0].toUpperCase())
	})
	if (paramsLength <= 1) {
		return str.replace(/[-\/]+(\w)/g, (m, m1) => m1.toUpperCase())
	} else {
		Array(paramsLength)
			.fill(1)
			.forEach(v => {
				str = str.replace(/\{(\w+)\}(.*)/, (m, m1, m2) => {
					return m2 + 'And' + m1.replace(m1[0], m1[0].toUpperCase())
				})
			})
		return str.replace(/[-\/]+(\w)/g, (m, m1) => m1.toUpperCase())
	}
}

export const createIndex = (fileNames: string[]) => {
	let content = fileNames
		.map(v => {
			return `export { ${v.replace('.ts', '')}Api } from './${v.replace('.ts', '')}'`
		})
		.join('\n')
	content += `\nexport { install } from '../utils/request'`
	writeFileSync(resolve(__dirname, '../api/index.ts'), content)
}
