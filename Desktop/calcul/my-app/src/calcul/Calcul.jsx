import { useState } from 'react'
import {evaluate} from 'mathjs'
import './Calculator.css'
function Calculator(){

let  [result,setResult]=useState('')
 let clickHandler=(e)=>{
    let  input=e.target.innerText
    //  console.log(e.target.innerText)
    if(input==='.'&& result.includes('.')) return
     setResult(result+input)
 }
  const clearBtm=()=>{
    setResult('')
  }
  const delBtm=()=>{
    setResult(result.slice(0,-1))
  }
  const mosavBtm=()=>{
    setResult(String(evaluate(result)))
  }

    return(
        <div className="container">
            <div className="screen">{result}</div>
            <div className="buttons">
                <button  onClick={clearBtm}  className='color twoCol'>Clear</button>
                <button onClick={delBtm} className='color'>C</button>
                <button  onClick={clickHandler}className='color'>/</button>
                <button onClick={clickHandler}>7</button>
                <button onClick={clickHandler}>8</button>
                <button onClick={clickHandler}>9</button>
                <button  onClick={clickHandler} className='color'>*</button>
                <button onClick={clickHandler}>4</button>
                <button onClick={clickHandler}>5</button>
                <button onClick={clickHandler}>6</button>
                <button onClick={clickHandler} className='color'>-</button>
                <button onClick={clickHandler}>1</button>
                <button onClick={clickHandler}> 2</button>
                <button onClick={clickHandler}>3</button>
                <button  onClick={clickHandler}className='color'>+</button>
                <button onClick={clickHandler}>0</button>
                <button  onClick={clickHandler}>.</button>
                <button onClick={mosavBtm} className='color twoCol'>=</button>
            </div>
        </div>
    )
}
export default Calculator