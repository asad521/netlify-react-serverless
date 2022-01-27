import './App.css';
import React,{useState,useEffect} from 'react'



function App() {
  const [state,setState] =useState(0)
    useEffect(() => {
      slsfunction();
    },[])
    const slsfunction=async () => {
      try {
        const res = await fetch(`.netlify/functions/slsfunc?name=from serverless function trigered in use effect`)
        const data =await  res.json()
        console.log(data)
        console.log('in use effect')
        setState(data)
      } catch (error) {
        
      }
    }
  return (
    <div className="App">
    <h2>To deploy on netlify serverless,first simply deploy react app on netlify</h2>
    <h2>Then define the functions directory in netlify.toml file</h2>
    <h2>create the netlify function </h2>
    <h2>netlify.toml file does not mattter. just tell your location on github </h2>
    <h1>{state.message}</h1>
  
    </div>
  )
}

export default App;
