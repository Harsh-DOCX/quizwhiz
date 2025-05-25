
# QuizWhiz - React Quiz App

A fun quiz application built with React that lets users select from 10 different quiz genres. Each genre contains 100+ questions, and the app randomly selects 10 questions per quiz.

---

## Features

- Choose from 10 different quiz genres (Science, tech, etc.)
- Loads 10 random questions per selected genre from JSON data files
- Ensures genre selection before starting quiz
- Clean, responsive UI using React and React Router

---

## Project Structure

```
/src
  /components
    Home.js        # Genre selection screen
    Quizpage.js    # Quiz questions and answers
    Navbar.js      # Navigation bar component
  /data
    genre1.json    # JSON files with questions per genre
    genre2.json
    ...
  App.js           # Main app with routes
  style.css        # Styling
```
---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Harsh-DOCX/quizwhiz.git
cd quizwhiz
```

2. Install dependencies:

```bash
npm install
```

3. Run the app locally:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## How to Use

- Select a quiz genre on the home page.
- Click "Start Quiz" to load 10 random questions from that genre.
- Answer the questions and enjoy!

---

## Dependencies

- React
- react-router-dom

---

## Contributing

Feel free to fork this repo and submit pull requests. For major changes, please open an issue first.

---

## License

This project is open source and available under the MIT License.

---

*Created by Harsh*
