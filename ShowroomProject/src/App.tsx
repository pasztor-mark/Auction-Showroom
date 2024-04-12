
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path='/'>
            <Route index element={<>Főoldal</>}></Route>
            <Route path='auction' element={<>Galéria</>}></Route>
            <Route path='contact' element={<>Kapcsolat</>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
