const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db')
const cors = require('cors')

//importing database connection
mongoDB();

// app.get('/', (req, res) => {
//     res.send('Hello world')
// })

//cors access
app.use(cors(
    {
        origin: ["https://food-app-frontend.vercel.app"],
        methods: ['POST', 'GET'],
        credentials: true
    }
))

//Providing cross origin access
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

//Routes
app.use(express.json())

app.use('/api', require("./Routes/CreateUser"));

app.use('/api', require("./Routes/DisplayData"));

app.use('/api', require("./Routes/OrderData"));

//Application listen to port
app.listen(port, () => {
    console.log(`app listen to port ${port}`)
})