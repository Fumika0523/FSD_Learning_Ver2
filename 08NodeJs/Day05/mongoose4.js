// (collectionName: Task_details,create 8 schemas(+5),lowercase,default,mongoose4,test async function, save() )  

const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/fumika01_mongoose")

const Task_details = mongoose.model("Task_details",{
    task_name: {type:String,required:true,uppercase:true},
    user_name:{type:String,required:true},
    description:{type:String,required:false,lowercase:true},
    duration:{type:Number,required:true,default:"5hr"},
    location:{type:String,required:true,default:"unknown"},
    date:{type:Number},
    completed:{type:Boolean,required:true}
})
//until Line15, creating Collection

const Task_details_Data = new Task_details ({
    task_name: "Dance lesson",
    user_name: "Mary",
    description: "Every wednesday at 10:00am",
    duration:"2",
    location:"Tokyo Station",
    date:10_08_2024,
    completed:true,
})

const connection = async()=>{
    const res=await Task_details_Data.save()
    console.log(res,"Addes to DB")
}
connection()