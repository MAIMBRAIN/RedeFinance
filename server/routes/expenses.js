const express = require('express'),
    expenseRouter = new express.Router(),
    expensesController = require('../controllers/expenses');

expenseRouter.route('/expenses').get(expensesController.index);
expenseRouter.route('/create').post(expensesController.create);
expenseRouter.route('/delete/:id').delete(expensesController.destroy);

module.exports = expenseRouter;