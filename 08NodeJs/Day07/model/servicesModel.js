const mongoose = require ('mongoose')

const serviceSchema = new mongoose.Schema({
    serviceName:{type:String, required:true},
    place:{type:String, required:true},
    fee:{type:String, required:true}
})

const Services = mongoose.model("Services",serviceSchema)

module.exports = Services