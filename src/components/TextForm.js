import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = (event) => {
    setText('')
  }

  const handleTextCopy = (event) => {
    var copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Text copied to clipboard!");
  }
  const [text, setText] = useState("");

  return (
    <>
    <div style={{ color:props.mode==='light'?'black':'white', backgroundColor:props.mode==='light'?'white':'#121212'}}>
      <h4>{props.heading}</h4>
      <div className="mb-5">
        <textarea className="form-control" value={text} placeholder="Enter text here..." onChange={handleOnChange} id="myBox" rows="8" style={{color:props.mode==='light'?'black':'white', backgroundColor:props.mode==='light'?'white':'grey'}}></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to lowercasecase</button>
      <button type="button" className="btn btn-light mx-2" onClick={handleClearClick}>Clear Text</button>
      <button type="button" className="btn btn-light mx-2" onClick={handleTextCopy}> Copy Text <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
          </svg>
      </button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white', backgroundColor:props.mode==='light'?'white':'#121212'}}>
        <h3>Your Text Summary</h3>
            
            {/* <p>{getLength(text)} words and {text.length} charachetres</p> */}
            <p>{text.split(" ").length} words and {text.length} charachetres</p>
            <p>{0.008 * text.split(" ").length} minutes will be needed to read the text</p>
        
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
