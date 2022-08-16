import axios from 'axios'
import 'dotenv/config'

const list = [
	{
		name: 'auth.ts',
		url: 'http://192.168.200.12:5000/auth/v2/api-docs?group=AuthService%E5%BC%80%E6%94%BE%E6%8E%A5%E5%8F%A3',
	},
	{
		name: 'authBpmnQuery.ts',
		url: 'http://192.168.200.12:5000/auth-bpmn-query/v3/api-docs?group=%E6%B5%81%E7%A8%8B%E6%9F%A5%E8%AF%A2%E6%A8%A1%E5%9D%97',
	},
]
;(function () {
	axios
		.post('http://localhost:3313/api-generator', {
			apiConfig: {
				list,
				name: '@andspark/test-api',
				npmToken: process.env.npmToken,
			},
		})
		.catch(e => {
			console.log(e)
		})
})()
