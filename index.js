const express = require('express')
const app = express()
const port = 8003

app.get('/', (req, res) => {
    res.send('This is a sample project')
})

app.listen(port, () => {
    console.log(`Application is listening at http://localhost:${port}`)
})