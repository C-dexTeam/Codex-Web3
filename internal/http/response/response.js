class ResponseData {
    constructor(message, status, data = null, error = null) {
        this.message = message;
        this.status = status;
        this.data = data;
        this.error = error;
    }
}

module.exports = ResponseData