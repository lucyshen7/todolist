const express = require('express');
const router = express.Router();
import db from './index';

// POST to todos table
router.post("/api/data", (req: any, res: any) => {
  const query = ``;
  db.query(query)
    .then((response: any) => {
      res.json({ response });
    })
    .catch((err: any) => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// export router object
module.exports = router;
