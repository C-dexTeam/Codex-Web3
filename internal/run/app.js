const express = require('express')
const app = express();
const Services = require('../service/services');
const SolonaService = require('../service/solona');
const Handler = require('../http/handler/handler');
const SolonaRoutes = require('../http/routes/solona');

const Run = (config) => {
    // Service Implementation
    const solonaService = new SolonaService("devnet")
    const services = new Services(solonaService)

    // Handler Implementation
    const handler = new Handler(services)

    // Creation of Routes
    const solonaRouter = new SolonaRoutes(handler)

    // Implementation of Routers
    app.use('/solona', solonaRouter.init())

    // Start Server
    const port = config.http.port;
    app.listen(port, () => {
        console.log(`Codex-Web3 Server Listening on Port ${port}`)
    })
}

module.exports = Run