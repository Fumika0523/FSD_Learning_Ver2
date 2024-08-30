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
        if(!taskData){res.send(
            {message: "Task cannot be added"})}
            {await taskData.save() // async & await >> its not going to block, unless you finish your work (taskData.save()), don't procees, waiting time to operation complete, 
            //save() >> save to the DB
            // object short hand property || key:value same so just pass key name, ret will be handled by js
            //res.send({taskData,message:"Task created successfully"})
            res.send({ taskData: taskData, message: "Task has been added successfully" })
        }
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
        if (!getUser) {
            res.send({ message: "Task Not Found" })
        }
        res.send({ "TaskData": req.user.taskRel, message: "Task found successfully" })
    } catch (e) {
        res.send({ message: "Some Internal Error" })
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
router.get('/task/:id', auth, async (req, res) => {
    console.log(req.params.id) //task_id
    console.log(req.user._id) //user._id
    //findOne
    try {
        const getTask = await Task.findOne({ _id: req.params.id, owner: req.user._id })
        if (!getTask) {
            res.send({ message: "Task Not Found" })
        }
        res.send({ getTask, message: "Task found successfully" })
    } catch (e) {
        res.send({ message: "Some Internal Error" })
    }
    //console.log(getTask)  
})

//UPDATE
//get the Token (user signin) and Task id. 
//pass auth as middleware
//in postman Header, provide the authorization: Bearer Token and TaskID on url.
//in Body, provide the details that you want to update.
//when you click the send, middleware will b executed and next() will give permission to execute the async function
//// findOneAndUpdate(_id:req.params.id,owner:req.user._id)
//_id:req.params.id <<< From the Task URL
//owner:req.user._id  <<<< From auth middleware
// req.body, { new: true, runValidators: true }
router.put('/task/:id', auth, async (req, res) => {
    try {
        console.log("Update Task by ID", req.params.id)
        //find both at the same time{user id (owner) + _id(taskId)}
        //what do you want update >>> req.body
        //{new:true,runValidators:true} >>>>> update by 1click
        const getTaskUpdate = await Task.findOneAndUpdate({ _id: req.params.id, owner: req.user._id }, req.body, { new: true, runValidators: true })
        //both way is the same
        //if (getTaskUpdate) {
        //res.send(getTaskUpdate)
        //}else{
        //res.send({message:"Task Not Found"})
        //}
        if (!getTaskUpdate) {
            res.send({ message: "Task Not Found" })
        }
            res.send({ message: "Task Update completed", getTaskUpdate })
    } catch (e) {
            res.send({ message: "Some Internal Error" })
    }
})

//DELETE
//get the token(user signin) and Task id
//pass auth as middleware
//in postman header, provide the authorization:Bearer Token and Task id on URL.
// when you click the send, middleware will b executed and next() will give permission to execute the async function
// findOneAndDelete(_id:req.params.id,owner:req.user._id)
//_id:req.params.id <<< From the Task URL
//owner:req.user._id  <<<< From auth middleware
    router.delete('/task/:id',auth, async (req, res) => {
        try {
            console.log("Delete Task by ID",req.params.id)
            const deleteTask = await Task.findOneAndDelete({_id:req.params.id,owner:req.user._id})
            if(!deleteTask) {
                res.send({ message: "Task Not Found" })
            }
                res.send({message:"Task has been deleted successfully",deleteTask})
        } catch (e) {
            res.send(
                { message: "Some Internal Error" }
            )}
    })

module.exports = router

