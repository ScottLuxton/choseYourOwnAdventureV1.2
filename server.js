const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send("Hello Panorama")
})

app.get('/mile1', function(request, response) {
  response.send("You are riding the mile1 chair")
})

app.get('/backpack', function(request, response) {
    response.send({
        backpack: [
            'gloves',
            'toque',
            'boots',
        ]
    })
})

const port = process.env.PORT || 3000

app.listen(port,function () {
  console.log(`Game server listening at http://localhost:${port}`)
})


