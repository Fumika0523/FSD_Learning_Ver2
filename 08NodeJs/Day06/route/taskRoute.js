const Task = require('../model/taskModel')
const express = require('express')
const router = express.Router()

//GET
router.get('/task',async(req,res)=>{
    const getAllTask=await Task.find({})
    res.send({message:"Task All data Not Found"})
})

//GET_ID
router.get('/task/:id',async(req,res)=>{
    const getTask = await Task.findById(req.params.id)
    if(getTask){
        res.send(getTask)
    }
    res.send({message:"Task Not Found"})
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
    const updateTask = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    if(updateTask){
        return res.send(updateTask)
    }
    res.send({message:"Task NOT FOUND, hence unable to update"})
})

//DELETE
router.delete('/task/:id',async(req,res)=>{
    const deletedTask = await Task.findByIdAndDelete(req.params.id)
    if(deletedTask){
        res.send({
            deleteTask:deletedTask,
            message:"deleted successfully"
        })
    }
  res.send({message:"Task Does not Exists, Hopefully its Deleted Kindly re-check"})

})

module.exports = router

