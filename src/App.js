// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import "./App.css";
// import aceeditor from 'react-ace'
import AceEditor from "react-ace-builds";
// import scriptTag from "react-script-tag"
import Header from "./components/header";
import "react-ace-builds/webpack-resolver-min";
import axios from 'axios';

export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement("script");
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}



function App() {
  const [code,setcode]=useState('');
  // useEffect(()=>{
  //   let editor = ace.edit("editor");
  //   editor.setTheme("ace/theme-monokai.js");
  //   editor.session.setMode("ace/mode-javascript.js");

  // },[])

   const submithandler=async()=>{
     console.log(code);

    const template={
      language:"cpp",
      code:code
    }

    const getback=axios.post('http://localhost:3000/',template);
    console.log(getback);


   }  
    

   function onChange(newValue) {
    console.log("change", newValue);
    setcode(newValue)
  }

  return (
    <React.Fragment>
    <Header></Header>


    <div className="edit">

      <label>code </label>

      <textarea rows={20}
      onChange={(Event)=>{
      // console.log(Event.target.value);
      setcode(Event.target.value);
    }}>
      </textarea>
    
      
    </div>
      <div className="button">
        <button className="btn" onClick={submithandler}>submit</button>
        {/* <button className="btn">submit</button> */}

      </div>
      
    </React.Fragment>
  );
}

export default App;
