/**
 * Route handler: Health check service. Returns 200 if the service is running
 * @param {Object} req the HTTP request object
 * @param {Object} res the HTTP response object
 */
const controller = async (req, res) => {
    res.status(200).send('OK');
};

module.exports = controller;
