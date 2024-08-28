export default function selectAnswer(answer, answerQuestion, setQuestionArray) {
        
    setQuestionArray(oldArray => {
        return oldArray.map(arrayQuestion => {
            const answerIndex = arrayQuestion.possible_answers.indexOf(answer)

            if (arrayQuestion.question === answerQuestion) {
                return {
                    ...arrayQuestion,
                    selected_answer_index: answerIndex
                }
            } else {
                return arrayQuestion
            }
        })
    })
}
