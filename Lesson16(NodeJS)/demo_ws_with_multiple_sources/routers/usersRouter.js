const express = require('express');
const router = express.Router();

const usersBLL = require('../BLL/usersBLL');

// http://localhost:8000/users

//GET
router.get('/', async (req, res) => {
  try {
    const users = await usersBLL.getUsers();
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json(e); // 500 - Internal Server Error
  }
});

module.exports = router;
