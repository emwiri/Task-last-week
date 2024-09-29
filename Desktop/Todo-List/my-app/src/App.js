
import './App.css';  
import TodoList from './componet/Todo-list'   
import './telwin.css';  
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Error from './componet/errorpage/Error'; 

function App() {  
  return (  
    <BrowserRouter>  
      <div className="App">  
        <Routes>  
          <Route path='/' element={<TodoList />} />   
          <Route path='/todo/:todo' element={<Error/>} /> 
          <Route path='*' element={<Error />} />   
        </Routes>  
      </div>  
    </BrowserRouter>  
  );  
}  

export default App;