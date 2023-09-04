import './index.css'
import Navbar from "./Navbar";
import Question from "./Question";
import {useEffect, useState} from "react";
const data = [
    {
        question:'wie gehts',
        answer:'how are you',
        isAnswered:false,
        isCorrect:true,
    },
]
function App() {
    const [activeLevel,setActiveLevel] = useState("A1");
    const [questions,setQuestions] = useState(data);
    const [activeQuestionIdx,setActiveQuestionIdx] = useState(0);
    const url = "https://localhost:8000/"
    useEffect(() => {
        (async ()=>{
           const data = await getQuestions(url);
            /**
             * retreive , set data
             */
           //setQuestions(data);
        })();
    }, [activeLevel]);
    return (
        <>
            <Navbar setLevel={setActiveLevel} activeLevel={activeLevel}/>
            <Question activeQuestionIdx={activeQuestionIdx} questions={questions}/>
        </>
    );
}
async function getQuestions (url){

}
export default App;
