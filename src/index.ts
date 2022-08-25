import express from 'express'
import { apiGenerate } from './generator'

const app = express()
app.use(express.json())

const port = 3313

app.post('/api-generator', async (req, res) => {
	const apiConfig = req.body.apiConfig || []
	try {
		const info = await apiGenerate(apiConfig)
		res.send(info)
	} catch (error) {
		console.log(error)
		res.send(error)
	}
})

app.listen(port, () => {
	console.log('http://localhost:' + port)
})
