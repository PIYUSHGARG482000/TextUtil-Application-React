import React, {useState} from 'react'

export default function TextForm(props) {
  
  const handleUpClick = ()=>{
    // console.log("Uppercase clicked! ");
    let uppercasetext = text.toUpperCase();
    setText(uppercasetext);
    props.showAlert("Text converted to Uppercase!", "success");
  }

  const handleLoClick = ()=> {
    setText(text.toLowerCase());
    props.showAlert("Text converted to Lowercase!", "success");
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text speach is ready!", "success");
  }

  const camelcase = ()=> {
    let camel = text.charAt(0).toUpperCase() + text.slice(1);
    setText(camel);
    props.showAlert("Text converted to Camelcase!", "success");
  }

  const removeSymbols = ()=>{
    let newText = text.replace(/[&/#,+()$~%.'":*?<>{}^`@|!]/g, '');
    setText(newText);
    props.showAlert("Special Characters removed from the Text!", "success");
  }

  const copyText = ()=> {
    var copy = document.getElementById("mybox");
    copy.select();
    navigator.clipboard.writeText(copy.value);
    alert("You Text get successfully copied! ")
  }

  const extraSpace = ()=>{
    var space = text.split(/[ ]+/);
    setText(space.join(" "));
    props.showAlert("Text Containing Extra space Removed Successfully!", "success");
  }
  const clearText = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Tax get Successfully Cleared from TextBox!", "success");
  }
  const handleOnChange = (event)=>{
    // console.log("Onchange clicked! ");
    setText(event.target.value);
  }
  //useState hook to handle state variables
  const [text, setText] = useState("Enter your Text here");

  return (
    <>
      <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor : props.mode === 'dark' ? 'black' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}} onChange={handleOnChange}  id="mybox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-secondary mx-1" onClick={speak}><i className='fas fa-volume-up'>Listen your Text</i></button>
        <button className="btn btn-secondary mx-1" onClick={camelcase}>Convert to CamelCase</button>
        <button className="btn btn-success mx-1" onClick={removeSymbols}>Remove Special Characters</button>
        <button className="btn btn-success mx-1" onClick={extraSpace}>Extract Spaces</button>
        <button className="btn btn-info mx-1" onClick={copyText}>Copy Text</button>
        <button className="btn btn-info mx-1" onClick={clearText}>Clear Text</button>
    </div>
    <div className="container my-4" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element) => { return element.length != 0}).length} words and {text.length} characters.</p>
      <p>{0.008 * text.split(" ").fiter((element) => { return element.length != 0}).length} Minutes read.</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter the text on the above textbox to preview it here..."}</p>
    </div>
    </>
  )
}
