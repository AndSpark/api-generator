import { generateApi } from 'swagger-typescript-api'
import * as fs from 'fs'
import * as path from 'path'
import { onInit } from './help'

const generateList = [
	{
		name: 'auth.ts',
		url: 'http://192.168.200.12:5000/auth/v2/api-docs?group=AuthService%E5%BC%80%E6%94%BE%E6%8E%A5%E5%8F%A3',
	},
]

function bootstrap(config?: GeneratorConfig) {
	generateList.map(({ name, url }) => {
		generateApi({
			url,
			name,
			templates: path.resolve(__dirname, './api-templates'),
			httpClientType: 'axios', // or "fetch"
			defaultResponseAsSuccess: false,
			generateRouteTypes: false,
			generateResponses: true,
			toJS: false,
			extractRequestParams: true,
			extractRequestBody: true,
			prettier: {
				// By default prettier config is load from your project
				printWidth: 120,
				tabWidth: 2,
				trailingComma: 'all',
				parser: 'typescript',
			},
			singleHttpClient: true,
			cleanOutput: false,
			enumNamesAsValues: false,
			moduleNameFirstTag: true,
			generateUnionEnums: false,
			hooks: {
				onInit,
			},
		}).then(({ files, configuration }) => {
			files.forEach(({ content, name }) => {
				let data = content
				if (config?.useClassInterface !== false) {
					data = content
						.replace(/class[\s\S]+?\}/g, p => {
							return p.replace(/ object;/g, ' any;')
						})
						.replace(/\= object;/g, '= any;')
						.replace(/ object>/g, ' any>')
				}
				fs.writeFileSync(path.resolve(__dirname, '../api', name), data)
			})
		})
	})
}

bootstrap()
