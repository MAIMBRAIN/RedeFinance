const expess = require('express'),
    incomeRouter = new expess.Router(),
    incomesController = require('../controllers/incomes');

incomeRouter.route('/incomes').get(incomesController.index);
incomeRouter.route('/create').get(incomesController.create);
incomeRouter.route('/delete/:id').get(incomesController.destroy);

module.exports = incomeRouter;