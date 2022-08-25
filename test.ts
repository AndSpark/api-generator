import axios from 'axios'
import 'dotenv/config'

const list = [
	{
		name: 'test.ts',
		url: 'http://192.168.200.34:9999/v2/api-docs',
	},
]
;(function () {
	axios
		.post('http://localhost:3313/api-generator', {
			apiConfig: {
				list,
				name: '@andspark/test-api',
				npmrc: `11`,
			},
		})
		.catch(e => {
			console.log(e)
		})
})()
