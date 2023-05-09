import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todoinput from './component/Todoinput';
import { useState } from 'react';
import Todolist from './component/Todolist';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Edited from './component/Edited';
import Todo from './component/Todo';

function App() {
  
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Todo/>}/>
      <Route path='/edit' element={<Edited/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
