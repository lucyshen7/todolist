const express = require('express');
const router = express.Router();
const db = require('../db/index');

// GET todos
router.get("/api/todos", (req, res) => {
  let query = `SELECT * FROM todos;`;
  db.query(query)
    .then((response) => {
      console.log('responseee', response);
      res.json({ response });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// POST to todos table
router.post("/api/todos", (req, res) => {
  const query = ``;
  db.query(query)
    .then((response) => {
      res.json({ response });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// export router object
module.exports = router;