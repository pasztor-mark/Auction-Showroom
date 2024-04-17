
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navbar/Navigation'
import Landing from './pages/Landing/Landing'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navigation/>
      <BrowserRouter>
      <Routes>
        <Route path='/'>
            <Route index element={Landing}></Route>
            <Route path='auction' element={<>Galéria</>}></Route>
            <Route path='contact' element={<>Kapcsolat</>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
