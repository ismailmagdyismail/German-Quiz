const QuestionModel = require("../models/questionModel");

module.exports.getShuffledQuestions = async(filterObject)=>{
    try{
        const data = await QuestionModel.find(filterObject);
        return shuffleData(data);
    }catch (err){
        throw err;
    }
};

function shuffleData(data){
    if(!data){
        return [];
    }
    const usedIndex = [];
    const shuffledData = [];
    let count = 0 ;
    while ( count  < data.length){
        const i = Math.floor(Math.random() * data.length);
        if(!usedIndex[i]){
            usedIndex[i] = true;
            shuffledData.push(data[i]);
            count++;
        }
    }
    return shuffledData;
}
