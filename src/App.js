import MainComponents from './components/MainComponents'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponents/>} />
       
      </Routes>
    </Router>
  );
}

export default App;
