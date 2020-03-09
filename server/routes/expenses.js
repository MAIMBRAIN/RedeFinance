const express = require('express'),
    expenseRouter = new express.Router(),
    expensesController = require('../controllers/expenses');

expenseRouter.route('/expenses').get(expensesController.index);
expenseRouter.route('/create').post(expensesController.create)


module.exports = expenseRouter;