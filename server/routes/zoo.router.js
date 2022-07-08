const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
	pool
		.query(
			`SELECT * FROM "class" JOIN "species" ON species.class_id = class.id;`
		)
		.then((result) => {
			res.send(result.rows);
		})
		.catch((err) => {
			res.sendStatus(500);
		});
});

router.get('/classes', (req, res) => {
	pool
		.query(`SELECT * FROM "class";`)
		.then((result) => {
			res.send(result.rows);
		})
		.catch((err) => {
			res.sendStatus(500);
		});
});

router.post('/add', (req, res) => {
	pool
		.query(
			`INSERT INTO "species" ("species_name", "class_id") VALUES ($1, $2)`,
			[req.body.species, req.body.animalClass]
		)
		.then((result) => {
			res.sendStatus(201);
		})
		.catch((err) => {
			res.sendStatus(500);
		});
});

router.delete('/delete/:id', (req, res) => {
	pool
		.query(`DELETE FROM "species" WHERE id = $1`, [req.params.id])
		.then((result) => {
			res.sendStatus(201);
		})
		.catch((err) => {
			res.sendStatus(500);
		});
});

router.post('/classes/add', (req, res) => {
    pool
        .query(
            `INSERT INTO "class" ("class_name") VALUES ($1)`, [req.body.newClass]
        ).then(result => {
            res.sendStatus(201);
        }).catch(err => {
            res.sendStatus(500);
        })
})

module.exports = router;
