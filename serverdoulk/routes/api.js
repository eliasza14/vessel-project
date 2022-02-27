const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const { runInNewContext } = require('vm')

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

    const pvess=await Vessel.aggregate([{  $match: {country: vessel.country}},{$limit:1500} ], (error, pvess) => {
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


      router.post('/vesselsinsidepolygondate',async (req, res) =>  {
        // let vesselData = req.body
        let dt1= req.body.date
        console.log(dt1[0].toString())
        console.log(dt1)
        // let dt2= req.body.date
        // console.log(dt2[1])

        let test=req.body.vessel
        console.log(test)
        // let vessel=new Vessel(vesselData)
        // console.log('mpike sto vessel me date inside poly')
        // console.log(vesselData)
        
        const pvess=await Vessel.aggregate([
          { "$match": {dt: { "$gte" : new Date(dt1[0].toString())  }} },
          {  "$match":{dt: {"$lt" : new Date(dt1[1].toString())    }} },
          { "$match": {location:{$geoWithin:{$geometry:{type:"Polygon",coordinates: [
          test
        ]}}}
        } },{$limit:100}
      ], (error, pvess) => {
              if (error) {
                console.log(error)
              } else {
                  console.log(pvess)
                  res.send(pvess)
              }
              }).allowDiskUse(true) 
        
        
        })
  




router.get('/', (req, res) => {
    res.send('From API route')
  })

module.exports = router
  