import React from "react";
import { useState } from "react";
import "../src/index.css"
const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  function App (){
    return <div>
        <Steps />
        <Counter />
    </div>
  }
function Steps() {
  const [step,setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)
const handleNext = () =>{
  if(step<3) {
    setStep((step)=> step+1)
    setStep((step)=> step+1)
  }
}
const handlePrevious = () =>{
    if(step>1) setStep(step-1)
  }

  return (
        <div>
            <button className="close" onClick={()=>setIsOpen((is)=>!is)}>&times;</button>
            { isOpen && (<div className="steps">
                <div className="numbers">
                    <div className={`${step>=1? "active" : ""}`}>1</div>
                    <div className={`${step>=2? "active" : ""}`}>2</div>
                    <div className={`${step>=3? "active" : ""}`}>3</div>
                </div>
                <p className="message">
                    Step:{step} {messages[step-1]}
                </p>
                <div className="buttons">
                    <button style={{backgroundColor:"#7950f2", color:"#fff"}} onClick={handlePrevious}>Previous</button>
                    <button style={{backgroundColor:"#7950f2", color:"#fff"}} onClick={handleNext}>Next</button>
                </div>
            </div>)}
        </div>
    )
}

function Counter (){
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    const date = new Date("june 12 2023");
    date.setDate(date.getDate()+ count);
    
return (<div>
         <div className = "stepper"> 
            <button onClick = {()=>{setStep(s=>s-1)}}>-</button> 
             <span>Step: {step}</span>
             <button onClick = {()=>{setStep(s=>s+1)}}>+</button> 
         </div>
         <div className="dayCounter"> 
            <button onClick = {()=>{setCount(c=>c-step)}}>-</button> 
             <span>Count: {count}</span>
             <button onClick = {()=>{setCount(c=>c+step)}}>+</button> 
         </div>
         <div>
            <span>{count===0? "Today is ": count>0? `${count} days from now is `: `${Math.abs(count)} days ago from now is `}</span>
            <span>{date.toDateString()}</span>
         </div>
    </div>)
}
export default App
