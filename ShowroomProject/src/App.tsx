
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navbar/Navigation'
import { Landing } from './pages/Landing/Landing'
import Footer from './components/Footer/Footer'
import { Auction } from './pages/Auction/auction'

function App() {
  return (
    <>
      <Navigation/>
      <BrowserRouter>
      <Routes>
        <Route path='/'>
            <Route index element={<Landing/>}></Route>
            <Route path='auction' element={<Auction/>}></Route>
            <Route path='contact' element={<>Kapcsolat</>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
