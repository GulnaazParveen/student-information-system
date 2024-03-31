import mongoose from "mongoose";

// defining schema
const studentSchema= new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true,min:18,max:60},
    fees:{
        type:mongoose.Decimal128,required:true,validate:(value)=>value>=500.5
        // validate:(value)=>value>=500.5 khud ka validation  that is fees at least 500 this is not inbuilt
    }
})
//model
const StudentModel=mongoose.model("student",studentSchema);

export default StudentModel