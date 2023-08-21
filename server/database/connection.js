const mongoose = require('mongoose');
const connectDB = async ()=>{
    try {
        const con =await mongoose.connect(process.env.MONGO_URL,{ 
            useNewUrlParser: true,
          })
        console.log("mongodb is connected");
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports =connectDB