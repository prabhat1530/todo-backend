const mongoose=require('mongoose');
const todoSchema= new mongoose.Schema({
  title:{
    type:String,
    required:true,
    unique:true

  },
  description:{
    type:String,
    required:true
  },
  completed:{
    type:Boolean,
    default:false
  }},{timestamps:true})
const todos=mongoose.model("todo",todoSchema) ; 
module.exports=todos;