const express = require('express'),
    expenseRouter = new express.Router(),
    expencesController = require('../controllers/expenses');

expenseRouter.route('/').post(expencesController.create);

module.exports = expenseRouter;