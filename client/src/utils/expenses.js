import axios from 'axios';

export default {
    // Take the data from frontend and send it to router
    createExpense: function(data)
    {
        return axios.post('/api/expense/create', data);
    },

    // Gets all expenses
    getExpenses: function()
    {
        return axios.get('/api/expense/expenses')
    },

    // Delete the selected expense
    // deleteExpense: function()
    // {
    //     return axios.delete('/api/expense/expenses/:id')
    // }
};