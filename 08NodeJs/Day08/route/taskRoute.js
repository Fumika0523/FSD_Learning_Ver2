const Task = require('../model/taskModel')
const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

//POST
router.post('/addtask', auth, async (req, res) => {
    //token to be send out to the postman
    //token >> signin
    //console.log(req.user) // auth
    try {
        const taskData = new Task({
            ...req.body, //making the copy of req.body
            owner: req.user._id // this one I need to update
        })
        if (taskData) {
            await taskData.save() // async & await >> its not going to block, unless you finish your work (taskData.save()), don't procees, waiting time to operation complete, 
            //save() >> save to the DB
            // object short hand property || key:value same so just pass key name, ret will be handled by js
            //res.send({taskData,message:"Task created successfully"})
            res.send({taskData:taskData,message: "Task has been added successfully"})
        }
        res.send(
            {
                message: "Task cannot be added"
            })
    } catch (e) {
        res.send(
            { message: "Some Internal Error" }
        )
    }
})

//GET
router.get('/task', auth, async (req, res) => {
    //auth > token are always together
    // console.log(req.user._id)
    try {
        //user._id >>
        //virtual field taskRel >> populated
        //populate(virtualFieldName)
        const getUser = await req.user.populate('taskRel')
        //in the beg TaskRel is empty (just had a relationship)
        //populate(add the data to it)
        //inside the taskRel
        //req.user
        //populate>>
        if (getUser) {
            res.send({
                "TaskData":req.user.taskRel,
                message:"Task found successfully"
            })
        }
        res.send({ message: "Task Not Found" })
    } catch (e) {
        res.send({ message: "Some Internal Error"})
    }
})

//GET_Task_ID
//get the data with the task_id
//but the data should be a signed user

//signed user >> auth >> path the token
//req.user, _id of that signed user
//task_id, req.user._id >>> both needs to be verified and then we will get the correct task otherwise null
//Test the route >
//1. Sign-in route > get the token, 
//2. get Alltask >  paste the token in Headers (Authorization:Beaer token) > get the TaskID
//3. get Task by Id (/task:id) > pass the TaskId to the URL + pass the Token in the Header
router.get('/task/:id',auth,async(req,res)=>{
    console.log(req.params.id) //task_id
    console.log(req.user._id) //user._id
    //findOne
    const getTask = await Task.findOne({_id:req.params.id,owner:req.user._id})
    //console.log(getTask)
    res.send(getTask)
})

//UPDATE
router.put('/task/:id', async (req, res) => {
    // const updateTask = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    // if(updateTask){
    //     return res.send(updateTask)
    // }
    // res.send({message:"Task NOT FOUND, hence unable to update"})

    try {
        const putTask = await Task.findByIdAndUpdate(req.params.id)
        if (putTask) {
            res.send(putTask)
        }
        res.send({ message: "Task Not Found" })
    } catch (e) {
        res.send(
            { message: "Some Internal Error" }
        )
    }

})

//DELETE
router.delete('/task/:id', async (req, res) => {
    //     const deletedTask = await Task.findByIdAndDelete(req.params.id)
    //     if(deletedTask){
    //         res.send({
    //             deleteTask:deletedTask,
    //             message:"deleted successfully"
    //         })
    //     }
    //   res.send({message:"Task Does not Exists, Hopefully its Deleted Kindly re-check"})

    try {
        const deleteTask = await Task.findByIdAndDelete(req.params.id)
        if (deleteTask) {
            res.send(deleteTask)
        }
        res.send({ message: "Task Not Found" })
    } catch (e) {
        res.send(
            { message: "Some Internal Error" }
        )
    }
})

module.exports = router

