const mongoose=require('mongoose')

const taskSchema = new mongoose.Schema({
    task_name: {type:String,required:true,uppercase:true},
    description:{type:String,required:false,lowercase:true},
    completed:{type:Boolean,required:true},
    //Owner field is added at the later stage to ensure to have a user id against each task which is referring to the user model
    owner:{ // user_id
        type:mongoose.Schema.Types.ObjectId, //ObjectId('66bb32d3777fa07c9897d198') from the MongoDb, this the type. when we create the relationship between the two collections.
        ref:"User", // refer to user model
        required:true //you need the user id,
    }
})

const Task = mongoose.model("Task", taskSchema)
module.exports = Task

// only this style only to create a schema