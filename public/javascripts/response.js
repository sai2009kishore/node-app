class Response {
    constructor(status, data, message) {
        this.status = status;
        this.data = data;
        this.message = message;
    }

    getStatus() {
        return this.status;
    }

    getData() {
        return this.data;
    }

    getMessage() {
        return this.message;
    }
}

module.exports = { Response };