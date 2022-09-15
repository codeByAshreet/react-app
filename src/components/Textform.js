import React ,{useState} from "react";
export default function Textform(props) {
    const toUppercase = ()=>{
        // console.log("clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to uppercase","success");
        
      }
      const toLowercase = ()=>{ 
        // console.log("clicked");
        let lowtext=text.toLowerCase()  ;
        
        setText(lowtext);
        props.showAlert("converted To Lowercase","success");
        
      }
      const clearText=()=>{
        let newtext=" ";
        setText(newtext);
        props.showAlert("text Cleared","success");
    }
    const handleOnchange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const[text,setText]=useState('');
  return (
    <>
    <div  className="container" >
        <h1 className={`text-${props.mode==='light'?'black':'white'}`}>ENTER TEXT</h1>
      <div className="mb-3">
        <textarea className={`form-control text-${props.mode==='light'?'black':'white'}`}   value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="6"  style={{backgroundColor:props.mode==='light'?'white':'#41556a'}}>

        </textarea>
      </div>
    </div>
    <div className="container ">
       <button className="btn btn-success my-1 mx-1" onClick={toUppercase} >CONVERT to UPPERCASE</button>
       <button className="btn btn-success my-1 mx-1" onClick={toLowercase }>CONVERT TO LOWERCASE</button>
       <button className="btn btn-success my-1 mx-1" onClick={clearText}>CLEAR TEXT</button>
       </div>
    {/* <div className="container my-3"> */}
    <div className={` container  my-3 text-${props.mode==='light'?'black':'white'}`}>

    <h1>Summary</h1>
    <p>{text.split(" ").length-1} words and {text.length} characters</p>
    <h2>preview</h2>
    <p>{text}</p>
    </div>
    </>
  );
}
