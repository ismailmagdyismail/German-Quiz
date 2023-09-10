module.exports = class AppError extends Error{
    constructor(message,statusCode) {
        super(message);
        this.statusCode = statusCode || 500;
        this.status = String(statusCode)[0]===('4') ? 'fail' : 'error';
    }
}
