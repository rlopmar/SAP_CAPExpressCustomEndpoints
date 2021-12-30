const cds = require('@sap/cds');
const odatav2adapterproxy = require('@sap/cds-odata-v2-adapter-proxy');

// Custom routes handler
const customRouter = require('./routes');

cds.on('bootstrap', (app) => {

    //Set custom routes
    app.use(customRouter);

    //Adapter for OData V2
    app.use(odatav2adapterproxy());
});

module.exports = cds.server;