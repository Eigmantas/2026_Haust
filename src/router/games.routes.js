const express = require('express');
const router = express.Router();

const gamesController = require('../controllers/games.controller');

router.get('/', gamesController.index);
router.get('/game/:id', gamesController.gameDetails);

module.exports = router;