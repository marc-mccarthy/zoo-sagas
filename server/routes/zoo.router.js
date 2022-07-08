const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

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
			console.log(result.rows);
			res.send(result.rows);
		})
		.catch((err) => {
			res.sendStatus(500);
		});
});

router.post('/add', (req, res) => {
	console.log(req.body);
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
	console.log(req.params);
	pool
		.query(`DELETE FROM "species" WHERE id = $1`, [req.params.id])
		.then((result) => {
			res.sendStatus(201);
		})
		.catch((err) => {
			res.sendStatus(500);
		});
});

module.exports = router;
