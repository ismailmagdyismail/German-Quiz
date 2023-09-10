const AppError = require('./AppError');

const DUPLICATE_KEY = 11000;
const CAST_ERROR = "CastError";
const VALIDATION_ERROR = "ValidationError";

module.exports = function (err,req,res,next){
    console.log("GLOBAL ERROR")
    console.log("Global Error");
    console.log(err.message);
    res.status(404).json({
        "msg":"fail",
    })
    return;
    let appError;
    if(err.name === CAST_ERROR){
        appError = createDBCastError(err);
    }
    else if (err.code === DUPLICATE_KEY){
        appError = createDBDuplicateKeyError(err);
    }
    else if (err.name === VALIDATION_ERROR) {
        appError = createDBValidationError(err);
    }
    else{
        appError = new AppError(err.message,err.statusCode||500);
    }
    res.status(appError.statusCode).json({
       "message":appError.message,
       "status":appError.getStatus(),
    });
}
createDBCastError = function (err){
    return new AppError(`Invalid ${err.path}: is ${err.value}`,400);
};
createDBDuplicateKeyError  = function (err){
    const duplicateValues = Object.values(err.keyValue);
    return new AppError(`Duplicate field value: ${duplicateValues} , please use another value `,400);
};
createDBValidationError = function (err){
    return new AppError(`${err.message} `,400);
}
