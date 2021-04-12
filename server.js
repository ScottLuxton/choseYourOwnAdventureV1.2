const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send("Hello Panorama!");
})

app.get('/sunbird', function(request, response) {
    response.send("You are riding the Sunbird chair")
})



// app.get('/backpack', function(request, response) {
//     response.send({
//         backpack: [
//             'gloves',
//             'toque',
//             'boots',
//         ]
//     })
// })



const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Example app listening at http://localhost:${PORT}`);
})