import mongoose from 'mongoose';
const connectdb=async( database_url)=>{
    try{
        const DB_OPTIONS={
            dbname:"school",
        };
        await mongoose.connect( database_url,DB_OPTIONS)
        console.log("connection successfully...");
    }catch(err){
        console.log(err);
    }
   
}
export default connectdb;