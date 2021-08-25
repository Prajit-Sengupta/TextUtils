import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick= ()=> {
        // console.log("clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Coverted to UpperCase", "success")
    }

    const handleLoClick= ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to LowerCase", "success")
    }

    const handleClClick= ()=> {
        let newText = '';
        setText(newText)
    }

    const handleAlClick=()=>{
        let newText = text.toLowerCase().split(''); //convert all to an array

        for (var i=0; i<= newText.length-1; i+=2){
        newText[i]= newText[i].toUpperCase();
        }
        newText = newText.join('') //join() method helps to convert the elemnets of an array into a string. In brackets we hv(seprator)
        setText(newText)
    }

    const handleOnChange = (event)=> {
        // console.log("OnChange");
        setText(event.target.value) //Here we are updating the state of the text to the most recent.
    }


    const [text, setText] = useState(''); //deafult value will be a blank string

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className="mb-3">{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode==='light'?'white':'#13466e', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
            </div> 
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleAlClick}>AlTeRnAtInG CaSe</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}} >
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Text Preview</h2>
            <p>{text.length>0? text: 'Enter something in the text to preview it here'}</p>
        </div>
        
        </>
    )
}





//text.split(" ")--> split the text where there is a gap and return an array
//.filter()--> takes a function and if it comes true than returns it values to the array.



// State is the current status of the componenet saved in sort of a variabel

//here text is a variable. whenever we update the text variable we just cannot assign things to it. We need to use function to update text. We use settext

// Enter Text here, is the default value of the text variable
// The setText is changing the default text(that is the previous state of the text), once the function is called after clicking the button
//This seText is a function which we can use anytime to update the "text" varaible. Its changing the value(which is equal to text) on the text area everytime the setText func is used

//If value is present we need to mention onChnage(once we chnage anything, by starting to write anything) also as if we need to write in the text area <--The value needs to get updated, once we start writing something-->
//The onChnage function will be called everytime we write some letters in the text area as we are changing something

// In onChnage as we listen we need to pass event object


 //text ="new text"// wrong way to chnage the state text.
    //setText("new text"); //Cprrect way to change the state