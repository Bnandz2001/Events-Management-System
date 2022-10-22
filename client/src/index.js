import React from 'react'
import ReactDOM from 'react-dom/client';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from'./components/Home'
import Register from'./components/Register';
import Login from'./components/Login';
import Nopage from'./components/Nopage';
import Task from './components/Task1';
import Todo from './components/Todo';
import Event from './components/Eventpage';
import Temptask from './components/Temptask';



const App=()=> {
  return(
 
     <BrowserRouter>
       <Routes>
         <Route path='/'element={<Home />}/>
         <Route path='/events'element={<Event />}/>
         <Route path='/register'element={<Register />}/>
         <Route path='/login'element={<Login />}/>
         <Route path='/task/:event_id'element={<Task />}/>
         <Route path='/todo'element={<Todo />}/>
         <Route path='*'element={<Nopage/>}/>
         <Route path='/temptask'element={<Temptask />}/>

       </Routes>
     </BrowserRouter>
    )
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


