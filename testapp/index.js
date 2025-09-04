const express = require('express')
const app = express()

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3000
const GLOBAL_PREFIX = process.env.GLOBAL_PREFIX || ''

app.get(`${GLOBAL_PREFIX}/`, (req, res) => {
    res.send(`Hello from ${process.env.APP_NAME || '(unset)'}`)
})

app.get(`${GLOBAL_PREFIX}/health`, (_, res) => res.send('ok'))

app.listen(PORT, HOST, () => {
    console.log(`[startup] listening on ${HOST}:${PORT}, APP_NAME=${process.env.APP_NAME || '(unset)'}`)
})
