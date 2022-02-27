const mongoose = require('mongoose')

const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    name:String,
    city:String,
    cuisine:[String],
    ranking:Number,
    rating:Number,
    price:String,
    numberOfReviews:Number,
   
 
})

module.exports = mongoose.model('restaurant',restaurantSchema,'restaurants')