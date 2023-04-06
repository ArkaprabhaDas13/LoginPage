import './App.css';
import { LandingPage } from './LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Login';
import { Register } from './Register';

function App() {
  return (

    <>
    <BrowserRouter> 
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>      
    </BrowserRouter>
    </>
  );
}

export default App;
