//task (collection name)
// description : string
//  name:  string
//  completed   : boolean

const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/fumika01_mongoose")

const Task=mongoose.model("Task",{
    name: {type:String,required:true},
    description:{type:String,required:false},
    completed:{type:Boolean,required:true}
})

const taskData= new Task ({
    name:"English Lesson",
    // description:"Afterschool",
    completed:true
})

const connection=async()=>{
    const res=await taskData.save()
    console.log(res,"Added to DB")
}
connection()