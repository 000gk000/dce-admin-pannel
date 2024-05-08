const mongoose = require('mongoose')

const uri = "mongodb+srv://Dceadmin:dceadmin123@cluster0.yw6q8lz.mongodb.net/dce_admin"

const Connectdb = async () =>{
         try {
           await  mongoose.connect(uri)
            console.log('databse connected sucessfully')
         } catch (error) {
            console.log('databse connection error')
         }
}
module.exports =  Connectdb;