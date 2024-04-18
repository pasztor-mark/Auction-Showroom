
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navbar/Navigation'
import { Landing } from './pages/Landing/Landing'
import Footer from './components/Footer/Footer'
import { Auction } from './pages/Auction/auction'
import Sell from './pages/Sell/Sell'

function App() {
  return (
    <>
      <Navigation/>
      <HashRouter>
      <Routes>
        <Route path='/'>
            <Route index element={<Landing/>}></Route>
            <Route path='auction' element={<Auction/>}></Route>
            <Route path='sell' element={<Sell/>}></Route>
            <Route path='contact' element={<>Kapcsolat</>}></Route>
        </Route>
      </Routes>
      </HashRouter>
      <Footer/>
    </>
  )
}

export default App
