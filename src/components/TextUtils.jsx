import '../style.css';
import { useState } from 'react';

export default function TextUtils(props){
    
    const [text,setText] = useState("")
    const [hNum,setHNum] = useState(0)
    
    const clickHandler =()=>{
        // console.log(text)
        props.showAlert("Text converted to uppercase","success")
        setText(text.toUpperCase())
    }
    const changeHandler=(event)=>{
        setText(event.target.value)
    }

    const extractSFromText=()=>{
            
        text.split(' ').forEach((str)=>{
            for(let i =0; i<str.length; i++){
                if(i == 's' || i == 'S'){
                    hNum += 1
                    setHNum(hNum);
                }
            }
            
        })
    }    
    
    return(
        <>
        <div className="container my-4">
            <div className = "setTag ">
            <textarea  name="text" value={text} onChange={changeHandler} id="text"></textarea>
            </div>
            <div className = "setTag">
            <button className="bg-primary mx-4" onClick={clickHandler}>Convert to UpperCase</button>
            <button className="bg-primary" onClick={extractSFromText}>Extract s from text</button>
            <span>  {hNum}</span>
            </div>
            <p>{text.split(' ').length} words and {text.length} characters</p><br />
            <p>{((text.split(' ').length/100)*25)/60} Minuts to read</p>
            <h1>Preview</h1>
            <p>{text}</p>
        </div>
            
        </>
    );
}