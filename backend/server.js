require('dotenv').config();
const express = require('express');
const connectDB=require('./config/mongodb')
const connectCloudinary=require('./config/cloudinary')
const cors = require('cors');

const port = process.env.PORT || 5000;

//api config
const app = express();
connectDB()
connectCloudinary()

//middlewares
app.use(express.json());
app.use(cors());


//api endpoints

app.get('/api/data', (req, res) => {
        const data = {
          message: 'Hello from the backend!',
          timestamp: new Date().toISOString(),
        };
        res.json(data);
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
