import { decode } from "html-entities"

export default async function fetchQuestions(setQuestionArray) {
    try {
        const numberOfQuestions = 5
        const category = "9"
        const difficulty = ""
        const type = ""
        const apiString = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=${type}`

        const response = await fetch(apiString)
        const data = await response.json()

        if (!data.results || !Array.isArray(data.results)) {
            throw new Error("Unexpected API response format")
        }
        formatQuestions(data, setQuestionArray)
        
    } catch (error) {
        console.error("Error fetching questions:", error);
    }
}

function formatQuestions(data, setQuestionArray) {
    const formattedQuestions = data.results.map(({ question, correct_answer, incorrect_answers }) => {
        question = decode(question)
        correct_answer = decode(correct_answer)
        incorrect_answers = incorrect_answers.map(answer => decode(answer))
        
        const { answers, correctAnswerIndex } = shuffle(correct_answer, incorrect_answers)
        
        return {
            question,
            possible_answers: answers,
            correct_answer_index: correctAnswerIndex,
            selected_answer_index: NaN
        }
        })
    setQuestionArray(formattedQuestions)
}

function shuffle(correct_answer, incorrect_answers) {
    let answers = incorrect_answers.slice()
    let currentIndex = answers.length
    let temporaryValue, randomIndex

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        temporaryValue = answers[currentIndex]
        answers[currentIndex] = answers[randomIndex]
        answers[randomIndex] = temporaryValue
    }

    const correctAnswerIndex = Math.floor(Math.random() * (answers.length + 1))
    answers.splice(correctAnswerIndex, 0, correct_answer)

    return {
        answers,
        correctAnswerIndex
    }
}