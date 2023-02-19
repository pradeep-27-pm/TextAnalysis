import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick=()=>{
        // console.log("upper case was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLowclick=()=>{
        // console.log("lower case was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleclearclick=()=>{
        // console.log("lower case was clicked" + text);
        let newText=" ";
        setText(newText)
    }
    const handleonChange=(event)=>{
        console.log("onchange");
        setText(event.target.value);
    }
    const handleCopy=()=>{
      // console.log("lower case was clicked" + text);
      var text=document.getElementById('myBox');
      text.select();
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    const [text, setText] = useState('Enter Your Text');
    // setText("New Text");

  return (
<>
<div className="container">
<h1>{props.Heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
</div>
 <button className="btn btn-success mx-2" onClick={handleUpclick}>Convert to UpperCase</button>
 <button className="btn btn-primary mx-3" onClick={handleLowclick}>Convert to LowerCase</button>
 <button className="btn btn-danger mx-3" onClick={handleclearclick}>Clear Text</button>
 <button className="btn btn-primary" mx-2 onClick={handleCopy}>Copy</button>
 <button className="btn btn-danger mx-3" onClick={handleExtraSpaces}>RemoveExtraSpace</button>



 
 

 
</div>
<div className="container my-3">
    <h1>Your Text Summary</h1>
    <b>{text.split(" ").length} Words and {text.length} caharacters</b>
    <b>{0.008* text.split(" ").length}minutes Time Take To read</b>
    <h2>preview text</h2>
    <p>{text}</p>
</div>
</>
    
  )
}
