const Task = require('../model/taskModel')
const express = require('express')
const router = express.Router()

//GET
router.get('/task',async(req,res)=>{
    // const getAllTask=await Task.find({})
    // res.send({message:"Task All data Not Found"})

    try{
        const getAllTask = await Task.find({})
        if(getAllTask){
            res.send(getAllTask)
        }
        res.send(
            {message:"Task Not Found"}
        )
    }catch(e){
        res.send(
            {message:"Some Internal Error"}
        )
    }
})

//GET_ID
router.get('/task/:id',async(req,res)=>{
    //try{}catch(e){}
    //try catch block {}
    // try > executable cose
    // catch >> error handling

    // const getTask = await Task.findById(req.params.id)
    // if(getTask){
    //     res.send(getTask)
    // }
    // res.send({message:"Task Not Found"})

try{
    const getTask = await Task.findById(req.params.id)
    if(getTask){
        res.send(getTask)
    }
    res.send({message:"Task Not Found"})
}catch(e){
    //console.log(e.reason)
    res.send(
        {message:"Some Internal Error"}
    )
}

})

//POST
router.post('/addtask',async(req,res)=>{
    const taskData = new Task (req.body)
    taskData.save()
    if(taskData){
    res.send(taskData)
    }
    res.send({message:"Task Cannot be posted"})
})

//UPDATE
router.put('/task/:id',async(req,res)=>{
    // const updateTask = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    // if(updateTask){
    //     return res.send(updateTask)
    // }
    // res.send({message:"Task NOT FOUND, hence unable to update"})

    try{
        const putTask = await Task.findById(req.params.id)
        if(putTask){
            res.send(putTask)
        }
        res.send({message:"Task Not Found"})
    }catch(e){
        res.send(
            {message:"Some Internal Error"}
        )
    }

})

//DELETE
router.delete('/task/:id',async(req,res)=>{
//     const deletedTask = await Task.findByIdAndDelete(req.params.id)
//     if(deletedTask){
//         res.send({
//             deleteTask:deletedTask,
//             message:"deleted successfully"
//         })
//     }
//   res.send({message:"Task Does not Exists, Hopefully its Deleted Kindly re-check"})

try{
    const deleteTask = await Task.findById(req.params.id)
    if(deleteTask){
        res.send(deleteTask)
    }
    res.send({message:"Task Not Found"})
}catch(e){
    res.send(
        {message:"Some Internal Error"}
    )
}
})

module.exports = router

