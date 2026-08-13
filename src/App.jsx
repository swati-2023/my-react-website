import './App.css'
import './meanmenu.css'
import './animate.css'
import './swiper-bundle.css'
import './backtotop.css'
import './magnific-popup.css'
import './nice-select.css'
import './font-awesome-pro.css'
import './spacing.css'
import './main.css'
import Home from './Home'
import About from './about'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App