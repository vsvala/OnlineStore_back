const express = require('express')
const axios = require('axios')
const cors = require ('cors')
const app = express()

app.use(cors())

app.use(express.static('public'))

app.get('/api/products', async (req, res) => {
    console.log('Requesting products from nginx...')
    const response = await axios.get('http://nginx:9000/api/v1/products')
    console.log("Responceeee from back ", response.data)
    return response.data
})

app.post('/api/order', async (req, res) => {
    /*  En ole ihan varma toimiiko koko 'req' objektin lähetys ihan näin...
        Todennäköisesti sun pitää kaivaa sieltä req.params tai req.body
        riippuen frontin toteutuksesta. Mut sieltä ne parametrit jostain löytyy
        Helpointa etsiä kun lokittaa koko req-objektin (console.log(req)) ja kaivelee.
    */
    const response = await axios.post('http//order:3001/api/orders', req)
    console.log("responceeee from back ", response.data)
    return response.data
})

const PORT=3002
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)

})




