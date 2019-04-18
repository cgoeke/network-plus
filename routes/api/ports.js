const express = require("express");
const router = express.Router();

router.get("/ports", (req, res) => {
  const portsDB = req.app.locals.db.collection("ports");
  
  portsDB.find({}).toArray((err, ports) => {
    if (err) {
      res.status(400).json({"error": err})
    }
    if (ports === undefined || ports.length === 0) {
      res.status(400).json({"error": "Unable to locate data"})
    } else {
      res.status(200).json(ports)
    }
  })
});

module.exports = router;