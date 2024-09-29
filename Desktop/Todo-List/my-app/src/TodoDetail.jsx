// TodoDetail.js  
import React from 'react';  
import { useParams } from 'react-router-dom';  

function TodoDetail() {  
    const { todo } = useParams();  

    return (  
        <div>  
            <h1>Todo Detail</h1>  
            <p>{decodeURIComponent(todo)}</p> {/* Decode to display special characters correctly */}  
        </div>  
    );  
}  

export default TodoDetail;