const mongoose = require ('mongoose')

const serviceSchema = new mongoose.Schema({
    serviceName:{type:String, required:true},
    description:{type:String, required:true},
})

const Services = mongoose.model("Services",serviceSchema)

module.exports = Services