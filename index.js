const express = require('express')
const cors = require('cors')
const app = express()

/* Lisää vastaavat endpointit kaikille eri kutsuille.
   Frontissa kutsuminen tapahtuu tämän jälkeen näin:
   await axios.get('/order') ...jne Eli kutsut frontissa 
   tämän bäkkärin routea, joka hoitaa kutsut
   ulkoisiin palveluihin.
*/
app.use('/order', async (req, res) => {
    // TEE KUTSU TÄÄLLÄ. ESIM:
    /*
        const response = await axios.get('http://nginx:9000/api/v1/products')
        return response.data 
    */
})

/*
Vastaava juttu tämän kanssa.. Jos tarvitsee enemmän 
endpointeja, niin tee niitä tuohon alle
*/
app.use('inventory', (req,res) => {
    // TEE KUTSU TÄÄLLÄ
})

app.use(express.static("public"))

app.use(cors)

const PORT=3002
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)

})