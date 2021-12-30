const healthController = require('../controllers/health');
const getUserController = require('../controllers/getUser');

const routes = [
    { path: '/health', method: 'GET', controller: healthController },
    { path: '/get_user', method: 'GET', controller: getUserController },
];

module.exports = routes;
