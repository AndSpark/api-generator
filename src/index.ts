import express from 'express'
import { apiGenerate } from './generator'

const app = express()
app.use(express.json())

const port = 3313

app.get('/api-generator', (req, res) => {
	res.send('ok')
})

app.post('/api-generator', async (req, res) => {
	const apiConfig = req.body.apiConfig || []
	const info = await apiGenerate(apiConfig)
	res.send(info)
})

app.listen(port, () => {
	console.log('http://localhost:' + port)
})
