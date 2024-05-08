
const bodyParser = require('body-parser');

const express = require('express')
const Connectdb = require('./utilities/db')

const router = require('./Router/AddAfiliation-route');
const app = express()

app.use(bodyParser.json());

app.use('/api',router)

Connectdb();

const port = 3000
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})