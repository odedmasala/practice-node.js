const express = require("express");
const fliyBL = require("../BL/fliytBL");
const router = express.Router();

router.get("/:name", async (rep, res) => {
  try {
    const name = rep.params.name;
    const data = await fliyBL.printData(name);
    res.status(200).json({ flyData: data });
  } catch (e) {
    res.status(500).json({ msg: e });
  }
});

module.exports = router