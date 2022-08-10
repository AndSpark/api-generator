import { AxiosRequestConfig, AxiosResponse } from 'axios'

declare global {
	interface HttpClient {
		request: <T = any, _E = any>(config: AxiosRequestConfig) => Promise<AxiosResponse<T>>
	}

	interface GeneratorConfig {
		useClassInterface?: boolean
	}
}
