import Home from './components/Home';
import Navbar from './components/Navbar';
import Quizpage from './components/Quizpage';
import './style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router basename="/quizwhiz">
      <Navbar />

      <Routes>
      <Route path = '/' element={<Home />}/>
      <Route path = '/quizpage' element={<Quizpage />}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
