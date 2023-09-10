const asyncErrorHandler = require('../errors/asyncErrorHandler');
const services = require('../businessLogic/getShuffledQuestions');
const {buildFilterObject} = require("../utils/apiFeaturesBuilder");

module.exports.getAllQuestions = asyncErrorHandler(async function (req, res, next){
    const filterObject = buildFilterObject(req.query);
    console.log(filterObject);
    const data = await services.getShuffledQuestions(filterObject);
    res.status(200).json({
        "status":"success",
        "data":data
    });
});