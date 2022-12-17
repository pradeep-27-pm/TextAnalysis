// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import { useState } from 'react';

function App() {
  const [Mode, setMode]=useState('dark');
  const toggleMode=() =>{
    if(Mode==='light'){
      setMode='dark'
    }
    else{
      setMode='light'
    }
  }
  return (
   <>
    <Navbar textutiles="Text Analyze" mode={Mode} toggleMode={toggleMode}/>
    <div class="container" my-3>
      <TextForm Heading="Text To Analyze"/>
    </div>
   </>
  );
}

export default App;
