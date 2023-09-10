const mongoose = require('mongoose');

async function connectDB(){
    try{
         await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("SUCCESSFUL Database connection");
    }catch (err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;

// ,{
//     useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
// }
