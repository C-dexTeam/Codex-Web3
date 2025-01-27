const express = require('express');
const router = express.Router();

class SolonaRoutes {
    constructor(handler) {
        this.handler = handler;
    }

    init() {
        router.get('/', this.handler.SolonaHandler().Hello);

        return router
    }
}

module.exports = SolonaRoutes;
