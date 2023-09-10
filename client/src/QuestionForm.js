import {useState} from "react";

function QuestionForm({questions,activeQuestionIdx,setQuestions}){
    const [inputAnswer,setInputAnswer] = useState('');
    function handleSubmit(event){
        event.preventDefault();
        const submittedQuestion = questions[activeQuestionIdx];
        console.log(questions[activeQuestionIdx]);

        submittedQuestion.isAnswered = true;
        submittedQuestion.isCorrect =
            questions[activeQuestionIdx].answers.
            find((answer)=>answer.toLowerCase().replaceAll(' ','') === inputAnswer.toLowerCase().replaceAll(' ',''))  !==undefined
        submittedQuestion.submittedAnswer = inputAnswer;
        setQuestions(questions.map((q,i)=> i === +activeQuestionIdx ? submittedQuestion : q ))
    }
    return (
            <div className="answer-box">
                <form className="answer-form" onSubmit={(event) =>handleSubmit(event)}>
                    <label htmlFor="answer-input">Your Answer</label>
                    <input id="answer-input"
                           className="answer-input"
                           autoFocus
                           value={inputAnswer}
                           onChange={(event) => setInputAnswer(event.target.value)}
                    />
                </form>
                <button className="btn btn--submit" onClick={(event) => handleSubmit(event)}>Submit</button>
            </div>
    );
}
export default QuestionForm;