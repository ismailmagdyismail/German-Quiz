import './index.css'
import Navbar from "./Navbar";
import Question from "./Question";
import {useEffect, useState} from "react";
import fetchData from "./api";
import useKeyPress from "./UseKeyPress";
import ErrorBox from "./ErrorBox";
import Loading from "./Loading";

const questionsUrl = "http://localhost:8000/questions";
function App() {
    const [activeLevel,setActiveLevel] = useState("A1");
    const [questions,setQuestions] = useState([]);
    const [activeQuestionIdx,setActiveQuestionIdx] = useState(0);
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(true);

    useKeyPress('ArrowRight',handleNext);
    useKeyPress('ArrowLeft',handlePrevious);

    useEffect(() => {
        setActiveQuestionIdx(0);
        setError(false);
        setLoading(true);
        setQuestions([]);
        (async ()=>{
            try{
                const data = await fetchData(questionsUrl+`?level=${activeLevel}`);
                setError(false);
                setQuestions(data);
            }catch (err){
                console.log("Error");
                setError(true);
                setQuestions([]);
            }
            setLoading(false);
        })();
    }, [activeLevel]);
    function handleNext(){
        setActiveQuestionIdx(activeQuestionIdx+1 >= questions.length ? 0 : activeQuestionIdx+1);
    }
    function handlePrevious(){
        setActiveQuestionIdx(activeQuestionIdx-1 < 0 ? questions.length-1 : activeQuestionIdx-1);
    }

    if(loading){
        return <Loading/>
    }
    else if (error){
        return <ErrorBox errorMessage="Server couldn't load data from server"/>
    }
    return (
        <div className="App">
            <Navbar setLevel={setActiveLevel} activeLevel={activeLevel}/>
            <Question
                activeQuestionIdx={activeQuestionIdx}
                questions={questions}
                setQuestions={setQuestions}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
            />
        </div>
    );
}

export default App;
