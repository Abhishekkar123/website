import React, { useState } from 'react'

export default function TextForm(props) {
    const [update,setUpdate]=useState("enter the text")
    const handle=()=>{
        console.log("click")
        let x=update.toUpperCase()
        setUpdate(x)
        props.showAlert("converted to uppercase","uppercase")
    }
    const handleOn=(e)=>{
        console.log("hello")
        
        setUpdate(e.target.value)
        
    }
    const handleDown=()=>{
        let x=update.toLowerCase()
        setUpdate(x)
        props.showAlert("converted to lowercase","lowercase!")

    }
    const handleClear=()=>{
        let x=""
        setUpdate(x) 
    }

    const handleCopy=()=>{
      let text=document.getElementById("myForm");
      text.select();
      navigator.clipboard.writeText(text.value)
    }
  return (
    <>
    <div className="container my-3">
    <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={update} onChange={handleOn} id="myForm" rows="3"></textarea>
</div>
   <button className="btn btn-primary " onClick={handle}>Convert to UpperCase</button>
   <button className="btn btn-primary mx-2" onClick={handleDown}>Convert to lowerCase</button>
   <button className="btn btn-primary" onClick={handleClear}>Convert to Clear</button>
   <button className="btn btn-primary" onClick={handleCopy}>Convert to Copy</button>
   </div>
   <div className="container">
    <h1>Your text Summary</h1>
    <p>{update.split(" ").length},{update.length} character</p>
    <p>{0.008*update.split(" ").length}Minute Read</p>
   </div>
    </>
  )
}
