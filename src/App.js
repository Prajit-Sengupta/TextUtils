import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//   } from "react-router-dom";

function App() {

  const [Mode, setMode] = useState('light'); //whether darkmode is enabled or node  
  const [alert, setalert] = useState(null)

  const showAlert= (message, type)=>{
        setalert({
            msg: message,
            type: type,
        })
        setTimeout(() => {
            setalert(null);
        }, 1500);  //to dissapear the alert after 1.5 seconds
  }
  const toggleMode = ()=> {
      if(Mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor = '#042743';
          showAlert("Dark mode has been enabled", "success")
        //For fun
        //   setInterval(() => {
        //       document.title = "TetxtUtils in Dark Mode"
        //   }, 2000);
        //   setInterval(() => {
        //     document.title = "TetxtUtils is amazing"
        //   }, 1500);

      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success")
      }
  }
  return (
    <> 
    {/* <Router> */}
    <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch>
          <Route exact path="/about">
            <About mode={Mode}/>
          </Route>
          
          <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}/>
          {/* </Route>
        </Switch> */}
        
        
    </div>
    {/* </Router> */}
    </>
  );

}

export default App;


//<>  </>  -> This is JSX Fragment, it allows multiple HTML elements inside the return

//Weherver we need to use JS, we will use curly braces { }

//While writing components or img element we need a closing tag like />. Any element which doesnt have a closing tag needs /> this in tje end.

//Default Export-->when using "export default App;", with whatever name we import form app js this deafualt app function will be returned.

//Named Export --> needs to the name the thing which needs to be imported like "export {a}"

//container class is a bootstrap class which brings the elements in the div to the centere and in proper manner

// always a good habit to write "exact path" in react router.