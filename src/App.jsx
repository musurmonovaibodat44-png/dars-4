import './App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import "./pages/i18n";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='*' element={<h1>Bunday sahifa mavjud emas</h1>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App