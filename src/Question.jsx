import React from "react";
import selectAnswer from "/src/functions/selectAnswer.jsx";

export default function Question({ question, checkingAnswers, setQuestionArray }) {
    
    const answerChoices = renderAnswerChoices(question, checkingAnswers, setQuestionArray)

    return (
        <div key={question.question} className="single-question-container">
            <p className="karla-16-bold">{question.question}</p>
            <div className="answer-container">
                {answerChoices}
            </div>
        </div>
    )
}

function renderAnswerChoices(question, checkingAnswers, setQuestionArray) {
    return question.possible_answers.map(answer => {
        const classNameString = getAnswerClassName(answer, question, checkingAnswers)

        return (
            <button 
                key={`${answer}+${question.question}`}
                onClick={!checkingAnswers ? 
                    () => selectAnswer(answer, question.question, setQuestionArray) :
                    () => {}}
                className={classNameString}
                >
                {answer}
            </button>
        )
    })
}

function getAnswerClassName(answer, question, checkingAnswers) {
    let classNameString = "answer inter-10-24 "

    if (!checkingAnswers && question.possible_answers[question.selected_answer_index] === answer) {
        classNameString += "selected "
    }

    if (checkingAnswers && question.possible_answers[question.selected_answer_index] !== answer) {
        classNameString += "not-selected "
    }

    if (checkingAnswers && question.possible_answers[question.selected_answer_index] === answer && question.correct_answer_index !== question.selected_answer_index) {
        classNameString += "incorrect "
    }

    if (checkingAnswers && question.possible_answers.indexOf(answer) === question.correct_answer_index) {
        classNameString += "correct "
    }

    return classNameString
}