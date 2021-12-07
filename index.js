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
    console.log("GOT responce from  inventory service ", response.data)
    return res.status(200).send(response.data)
})


app.post('/api/orders', async (req,res,)=> {
    console.log('posting order to orderservice...')
    const body=req.body
  try{
    const response = await axios.post('http://order:3001/api/orders', body)
    console.log("responce from posting to orderservise ",response.data)
    console.log(response.status)
    if(response.status===200){
        console.log("status 200")
        console.log("status 200 ja data", response.data )
    return res.status(200).send(res.json(response.data))
    }

  } catch (error) {
    console.log("catch response.status from order",error.response.status)
     return res.status(400).sendStatus(error.response.status)
   } 
    })


const PORT=3002
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)

})
