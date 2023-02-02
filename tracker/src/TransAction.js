import { useEffect, useState } from "react";
import "./App.css";
const TransAction =({transActions})=>{

const [searchItem,setSearchItem] =useState("");
const[filtered,setFiltered]=useState(transActions);

const filtertnx =(search)=>{
if(!search){
    setFiltered(transActions);
    return;
}else{
 const filterr=  transActions.filter(t => t.desc.toLowerCase().includes(search));
 console.log(filterr)
 setFiltered(filterr);
}
}


const changeHandler=(e)=>{
    setSearchItem(e.target.value);
    filtertnx(e.target.value);
}


useEffect(()=>{
    filtertnx(searchItem);
},[transActions])
    return(<section>

        <input placeholder="search..." type="text" value={searchItem} onChange={changeHandler} />
    <div>

   {filtered.length && filtered.map((t) => <div className="item" key={t.id}>{t.desc}</div>)}

    </div>
    </section>)
}

export default TransAction;