import { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface HttpClient {
	request: <T = any, _E = any>(config: AxiosRequestConfig) => Promise<AxiosResponse<T>>
}

export interface GeneratorConfig {
	useClassInterface?: boolean
}
