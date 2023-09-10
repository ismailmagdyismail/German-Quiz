module.exports = function (handler){
    return function (req,res,next){
        handler(req,res,next).catch(err => next(err));
    }
}
