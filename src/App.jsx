import './index.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import  axios  from 'axios'
import Input from './Input';
import Intro from './Intro';


function App() {
  return (
    <>
 
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/predict' element={<Input />} />
  

      </Routes>
    
    </>
  )
}
export default App
