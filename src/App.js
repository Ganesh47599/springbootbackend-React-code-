
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './home';
import Register from './register';
import Login from './login';
import Profile from './profile';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/profile' element={<Profile/>}/>
    </Routes></BrowserRouter>
  );
}

export default App;
