const Error = require("../error/error");
const SolonaHandler = require("./solana");

class Handler {
    constructor(services) {
        this.services = services;
        this.errorHandler = new Error()

        this.solonaHandler = new SolonaHandler(
            this.services,
            this.errorHandler,
        ); 
    }

    SolonaHandler() {
        return this.solonaHandler; 
    }
}

module.exports = Handler;
