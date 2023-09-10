import {FaCheck, FaTimes} from "react-icons/fa";

function AnswerInfo({activeQuestionIdx,questions}){
    return(
        <>
            <div className="submitted-answer">
                <label htmlFor="submitted-answer">Your Answer:</label>
                <p id="submitted-answer">{questions[activeQuestionIdx].submittedAnswer}</p>
            </div>
            <div className="correct-answer">
                <label htmlFor="correct-answer">Correct Answer:</label>
                <p id="correct-answer"> {
                    questions[activeQuestionIdx].isCorrect ?
                        questions[activeQuestionIdx].submittedAnswer :
                        questions[activeQuestionIdx].answers[0]
                }</p>
            </div>
            <button className="answer-status-icon">{ questions[activeQuestionIdx].isCorrect === true ? <FaCheck/> : <FaTimes/> } </button>
        </>
    )
}
export default AnswerInfo;