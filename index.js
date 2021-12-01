const express = require('express')
const app = express()
const cors = require ('cors')

app.use(express.static('public'))
app.use(cors())


app.get('api/products', async (req,res)=> {

 try{
 //ngnix kun käyttää mitään ei tapahdu...    
//const response = await axios.get('http//nginx:9000/api/v1/products') 
const response = await axios.get('http//localhost:nginx/api/v1/products')

console.log("responceeee from back ", response.data)
const res=response.data
return res

} catch (error) {
    return { error: 'uups! Could not get products from server' }
    }

})

app.post('api/order', async (req,res)=> {
    try{
    const response = await axios.post('http//localhost:3001/api/orders', req)
    console.log("responceeee from back ", response.data)
    return response.data
    } catch (error) {
    return { error: 'uups! Could not post order to server' }
    }
    })


const PORT=3002
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)

})




