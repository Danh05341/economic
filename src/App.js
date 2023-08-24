import MainComponents from './components/MainComponents'
import Header from './components/Layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponents/>} />
        <Route path="/hd" element={<Header/>} />
      </Routes>
    </Router>
  );
}

export default App;
