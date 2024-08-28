import React from "react"

export default function StartPage({startQuiz}) {

    return (
        <div className="start-page">
            <h1>Quizzical</h1>
            <p>A game of trivial knowledge</p>
            <button 
                className="big-blue-button"
                onClick={() => startQuiz()}
                >
                Start quiz
            </button>
        </div>
    )
}

