import express from 'express'
import { apiGenerate } from './generator'
import { updateNpm } from './utils/update'

updateNpm()

const app = express()
app.use(express.json())

const port = 3313

app.get('/api-generator', (req, res) => {
	res.send('ok')
})

app.post('/api-generator', async (req, res) => {
	const apiList = req.body.apiList || []
	const config = req.body.config || {}
	if (!apiList.length) {
		res.status(400)
		res.send('need apiList')
	} else {
		await apiGenerate(apiList, config)
		res.send('ok')
	}
})

app.listen(port, () => {
	console.log('http://localhost:' + port)
})
