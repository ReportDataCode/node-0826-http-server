const express = require('express');
const router = express.Router();

router.get('/view', (req, res) => {
    // res.send('view list and hello andrew!');
    res.json({
        "firstName": "Juan",
        "lastName": "Dela Cruz",
        "age": 20

    });
});

router.post('/insert', (req, res) => {
    // res.send('view list and hello andrew!');
    res.json({
        "message": "success",
    });
});


router.get('/', (req, res) => {
    res.send("This works andrew!");
});


module.exports = router;