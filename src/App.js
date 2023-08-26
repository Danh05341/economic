import MainComponents from './components/MainComponents'
import ProductDetail from './components/ProductDetails'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponents/>} />
        <Route path="/id-product" element={<ProductDetail/>} />

       
      </Routes>
    </Router>
  );
}

export default App;
