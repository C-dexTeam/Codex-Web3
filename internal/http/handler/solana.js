class SolonaHandler {
    constructor(services, errorHandler) {
        this.services = services;
        this.errorHandler = errorHandler
    }

    Hello = (req, res) => {
        this.errorHandler.SetRes(res)
        let name = req.query.name;

        if (!name) {
            return this.errorHandler.BadRequest("Name parameter is required.", null)
        }
        let msg = this.services.SolonaService().Hello(name);
        
        return this.errorHandler.OK("Hello Success", msg);
    }
}

module.exports = SolonaHandler;
