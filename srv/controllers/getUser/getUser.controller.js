/**
 * Route handler: return a user
 * @param {Object} req the HTTP request object
 * @param {Object} res the HTTP response object
 */
const controller = async (req, res) => {
    //get URL params
    const {userId} = req.query;
    const Users = { name: 'customexpressendpoints.db.Users' };

    try {
        const dbService = await cds.connect.to('db');
        const results = await dbService.run(
            SELECT.from(Users).where({
                ID: userId
            }),
        );
        return res.type('application/json').status(200).send(JSON.stringify(results));
    } catch (e) {
        return res.type('text/plain').status(500).send(`ERROR: ${e.toString()}`);
    }
};

module.exports = controller;
