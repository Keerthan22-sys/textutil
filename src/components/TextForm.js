import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpclick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
    }

  const handleLoclick = ()=>{
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  }
  const handleClearclick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text is cleared", "success");
  }

    const handleOnchange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed extraspace", "success");
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-4'>{props.headings}</h1>
        <div className="mb-3">
            <textarea className='form-control' value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>

            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoclick}>Convert to lower case</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpclick}>Convert to upper case</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearclick}>Clear Text</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}} >
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
      <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!!"}</p>
    </div>
    </>
    

  )
}


