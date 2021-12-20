const express = require('express')
const axios = require('axios')
const cors = require ('cors')
const app = express()

app.use(cors())

app.use(express.static('public'))

app.use(express.json())


//get orders from inventoryservise
app.get('/api/products', async (req, res) => {
    console.log('Requesting products from nginx...')
    try{    
    const response = await axios.get('http://nginx:9000/api/v1/products')
    console.log("GET response from  inventory service ", response.data)
    return res.status(200).send(response.data)
    } catch (error) {
    console.log("catched error from inventory", error.message)
    return res.status(400).send(error.message)
    } 
    })

// post orders to orderservise
app.post('/api/orders', async (req,res)=> {
    console.log('POST posting order to orderservice...')
    const body=req.body
  try{
    const response = await axios.post('http://order:3001/api/orders', body)
    console.log("response status from POST order",response.status)
    console.log("response data from POST  to orderservise ",response.data)
    return res.status(200).send(response.data) 
     }
    catch (error) {
     console.log("catched error from orderservice:", error.message)
    return res.status(400).send(error.message)
  }
  })


const PORT=3002
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)

})
