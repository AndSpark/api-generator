import { generateApi } from 'swagger-typescript-api'
import * as fs from 'fs'
import * as path from 'path'
import { createApiDir, createIndex, createPackage, onInit } from './help'
import { ApiConfig, GeneratorConfig } from '../types'

export async function apiGenerate(apiConfig: ApiConfig) {
	createApiDir()
	await Promise.all(
		apiConfig.list.map(({ name, url }) => {
			return new Promise(res => {
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
						if (apiConfig.generatorConfig?.useClassInterface !== false) {
							data = content
								.replace(/class[\s\S]+?\}/g, p => {
									return p.replace(/ object;/g, ' any;')
								})
								.replace(/\= object;/g, '= any;')
								.replace(/ object>/g, ' any>')
						}
						fs.writeFileSync(path.resolve(__dirname, '../../api', name), data)
					})
					res('')
				})
			})
		})
	)
	createIndex(apiConfig.list.map(v => v.name))
	return await createPackage(apiConfig.name, apiConfig.npmrc)
}
