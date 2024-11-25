import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose
    .connect(process.env.MONGO_URI , {
        dbName : "RESTAURANT" ,
        serverSelectionTimeoutMS: 10000,
    })
    .then(()=>{
        console.log("database is connected succesfully!");
    })
    .catch( (err) =>{
        console.log(`somme error occur while connecting the database ${err.message}`)
    })
}