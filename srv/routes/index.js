const Router = require('express').Router;
const router = Router();

//Collection of routes and their controllers
const routes = require('./routes');

/**
 * Set controller for each route
 * @param routes The collection of routes
 * @param router The Express Router
 */
const setControllers = (routes, router) => {
    routes.forEach((route) => {
        switch (route.method) {
            case 'GET': {
                router.get(route.path, (req, res) => route.controller(req, res));
                break;
            }
            case 'POST': {
                router.post(route.path, (req, res) => route.controller(req, res));
                break;
            }
            case 'PATCH': {
                router.patch(route.path, (req, res) => route.controller(req, res));
                break;
            }
            case 'DELETE':
                router.delete(route.path, (req, res) => route.controller(req, res));
                break;
            default:
                router.get(route.path, (req, res) =>
                    res.type('text/plain').status(405).send('ERROR: Unsupported HTTP method'),
                );
                break;
        }
    });
};
setControllers(routes, router);

module.exports = router;
module.exports.setControllers = setControllers;
