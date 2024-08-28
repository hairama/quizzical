import React from "react"
import StartPage from "/src/StartPage.jsx"
import AllQuestions from "/src/AllQuestions.jsx"
import fetchQuestions from "/src/functions/fetchQuestions.jsx"
import checkAnswers from "/src/functions/checkAnswers.jsx"


export default function App() {
    const [quizStarted, setQuizStarted] = React.useState(false)
    const [checkingAnswers, setCheckingAnswers] = React.useState(false)
    const [questionArray, setQuestionArray] = React.useState([])
    const [scoreString, setScoreString] = React.useState("")
    const [newQuestions, setNewQuestions] = React.useState(false)

    React.useEffect(() => {
        fetchQuestions(setQuestionArray)
    }, [newQuestions])
    
    function startQuiz() {
        setQuizStarted(true)  
    }
    
    function resetQuiz() {
        setQuizStarted(false)
        setCheckingAnswers(false)
        setQuestionArray([])
        setNewQuestions(!newQuestions)
    }
    
    return (
        <div className="app-container">
            {!quizStarted && 
                <StartPage 
                startQuiz={startQuiz}
                />}
            {quizStarted && 
                <AllQuestions 
                questionArray={questionArray}
                setQuestionArray={setQuestionArray}
                checkingAnswers={checkingAnswers}
                />}
            {quizStarted && !checkingAnswers && 
                <button 
                className="small-blue-button inter-10-24"
                onClick={() => checkAnswers(questionArray, setCheckingAnswers, setScoreString)}
                >Check answers
                </button>}
            {quizStarted && checkingAnswers &&
                <div className="score-section">
                    <p>{scoreString}</p>
                    <button 
                    className="small-blue-button inter-10-24"
                    onClick={resetQuiz}
                    >Play Again
                    </button>
                </div>}
            <div className="yellow-triangle"></div>
            <div className="blue-oval"></div>
        </div>
    )
}
