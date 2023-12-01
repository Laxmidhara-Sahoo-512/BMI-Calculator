import React, { useState } from "react";
import ReactDom from "react-dom"
import "./BMIcal.css"
function BMIbar(){
    let [val,method]=useState(null);
    let [weight,method1]=useState(null);
    let [Height,method2]=useState(null);
    function changeweight(event){
        method1(event.target.value);
    }
    function changeheight(event){
        method2(event.target.value);
    }
    function calculate(){
        if(weight===null || Height===null || weight<=0 || Height<=0){
            alert("Please Enter valid numbers");
            method(null);method1(null);method2(null);
        }
       else{
        let ans=weight/(Height*Height).toFixed(2)
        method(ans);
       }
    }
    function reload(){
        method(null);method1(null);method2(null);
        
    }


    return(<div className="bmibox">
       <h2>BMI Calculator</h2>
       <span>Weight(Kg)</span>   <br/>
       <input type="number" className="box" onChange={changeweight} value={weight===null?"":weight} /  > <br/> <br/>
       <span>Height(m)</span>   <br/>
       <input type="number" className="box" onChange={changeheight} value={Height===null?"":Height}/> <br/> <br/>
       <button className="box" style={{backgroundColor:"blue",color:"white",border:"none"}} onClick={calculate} >Submit</button> <br/> <br/>
       <button className="box" onClick={reload}>Reload</button> <br/> <br/>
       {val===null?<span>Your BMI is:</span>:<span>Your BMI is: {val}</span>} <br/>
       {(()=>{
        if(val===null){
            return <span></span>
        }
        else if(val<18.5){
            return <span>You are Underweight</span>
        }
        else if(val>=18.5 && val<=24.9){
            return <span>You are Normalweight</span>
        }
        else if(val>=25 && val<=29.9){
            return <span>You are Overweight</span>
        }
        else{
            return <span>Obese</span>
        }
       })()}




    </div> );
  
}
export  default BMIbar;