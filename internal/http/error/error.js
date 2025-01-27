const ResponseData = require("../response/response");

class Error {
    constructor(res) {
        this.res = res;
    }

    SetRes(res) {
        this.res = res
    }

    OK(message, data = null) {
        const response = new ResponseData(message, 200, data);
        return this.res.status(200).json(response);
    }

    BadRequest(message, error) {
        const response = new ResponseData(message, 400, null, error);
        return this.res.status(400).json(response);
    }

    InternalServerError(message, error) {
        const response = new ResponseData(message, 500, null, error);
        return this.res.status(500).json(response);
    }
}

module.exports = Error;