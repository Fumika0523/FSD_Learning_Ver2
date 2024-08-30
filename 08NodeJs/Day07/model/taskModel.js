const mongoose=require('mongoose')

const taskSchema = new mongoose.Schema({
    task_name: {type:String,required:true,uppercase:true},
    user_name:{type:String,required:true},
    description:{type:String,required:false,lowercase:true},
    duration:{type:Number,required:true,default:5},
    location:{type:String,required:true,default:"unknown"},
    completed:{type:Boolean,required:true}
})

const Task = mongoose.model("Task", taskSchema)

module.exports = Task

// only this style only to create a schema