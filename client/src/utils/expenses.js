import axios from 'axios';

export default {
    createExpense: function(data)
    {
        return axios.post('/api/expense', data);
    }
};