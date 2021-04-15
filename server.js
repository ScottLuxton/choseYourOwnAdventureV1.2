const express = require('express')
const app = express()


app.get('/', (request, response) => {
  response.send("Hello Panorama - riding toby chair, head to mile1 chair or sunbird chair")
})

app.get('/mile1', function(request, response) {
  response.send ("You are riding the mile1 chair, choose to ski on the trail called Showoff or Old Timer")
})

app.get('/showoff', function(request, response) {
  response.send("You are skiing on the trail called Showoff")
})

app.get('/oldTimer', function(request, response) {
  response.send("You are skiing on the trail called Old Timer")
})

app.get('/sunbird', function(request, response) {
  response.send("You are riding the sunbird chair, choose to ski Fritz or Heaven Can Wait?")
})

app.get('/fritz', function(request, response) {
  response.send("You are skiing on the trail called fritz")
})

app.get('/heavenCanWait', function(request, response) {
  response.send("You are skiing on the trail called Heaven Can Wait")
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


