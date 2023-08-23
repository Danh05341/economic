import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/users/new" element={<Header/>} />
        <Route path="/users/:id" element={<Header/>} />
      </Routes>
    </Router>
  );
}

export default App;
