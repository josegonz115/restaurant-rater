require('dotenv').config()
const express = require('express')
const db = require('./db')
const morgan = require('morgan')
const app = express()


app.use(express.json())

// GET all restaurants
app.get('/api/v1/restaurants', async (req, res)=>{
    try {
        const results = await db.query('SELECT * FROM restaurants;')
        console.log('route handler ran')
    
        res.status(200).json({
            status: 'success',
            results: results.rows.length,
            data : {
                restaurant: results.rows
            }
        }) 
    } catch (error) {
        console.log(err)
    }
})
// http://localhost:3001/getRestaurants


// GET a restaurant
app.get('/api/v1/restaurants/:id', async (req, res)=>{
    console.log(req.params.id)

    try {
        const results = await db.query("SELECT * FROM restaurants WHERE id= $1;", [req.params.id])

        res.status(200).json({
            status: "success",
            data: {
                restaurant : results.rows[0],
            }
        })
    } catch (err) {
        console.log(err)
    }


})

// POST a restaurant
app.post('/api/v1/restaurants', async (req, res)=>{
    console.log(req.body)

    try {
        const results = await db.query(
            "INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *;",
            [req.body.name, req.body.location, req.body.price_range]
        )
        console.log(results)
        res.status(201).json({
            status:"success",
            data: {
                restaurant: results.rows[0],
            }
        })
    } catch (error) {
        console.log(err)
    }

})

// PUT Restaurants
app.put('/api/v1/restaurants/:id', async (req, res)=>{
    console.log(req.params)
    console.log(req.body)

    try {
        const results = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 returning *;",
        [req.body.name, req.body.location, req.body.price_range, req.params.id])
        console.log(results)

        res.status(201).json({
            status:"success",
            data: {
                restaurant: results.rows[0]
            }
        })
    } catch (error) {
        console.log(err)
    }

})

// DELETE Restaurants
app.delete('/api/v1/restaurants/:id', async(req, res)=>{
    try {
        const results = await db.query( "DELETE FROM restaurants where id = $1", [req.params.id])
        console.log(results)
        res.status(204).json({
            status:"success",
        })
    } catch (error) {
        console.log(err)
    }



})


const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log(`server is up and listening on port ${port}`)
})



// CRUD OPERATIONS          Method    URL
// retrieve all restaurants GET       /api/v1/restaurants
// retrieve one restaurant  GET       /api/v1/restaurants/:id
// create restaurant        POST      /api/v1/restaurants
// update restaurant        UPDATE    /api/v1/restaurants/:id
// delete restaurant        DELETE    /api/v1/restaurants/:id



// 2:03:13