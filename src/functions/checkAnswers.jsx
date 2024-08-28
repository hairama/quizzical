export default function checkAnswers(questionArray, setCheckingAnswers, setScoreString) {
    // verify the "selected_answer_index" of each question is not "NaN"
    const quizComplete = questionArray.every(question => 
        !isNaN(question.selected_answer_index))
           
    if (quizComplete) {
        setCheckingAnswers(true)
        let pointsScored = 0
        let pointsPossible = 0
        
        questionArray.map(question => {
            if (question.correct_answer_index === question.selected_answer_index) {
                pointsScored ++
            } 
            pointsPossible ++
        })
        
        setScoreString(`You scored ${pointsScored} of ${pointsPossible} correct answers`)
    } else {
        alert("Please answer all questions to continue.")
    }        
}
