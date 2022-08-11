import Request from '@andspark/axios'
import { HttpClient } from '../types'

let isInstall = false

const defaultRequest = new Request({
	config: {},
})

export const httpClient: HttpClient = {
	request(config: any) {
		if (!isInstall) {
			console.warn('please install http client first')
		}
		return defaultRequest.request(config)
	},
}

export const install = (request: HttpClient['request']) => {
	httpClient.request = request
	isInstall = true
}
