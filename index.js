const express = require('express');
const app = express();
const infoRouter = require('./src/routes/informations');
const { serverPort } = require('./src/core/config/config');

try {
    app.use((req, res, next) => {
        console.log(`[${req.url}] - ${new Date().toISOString()}`);
        next();
    });

    app.use('/api/informations', infoRouter);

    app.listen(serverPort, () => {
        console.log(`Starting express server on port ${serverPort}`);
    });
} catch (err) {
    console.error(err);
}
