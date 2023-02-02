import { useEffect, useState } from "react";
import "./App.css";
import OverView from "./overView";
import TransAction from "./transAction";
const ExpenseApp=()=>{
const [expense,setExpense]=useState(0)
const [income,setIncome]=useState(0);
const [transAction,setTransAction]=useState([])

const addTransAction =(formValue)=>{
console.log(formValue)
setTransAction([...transAction,{...formValue,id:Date.now()}])
}


useEffect(()=>{
    let exp =0;
    let inc =0;
    transAction.forEach((t) =>{
        t.type === "Expense" ? (exp =exp + parseInt(t.amount)) : (inc =inc +  parseInt(t.amount));
    });
    setExpense(exp);
    setIncome(inc)
},[transAction])



    return(
        <>
        
        <section className="main">
           <OverView expense={expense} income={income}addTransAction={addTransAction} />

            <TransAction
             transActions={transAction} 
             />
            </section></>
    )
}


export default ExpenseApp;