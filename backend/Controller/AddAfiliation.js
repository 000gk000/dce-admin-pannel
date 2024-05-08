const user = require('../models/AddAfiliation')

const registerAfiliation = async(req,res)=>{
    try {
         const{name,strength,year} = req.body;
         //creating a new field 
         const newfield = await user.create({name,strength,year})
        
         return res.status(201).json({msg:'added sucessfully',data:newfield})

    } catch (error) {
        console.log('internal server error')
    }
}
module.exports = registerAfiliation