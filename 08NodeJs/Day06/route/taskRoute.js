const Task = require('../model/taskModel')
const express = require('express')
const router = express.Router()

//GET
router.get('/task',async(req,res)=>{
    const getAllTask=await Task.find({})
    res.send(getAllTask)
})

//GET_ID
router.get('/task/:id',async(req,res)=>{
    const getTask = await Task.findById(req.params.id)
    res.send(getTask)
})

//POST
router.post('/addtask',async(req,res)=>{
    const taskData = new Task (req.body)
    taskData.save()
    res.send(taskData)
})

//UPDATE
router.put('/task/:id',async(req,res)=>{
    const updateTask = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.send(updateTask)
})

//DELETE
router.delete('/task/:id',async(req,res)=>{
    const deleteTask = await Task.findByIdAndDelete(req.params.id)
    res.send({
        deletedTask:deleteTask,
        message:"deleted successfully"
    })
})

module.exports = router