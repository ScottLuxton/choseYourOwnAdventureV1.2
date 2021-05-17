require('./model/skiPanorama')

const sceneRoutes = require('./routes/scene')
const itemsToCollect = require('./yourBackpack')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use('/scene', sceneRoutes)

app.get('/', (request, response) => {
  response.redirect('/scene/intro')
})

app.listen(port,function () {
  console.log(`Game server listening at http://localhost:${port}`)
})




