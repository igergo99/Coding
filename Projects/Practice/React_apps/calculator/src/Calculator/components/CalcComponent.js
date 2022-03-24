import{ useEffect,useState}from 'react'


export default function CalcComponent(){
const [firstNumber, setFirstNumber]=useState('')
const [secondNumber, setSecondNumber]=useState('')
const [action, setAction]=useState('')
const [result, setResult]=useState('')



const numberButton=(event)=>{
    if(!action){
        setFirstNumber((previousState)=>{
            console.log(previousState)
            return previousState+=event.target.innerText
            
        })
    }else{
        setSecondNumber((previousState)=>{
            console.log(previousState)
            return previousState+=event.target.innerText
            
        })
    }
    
}
const actionButton=(event)=>{
    if(firstNumber===''){
        setFirstNumber(0)
    }
    setAction((previousState)=>{
        console.log(previousState)
        return previousState=event.target.innerText
        
    })
}
const cButton=(event)=>{
    setFirstNumber('')
    setSecondNumber('')
    setAction('')
    setResult('')
}
const equalButton=(event)=>{
    if(action==='+'){
        setResult(Number(firstNumber)+Number(secondNumber))
        console.log(result)
    }
    if(action==='-'){
        setResult(Number(firstNumber)-Number(secondNumber))
        console.log(result)
    }
    if(action==='/'){
        setResult(Number(firstNumber)/Number(secondNumber))
        console.log(result)
    }
    if(action==='*'){
        setResult(Number(firstNumber)*Number(secondNumber))
        console.log(result)
    }
}


return(
    <div className='container'>
        <div className="display">{!result? firstNumber+action+secondNumber:result}</div>
    <button onClick={numberButton}>1</button>
    <button onClick={numberButton}>2</button>
    <button onClick={numberButton}>3</button>
    <button onClick={actionButton}>+</button>
    <button onClick={numberButton}>4</button>
    <button onClick={numberButton}>5</button>
    <button onClick={numberButton}>6</button>
    <button onClick={actionButton}>-</button>
    <button onClick={numberButton}>7</button>
    <button onClick={numberButton}>8</button>
    <button onClick={numberButton}>9</button>
    <button onClick={actionButton}>*</button>
    <button onClick={cButton}>C</button>
    <button onClick={numberButton}>0</button>
    <button onClick={actionButton}>/</button>
    <button onClick={equalButton}>=</button>

    </div>
)
    
}