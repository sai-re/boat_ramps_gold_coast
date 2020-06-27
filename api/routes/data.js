const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/assets', (req, res) => {
    //create stream to read large files
    res.setHeader('Content-Type', 'application/json');
    fs.createReadStream(__dirname + '/../data/boat_ramps.geojson').pipe(res);
});

module.exports = router;