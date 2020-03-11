const expess = require('express'),
    incomeRouter = new expess.Router(),
    incomesController = require('../controllers/incomes');

incomeRouter.route('/incomes').get(incomesController.index);
incomeRouter.route('/create').post(incomesController.create);
incomeRouter.route('/delete/:id').delete(incomesController.destroy);

module.exports = incomeRouter;