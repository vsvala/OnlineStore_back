const express = require('express')
const axios = require('axios')
const cors = require ('cors')
const app = express()

app.use(cors())

app.use(express.static('public'))

app.use(express.json())

app.get('/api/products', async (req, res) => {
    console.log('Requesting products from nginx...')
    const response = await axios.get('http://nginx:9000/api/v1/products')
    console.log("Responceeee from back ", response.data)
    return res.status(200).send(response.data)
})


app.post('/api/orders', async (req,res,)=> {
    console.log('posting order to orderservice...')
    const body=req.body
  try{
    const response = await axios.post('http://order:3001/api/orders', body)
    //const body=req.body
    console.log("oorderr responceeee from back ", body)
    return res.status(200).send(res.json(body))
  } catch (error) {
     return { error: 'uups! Could not post order to server' }
   } 
    })


const PORT=3002
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)

})



