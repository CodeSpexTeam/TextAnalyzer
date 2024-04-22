import React,{useState} from 'react'



export default function TextForm(props) {
    const [text,setText] = useState('Enter text here');

    const handleUpClick = ()=>{
      if(text!==''){
        let newText = text.toLocaleUpperCase();
        setText(newText)
       }else{
        alert("Please Enter Text First!")
       }
        
    }

    const camelCase = ()=>{
      if(text!==''){
        let newText = text.toLowerCase();
        setText(newText)
       }else{
        alert("Please Enter Text First!")
       }
     
  }

    const handleOnChange = (event)=>{
        console.log("on change")
        setText(event.target.value);
    }

    const onClear = ()=>{
      setText('')
    }

    const onCopy = ()=>{
     var copyText =  text;

     if(copyText!==''){
      navigator.clipboard.writeText(copyText);
      alert("Your Text has been Copied!")
     }else{
      alert("Please Enter Text First!")
     }
   

     
    }

  return (
    <div>

        <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <div className="mb-3" style={{backgroundColor:props.mode==='dark'?'White':'black'}}>
          <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upercase</button>
        <button className="btn btn-primary ms-2" onClick={camelCase}>Convert to LowerCase</button>
        <button className="btn btn-primary ms-2" onClick={onCopy}>Copy Text</button>
        <button className="btn btn-primary ms-2" onClick={onClear}>Clear</button>

        <h4 style={{color:props.mode==='light'?'black':'white'}}>Word Summary</h4>
        <span style={{color:props.mode==='light'?'black':'white'}}>{text.split(" ").length} Word</span>
        <span style={{color:props.mode==='light'?'black':'white'}}>{text.length} Characters</span>
            
    </div>
  )
}
