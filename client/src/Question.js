import {useState} from "react";
import {FaCheck, FaTimes, FaWindowClose} from 'react-icons/fa'

function Question({activeQuestionIdx,questions}){
    const [inputAnswer,setInputAnswer] = useState('');
    function handleSubmit(){
        /**
         * check if right or wrong
         * mark as answered
         * hide input fields
         */
    }
    return(
            <>
                {
                    questions.length ?
                        <article className="question">
                            {/*<button className="btn btn--previous">left</button>*/}
                            <div className="question-content">
                                <div className="question-number">01</div>
                                <div className="question-title">
                                    <p> Question: {questions[activeQuestionIdx].question}</p>
                                </div>
                                {
                                    !questions[activeQuestionIdx].isAnswered ?
                                    <div className="answer-box">
                                        <form className="answer-form" onSubmit={(event) => event.preventDefault()}>
                                            <label htmlFor="answer-input">Your Answer</label>
                                            <input id="answer-input"
                                                   className="answer-input"
                                                   autoFocus
                                                   value={inputAnswer}
                                                   onChange={(event) => setInputAnswer(event.target.value)}
                                            />
                                            <button className="btn btn--submit" onClick={() => handleSubmit()}>Submit</button>
                                        </form>
                                    </div>
                                        :
                                        <button className="answer-status-icon">
                                            {
                                                questions[activeQuestionIdx].isCorrect ?<FaCheck/> :<FaTimes/>
                                            }
                                        </button>
                                }
                            </div>
                            {/*<button className="btn btn--next">Right</button>*/}
                        </article>
                    :
                        <div className="empty-msg">
                            Sorry no questions available yet for this Level
                        </div>
                }
            </>
    )
}

export default Question;