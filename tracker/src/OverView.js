import { useState } from "react";
import TransActionForm from "./transActionForm";
import "./App.css"

const OverView =({income,expense,addTransAction})=>{
    const [isShow, setIshowe]=useState(false)
    return(
        <>
         <div  className="topspace">
                <p>Balance :{expense-income}</p>
            <button className="add" onClick={() =>setIshowe(!isShow)}>
                {isShow ? "cancel" :"Add"}
            </button>
            </div>

{isShow && <TransActionForm addTransAction={addTransAction}/>}


            <div className="topspace">
<div>income :{income}</div>
                <div>expense :{expense}</div>
            </div>
        </>
    )
}

export default OverView;