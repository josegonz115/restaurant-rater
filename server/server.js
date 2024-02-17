import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import * as db from './db/index.js'
import morgan from 'morgan';

const app = express()


app.use(cors())
app.use(express.json())

// GET all restaurants
app.get('/api/v1/restaurants', async (req, res)=>{
    try {
        const restaurantRatingsData = await db.query(
            "SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating),1) AS average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id = reviews.restaurant_id;")
    
        res.status(200).json({
            status: 'success',
            results: restaurantRatingsData.rows.length,
            data : {
                restaurants: restaurantRatingsData.rows
            }
        }) 
    } catch (err) {
        console.log(err)
    }
})
// http://localhost:3001/getRestaurants


// GET a restaurant
app.get('/api/v1/restaurants/:id', async (req, res)=>{
    console.log(req.params.id);
    try {
        const restaurant = await db.query(
            "SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating),1) AS average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id = reviews.restaurant_id WHERE id = $1",
            [req.params.id]);

        const reviews = await db.query(
            "SELECT * FROM reviews WHERE restaurant_id=$1",
            [req.params.id]
        );
        console.log(reviews);
        res.status(200).json({
            status: "success",
            data: {
                restaurants : restaurant.rows[0],
                reviews: reviews.rows,
            }
        });
    } catch (err) {
        console.log(err.message);
    }
});

// POST a restaurant
app.post('/api/v1/restaurants', async (req, res)=>{
    console.log("Request body:", req.body);
    try {
        const results = await db.query(
            "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *;",
            [req.body.name, req.body.location, req.body.price_range]
        )
        console.log(results)
        res.status(201).json({
            status:"success",
            data: {
                restaurants: results.rows[0],
            }
        })
    } catch (err) {
        console.log('Error:', err.message);
    }
})

// PUT Restaurants
app.put('/api/v1/restaurants/:id', async (req, res)=>{
    try {
        const results = await db.query(
        "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *",
        [req.body.name, req.body.location, req.body.price_range, req.params.id]
        )
        res.status(200).json({
            status:"success",
            data: {
                restaurants: results.rows[0]
            }
        })
    } catch (err) {
        console.log(err)
    }
    console.log(req.params.id);
    console.log(req.body);

})

// DELETE Restaurants
app.delete('/api/v1/restaurants/:id', async(req, res)=>{
    try {
        const results = await db.query( "DELETE FROM restaurants WHERE id = $1", [req.params.id])
        console.log(results)
        res.status(204).json({
            status:"success",
        })
    } catch (err) {
        console.log(err)
    }
})
    
app.post('/api/v1/restaurants/:id/addReview', async (req, res)=>{
    try {
        const newReview = await db.query(
            "INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1, $2, $3, $4) RETURNING *;",
            [req.params.id, req.body.name, req.body.review, req.body.rating]
        )
        console.log(newReview)
        res.status(201).json({
            status: "success", 
            data: {
                review: newReview.rows[0],
            }
        })
    } catch (err) {
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