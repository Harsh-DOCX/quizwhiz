import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import cars from "../data/Cars.json";
import Games from "../data/Games.json";
import GK from "../data/General-Knowledge.json";
import History from "../data/History.json";
import Marvel from "../data/Marvel.json";
import Meme from "../data/Meme.json";
import Movies from "../data/Movies.json";
import Music from "../data/Music.json";
import Programming from "../data/Programming.json";
import Tech from "../data/Tech.json";

export default function Quizpage() {
    const { state } = useLocation();
    const { category } = state || {};
    const [questions, setQuestions] = useState([]);
    const [questionsToAsk, setQuestionsToAsk] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [score, setScore] = useState(null);

    useEffect(() => {
        const dataMap = {
            Cars: cars,
            Games,
            "General-Knowledge": GK,
            History,
            Marvel,
            Meme,
            Movies,
            Music,
            Programming,
            Tech,
        };

        if (category && dataMap[category]) {
            setQuestions(dataMap[category]);
        }
    }, [category]);

    useEffect(() => {
        if (questions.length > 0) {
            if (questions.length < 10) {
                console.error(`Not enough questions in ${category}. At least 10 questions are required.`);
                setQuestionsToAsk([]);
                return;
            }

            const selectedQuestions = [];
            const usedIndices = new Set();
            while (selectedQuestions.length < 10) {
                const randomIndex = Math.floor(Math.random() * questions.length);
                if (!usedIndices.has(randomIndex)) {
                    usedIndices.add(randomIndex);
                    selectedQuestions.push(questions[randomIndex]);
                }
            }

            setQuestionsToAsk(selectedQuestions);
            console.log(selectedQuestions);
        }
    }, [questions, category]);

    const handleOptionChange = (questionIndex, option) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionIndex]: option,
        }));
    };

    const handleSubmit = () => {
        let correctCount = 0;
        questionsToAsk.forEach((question, index) => {
            if (selectedAnswers[index] === question.answer) {
                correctCount++;
            }
        });
        setScore(correctCount);
    };

    console.log("Selected Answers:", selectedAnswers);

    return (
        <div className="container quiz">
            <div className="main" id="main">
                {questionsToAsk.length > 0 ? (
                    <>
                        {questionsToAsk.map((question, index) => (
                            <div key={index} className="question-block">
                                <h3>Question {index + 1}</h3>
                                <p>{question.question || "Question text not available"}</p>
                                <div className="options">
                                    {question.options && question.options.length === 4 ? (
                                        question.options.map((option, optionIndex) => (
                                            <label key={optionIndex} className="option-label">
                                                <input
                                                    type="radio"
                                                    name={`question-${index}`}
                                                    value={option}
                                                    checked={selectedAnswers[index] === option}
                                                    onChange={() => handleOptionChange(index, option)}
                                                    aria-label={`Option ${optionIndex + 1}: ${option}`}
                                                    disabled={score !== null} // Disable after submission
                                                />
                                                {option}
                                            </label>
                                        ))
                                    ) : (
                                        <p>Invalid options format</p>
                                    )}
                                </div>
                            </div>
                        ))}
                        <button
                            className="submit-button"
                            onClick={handleSubmit}
                            disabled={score !== null || Object.keys(selectedAnswers).length < 10}
                        >
                            SHARE
                        </button>
                        {score !== null && (
                            <div className="result">
                                <h3>Quiz Result</h3>
                                <p>
                                    You scored {score} out of {questionsToAsk.length}!
                                </p>
                            </div>
                        )}
                    </>
                ) : (
                    <p>Loading questions...</p>
                )}
            </div>
        </div>
    );
}