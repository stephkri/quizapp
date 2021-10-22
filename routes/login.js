const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    console.log('inside get route')
    res.render('login');
  })
  router.post('/', (req, res) => {
    console.log('inside post route')
    const email = req.body.email;
    const password = req.body.password;
    db.query(`SELECT name FROM users WHERE email = $1 AND password = $2`, [email, password])
      .then((data) => {
        const name = data.rows;
        res.json({ name });
      })
      .catch((err) => {
        res
          .status(500)
          .json({error: err.message});
      });
  })
  return router;
}