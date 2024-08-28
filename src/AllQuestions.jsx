import React from "react"
import Question from "/src/Question.jsx"
import selectAnswer from "/src/functions/selectAnswer.jsx"

export default function AllQuestions( { questionArray, setQuestionArray, checkingAnswers }) {
    const allQuestionElements = questionArray.map(question => (
        <Question 
            key={question.question}
            question={question}
            checkingAnswers={checkingAnswers}
            setQuestionArray={setQuestionArray}
        />
    ))

    return (
        <div>
            <div className="multiple-question-container">
                {allQuestionElements}
            </div>
        </div>
    );
}