const mongoose = require("mongoose");


const databaseConnect =()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then((data) => { 
            console.log(`Mongodb connected with server:${data.connection.host}`);
    })
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

module.exports=databaseConnect;