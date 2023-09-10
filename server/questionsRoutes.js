const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questionsController');


router.route('/')
    .get(questionsController.getAllQuestions);


module.exports = router;