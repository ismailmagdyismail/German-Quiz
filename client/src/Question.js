import QuestionForm from "./QuestionForm";
import QuestionInfo from "./QuestionInfo";
import AnswerInfo from "./AnswerInfo";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import ErrorBox from "./ErrorBox";

function Question({activeQuestionIdx,questions,handlePrevious,handleNext,setQuestions}){
    return <main>
        {
            questions.length ?
            <div className="quiz-content">
                <button className="btn btn--navigation" onClick={handlePrevious}> <FaArrowLeft/> </button>
                <article className="question-container container">
                    <>
                        <QuestionInfo activeQuestionIdx={activeQuestionIdx} questions={questions}/>
                        {
                            !questions[activeQuestionIdx].isAnswered ?
                                <QuestionForm activeQuestionIdx={activeQuestionIdx} questions={questions} setQuestions={setQuestions}/>
                                :
                                <AnswerInfo activeQuestionIdx={activeQuestionIdx} questions={questions}/>
                        }
                    </>
                </article>
                <button className="btn btn--navigation" onClick={handleNext}> <FaArrowRight/> </button>
            </div>
                :
                <ErrorBox message="Sorry,No questions available for this level"/>
        }
    </main>
}

export default Question;