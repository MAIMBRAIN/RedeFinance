import axios from 'axios';

export default {
    // Send data from frontend and send it to router
    createIncome: function(data)
    {
        return axios.post('/api/income/create', data);
    },

    // Gets all Incomes
    getIncomes: function()
    {
        return axios.get('/api/income/incomes');
    },

    // Delete income by id
    deleteIncome: function(id)
    {
        return axios.delete(`/api/income/delete/${id}`, id);
    }
};