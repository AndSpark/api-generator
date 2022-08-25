import axios from 'axios'
import 'dotenv/config'

const list = [
	{
		name: 'auth.ts',
		url: 'http://192.168.200.12:5000/auth/v2/api-docs?group=AuthService%E5%BC%80%E6%94%BE%E6%8E%A5%E5%8F%A3',
	},
]
;(function () {
	axios
		.post('http://localhost:3313/api-generator', {
			apiConfig: {
				list,
				name: 'test-api2',
				npmrc: `
				registry=https://govfun.com:10073/repository/npm-group/
 				`,
				packageConfig: {
					publishConfig: {
						registry: 'https://govfun.com:10073/repository/npm-local',
					},
				},
			},
		})
		.catch(e => {
			console.log(e)
		})
})()
