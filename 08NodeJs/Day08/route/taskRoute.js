const Task = require('../model/taskModel')
const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

//POST
router.post('/addtask',auth,async(req,res)=>{
    //token to be send out to the postman
    //token >> signin
    //console.log(req.user) // auth
    try{
        const taskData = new Task({
            ...req.body, //making the copy of req.body
            owner:req.user._id // this one I need to update
        })
         if(taskData){
            await taskData.save() // async & await >> its not going to block, unless you finish your work (taskData.save()), don't procees, waiting time to operation complete, 
            //save() >> save to the DB
            res.send({
                taskData,
            message:"Task has been added successfully"})
        }
        res.send(
            {
                message:"Task cannot be added"
            })
    }catch(e){
        res.send(
            {message:"Some Internal Error"}
        )}
})

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



//UPDATE
router.put('/task/:id',async(req,res)=>{
    // const updateTask = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    // if(updateTask){
    //     return res.send(updateTask)
    // }
    // res.send({message:"Task NOT FOUND, hence unable to update"})

    try{
        const putTask = await Task.findByIdAndUpdate(req.params.id)
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
    const deleteTask = await Task.findByIdAndDelete(req.params.id)
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

