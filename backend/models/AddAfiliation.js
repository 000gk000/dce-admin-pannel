const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    strength:{
           type:String,
           required:true
    },
    year:{
        type:String,
        required:true
    }
})

const Addafiliation = new mongoose.model('Addafiliation',userSchema)
module.exports=Addafiliation;