const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    // YOUR CODE HERE
    pool.query(`SELECT * FROM "species" JOIN "class" ON species.class_id = class.id;`).then(result => {
        res.send(result.rows);
    }).catch(err => {
        res.sendStatus(500);
    })
});

module.exports = router;