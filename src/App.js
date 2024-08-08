import './App.css';
import NavBar from './components/NavBar';
import Textfile from './components/Textfile';
import About from './components/About';
import React,{useState} from 'react';
import Alertses from './components/Alertses';
{/*import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";*/}

function App() {
const [mode,setMode] =useState('light'); 
const [alert,setAlert]=useState(null);

const ShowAlert=(type,message)=>
  {
    setAlert({type:type,message:message})

     setTimeout(() => {
     setAlert(null);

     }, 2000);
  }
const Toggle = ()=>
  {
    if(mode=='yellow' || mode=='blue')
      {
ShowAlert("Unsuccessful!","Can't enable Many Modes");
      }
    else if(mode=== 'light')
      {
        setMode('dark');
       document.body.style.backgroundColor='#502a94';
       ShowAlert("Success !" , "You have enabled DarkMode");
      }
      else
      {
        setMode('light');
        document.body.style.backgroundColor='white';
        ShowAlert("Success !" , "You have enabled LightMode");
      }
  }

  const ToggleBlue=()=>
    {
      if(mode=='yellow' || mode=='dark')
        {
  ShowAlert("Unsuccessful!","Can't enable Many Modes");
        }
     else if(mode==='light')
        {
setMode('blue');
document.body.style.backgroundColor='blue';
ShowAlert("Success !" , "You have enabled BlueMode");
        }
        else
        {
          setMode('light');
          document.body.style.backgroundColor='white';
          ShowAlert("Success !" , "You have enabled LightMode");
        }
    }


    const ToggleYellow=()=>
      {
        if(mode=='blue' || mode=='dark')
          {
    ShowAlert("Unsuccessful!","Can't enable Many Modes");
          }
        else if(mode==='light' )
          {
  setMode('yellow');
  document.body.style.backgroundColor='yellow';
  ShowAlert("Success !" , "You have enabled YellowMode");
          }
          else
          {
            setMode('light');
            document.body.style.backgroundColor='white';
            ShowAlert("Success !" , "You have enabled LightMode");
          }
      }
 

  return (
    <>
 
     <NavBar title="Textual" home="Home" about="AboutText"  modeIs={mode} ToggleYellow={ToggleYellow} ToggleBlue={ToggleBlue} ToggleMode={Toggle} newtext={mode==='dark' ? 'light' :'dark' } ></NavBar>
  <Alertses ALERTS={alert}></Alertses>

  <div className="container my-3">
  <Textfile ShowAlert={ShowAlert} > </Textfile>

  {/*
<Switch>
          
          <Route exact path="/about">
           <About></About>
          </Route>

          <Route exact path="/">
        
          </Route>
         
  </Switch>
  }/*   
   </Router>*/}

</div> 
      </>);
}

export default App;
