const mongoose = require('mongoose')

const Schema = mongoose.Schema

const vesselSchema = new Schema({
    sourcemmsi:String,
    navigationalstatus:Number,
    rateofturn:Number,
    speedoverground:Number,
    courseoverground:Number,
    shiptype:String,
    trueheading:Number,
    maritime_area:String,
    ship_name:String,
    country:String,
    dt:Date
    // location:corr
 
})

// const  corr {
//     type: string,
     
//      coordinates:[]
//  }
 


module.exports = mongoose.model('vessel',vesselSchema,'vessel_dynam5')