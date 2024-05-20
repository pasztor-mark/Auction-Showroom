
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navbar/Navigation'
import { Landing } from './pages/Landing/Landing'
import Footer from './components/Footer/Footer'
import { Auction } from './pages/Auction/auction'
import Sell from './pages/Sell/Sell'
import About from './pages/About/About'

function App() {
  return (
    //ugyanúgy react router, csak a git pages miatt hashroutert kell használni
    <>
      <Navigation/>
      <HashRouter>
      <Routes>
        <Route path='/'>
            <Route index element={<Landing/>}></Route>
            <Route path='/auction' element={<Auction/>}></Route>
            <Route path='/sell' element={<Sell/>}></Route>
            <Route path='/about' element={<About/>}></Route>
        </Route>
      </Routes>
      </HashRouter>
      <Footer/>
    </>
  )
}

export default App
