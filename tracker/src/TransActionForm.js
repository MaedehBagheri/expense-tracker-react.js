import { useState } from "react";
import "./App.css";
const TransActionForm =({addTransAction})=>{

const [formValue,setFormvalue] =useState({
type:"Income",
amount:0,
desc:"",

})

const changeHandler=(e)=>{
     setFormvalue({...formValue,[e.target.name]:e.target.value})
}

const submitHandler=(e)=>{
    e.preventDefault()
    addTransAction(formValue)
}

    return(
        <>
        <form onSubmit={submitHandler}>
            <input placeholder="write here ..." type="text" name="desc"  onChange={changeHandler} value={formValue.desc}/>
            <input type= "number"  name="amount" onChange={changeHandler} value={formValue.amount}/>
            <div>
                <input 
                
                className="box" type="radio" 
                 value="Expense"
                  name="type"
                    onChange={changeHandler}
                     checked={formValue.type === "Expense"}/>
                <label>expense</label>

                <input className="box" type="radio" 
                 value="income"
                  name="type"
                   onChange={changeHandler}
                   checked={formValue.type === "Income"}
                   />
                <label>income</label>
            </div>
            <button className="submit" type="submit">add transaction</button>
        </form>
        </>
    )
}

export default TransActionForm;