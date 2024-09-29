
import React, { useState } from 'react';  
import { Link } from 'react-router-dom';  

function TodoList() {  
    const [inputValue, setInputValue] = useState('');  
    const [todos, setTodos] = useState([]);  

    function click() {  
        if (inputValue.trim() !== '') {   
            setTodos([...todos, inputValue]);  
            setInputValue('');  
        }  
    }  

    return (  
        <div className="mytodolist">  
            <div className="div-todo">  
                <h1>Todo List</h1>  
                <div>  
                    <input   
                        type="text"   
                        placeholder="write.."   
                        className="input"   
                        value={inputValue}   
                        onChange={(e) => setInputValue(e.target.value)}   
                    />  
                    <button onClick={click}>+</button>  
                </div>  
                <div className="todo-items">  
                    {todos.map((todo, index) => (  
                        <div key={index}>  
                            <Link to={`/todo/${encodeURIComponent(todo)}`}>  
                                {todo}  
                            </Link>  
                        </div>  
                    ))}  
                </div>  
            </div>  
        </div>  
    );  
}  

export default TodoList;