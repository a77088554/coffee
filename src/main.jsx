import { createRoot } from 'react-dom/client'
import './index.css'
import { Routes, Route, HashRouter } from 'react-router'
import Home from './page/Home'
import About from './page/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(

  <HashRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
  </HashRouter>
  ,
)
