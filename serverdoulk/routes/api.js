const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Restaurant = require('../models/restaurant')
const Vessel = require('../models/vessels')

const db="mongodb://localhost:27017/vessel_db"


mongoose.connect(db, err => {
  if (err) {
    console.error('Error!' + err)
  } else {
    console.log('Connected to mongodb!')
  }
})



// router.post('/vessels',async (req, res) =>  {
//   let vesselData = req.body
//   let vessel=new Vessel(vesselData)
//   console.log('mpike sto vessels')
//   console.log(vessel.country)

//   await Vessel.find( {country: vessel.country}, (error, pvess) => {
//     if (error) {
//       console.log(error)
//     } else {
//         console.log(pvess)
//         res.json(pvess)
      
//     }
//   })

// })

router.post('/vessels',async (req, res) =>  {
  let vesselData = req.body
  let vessel=new Vessel(vesselData)
  console.log('mpike sto vessels')
  console.log(vessel.country)
  const pvess=await Vessel.aggregate([{  $match: {country: vessel.country}},{$group:{_id: "$sourcemmsi" }}, { $project: {sourcemmsi:1}} ], (error, pvess) => {
        if (error) {
          console.log(error)
        } else {
            console.log(pvess)
            res.send(pvess)
        }
        }).allowDiskUse(true) 
  
  
  })

  router.post('/vesselsbycountry',async (req, res) =>  {
    let vesselData = req.body
    let vessel=new Vessel(vesselData)
    console.log('mpike sto vessel point by country')
    console.log(vessel.country)

    const pvess=await Vessel.aggregate([{  $match: {country: vessel.country}} ], (error, pvess) => {
          if (error) {
            console.log(error)
          } else {
              console.log(pvess)
              res.send(pvess)
          }
          }).allowDiskUse(true) 
    
    
    })



    router.post('/vesselsinsidepolygon',async (req, res) =>  {
      let vesselData = req.body
      let vessel=new Vessel(vesselData)
      console.log('mpike sto vessel inside poly')
      console.log(vesselData)
  
      const pvess=await Vessel.aggregate([{ $match:{ location:{$geoWithin:{$geometry:{type:"Polygon",coordinates: [
        
          vesselData
        //   [
        //     -5.0712901,
        //     47.3944853
        //   ],
        //   [
        //     -7.0927745,
        //     49.7220773
        //   ],
        //   [
        //     -13.6845714,
        //     44.6160776
        //   ],
        //   [
        //     -9.8173839,
        //     43.3825802
        //   ],
        //   [
        //     -3.9726573,
        //     44.11313
        //   ],
        //   [
        //     -5.0712901,
        //     47.3944853
        //   ]
        // ]
      ]}}}}},{$limit:100}
    ], (error, pvess) => {
            if (error) {
              console.log(error)
            } else {
                console.log(pvess)
                res.send(pvess)
            }
            }).allowDiskUse(true) 
      
      
      })





router.get("/rests", async (req, res) => {
	const rests = Restaurant.findOne()
	res.send(rests)
})

router.get("/rests/:id", async (req, res) => {
	const post = await Restaurant.findOne({ _id: req.params.id })
	res.send(post)
})

router.get('/getRest', (req, res) => {
    
    Restaurant.find({city:'Amsterdam'}, (error, prest) => {
        if (error) {
          console.log(error)
        } else {
            console.log(prest)
            res.json(prest)
          
        }
      })
    
  })



router.get('/', (req, res) => {
    res.send('From API route')
  })

module.exports = router
  