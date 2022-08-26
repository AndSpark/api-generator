export const indexTs = `
import { AxiosRequestConfig, AxiosResponse } from 'axios'

let isInstall = false

interface HttpClient {
	request: <T = any, _E = any>(config: AxiosRequestConfig) => Promise<AxiosResponse<T>>
}

//@ts-ignore
export const httpClient: HttpClient = {
	request(config: AxiosRequestConfig):any {
		if (!isInstall) {
			throw new Error('please install http client first')
		}
	},
}

export const install = (request: HttpClient['request']) => {
	httpClient.request = request
	isInstall = true
}
`

export const packageJson = (
	name: string,
	version: string = '1.0.0',
	configs: Record<string, any> = {}
) =>
	JSON.stringify(
		{
			name,
			version,
			main: 'dist/index.js',
			license: 'private',
			dependencies: {
				axios: '0.27.2',
			},
			...configs,
			files: ['dist/*'],
		},
		null,
		2
	)

export const tsconfig = `
{
	"compilerOptions": {
		"target": "ES2015",
		"declaration": true,
		"useDefineForClassFields": true,
		"outDir": "dist",
		"moduleResolution": "node",
		"allowSyntheticDefaultImports": true,
		"esModuleInterop": true,
		"sourceMap": true
	},
	"include": ["./*.ts","./*.d.ts"]
}

`
