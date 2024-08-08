import React,{useState} from 'react'
import App from '../App'; 
export default function Textfile(props) {
const [text,setText]=useState('');

const RemoveSpace=()=>
    {
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
props.ShowAlert("Success ! ","Spaces are Removed");
    }

    const BigEvent=()=>
        {
            let newText;
            newText=text.toUpperCase();
setText(newText);
props.ShowAlert("Success ! ","Text coverted to UpperCase");
                        }        

        const ControlChange=(event)=>{
            setText(event.target.value);
                    }
        
      const SmallLetter=()=>
        {
            setText(text.toLocaleLowerCase());
            props.ShowAlert("Success ! ","Text coverted to LowwerCase");
        }

        const ClearIt=()=>
            {
        
                setText('');
                props.ShowAlert("Success ! ","Text Cleared");
            }
   
            const exitIt=()=>
                {
                  setInterval(() => {
                    window.close();
                  }, 1500);
                  
                }
    
        
  return (
    <div>
      <>
      <div className="container" style={{color: props.mode === 'dark' ? 'grey' : 'white',color:props.modes=='dark' ? 'white' :'black' }}>
      <br></br>
      <br></br>


    <label htmlFor="exampleFormControlTextarea1"><h1>Try TextUtils - Word counter, character counter,remove extra spaces</h1></label>
    <textarea
  className="form-control"
  value={text}
  onChange={ControlChange}
  style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}
  rows="10"
></textarea>

    <br></br>
    <br></br>
    <button className='bigButton mx-4 ' onClick={BigEvent}  >Convert into UpperCase</button>

    <button className='lowbutton mx-4' onClick={SmallLetter} >Convert into LowCase</button>

    <button className='clearButton mx-4' onClick={ClearIt}>Clear Text</button>

    <button className='exitButton mx-4' onClick={exitIt}>Exit</button>

    <button className='removeSpaces mx-4' onClick={RemoveSpace}>RemoveSpace</button>
    </div>

    <div className="container my-4" style={{color: props.mode === 'dark' ? 'grey' : 'white',color:props.modes=='dark' ? 'white' :'black' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words  and {text.length} Characters</p>

        <h6>Time</h6>
        <p>{text.split("").length *0.08} min </p>

        <h3>Preview</h3>
        <p>{text.length>0 ?text:"Enter your text to preview"}</p>

    </div>
    
      </>
    </div>
  )

}