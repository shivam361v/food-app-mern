const express = require('express')
const router = express.Router()

//Aquiring data for food and category
router.post('/foodData', (req, res) => {
    try
    {
        res.send([global.food_items, global.food_category])
    }
    catch(error)
    {
        console.error(error.message);
        res.send("Server error")
    }
})

module.exports = router;