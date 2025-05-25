import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [name, changeName] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();

    let start = (e) => {
        e.preventDefault(); // prevent page refresh
        if (!name || !category) {
            alert("Please enter your name and select a genre.");
            return;
        }

        const details = {
            name,
            category,
        };
        navigate("/Quizpage", { state: details });

    };

    return (
        <div className="container" id="container">
            <div className="main">
                <form className="enterForm" id="enterform" onSubmit={start}>
                    <label htmlFor="name">Enter your name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => changeName(e.target.value)}
                        aria-label="Enter your name to start the quiz"
                    />

                    <label htmlFor="interest">Select genre</label>
                    <select
                        name="interest"
                        id="interest"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        aria-label="Select a quiz genre"
                    >
                        <option value="" disabled>
                            Select a genre
                        </option>
                        <option value="Cars">Cars</option>
                        <option value="Games">Games</option>
                        <option value="General-Knowledge">General Knowledge</option>
                        <option value="History">History</option>
                        <option value="Marvel">Marvel</option>
                        <option value="Meme">Meme</option>
                        <option value="Movies">Movies</option>
                        <option value="Music">Music</option>
                        <option value="Programming">Programming</option>
                        <option value="Tech">Tech</option>
                    </select>

                    <button type="submit" className="button btn submit" id="button">
                        START QUIZ...
                    </button>
                </form>
            </div>
        </div>
    );
}
