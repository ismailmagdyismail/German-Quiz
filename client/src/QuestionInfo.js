function QuestionInfo({questions,activeQuestionIdx}){
    return(
        <div className="question-content">
            <div className="question-number">
                {
                    `${String(activeQuestionIdx+1).padStart(questions.length-String(activeQuestionIdx.length),"0")} 
                    /
                     ${questions.length} `
                }
            </div>
            <div className="question-title">
                <label htmlFor="question">Question:</label>
                <p id="question">{questions[activeQuestionIdx].title}</p>
            </div>
        </div>
    )
}
export default QuestionInfo;