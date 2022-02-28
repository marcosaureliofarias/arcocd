const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('Marcos DevOps!')
})

app.listen(8080)