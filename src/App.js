import './App.css';
import React,{useEffect,useState} from 'react'



function App() {
  const [state,setState] =useState(0)
    // useEffect(async() => {
    //   try {
    //     const res = await fetch(`.netlify/functions/func2sls?name=from serverless function`)
    //     const data =await  res.json()
    //     console.log(data)
    //     console.log('in use effect')
    //     setState(data)
    //   } catch (error) {
        
    //   }
    // },[])
  return (
    <div className="App">
    <h2>To deploy on netlify serverless,first simply deploy react app on netlify</h2>
    <h2>Then define the functions directory in netlify.toml file</h2>
    <h2>create the netlify function lj;adfadf</h2>
    <h2>create the netlify function lj;adfadf</h2>
    <h2>create the netlify function lj;adfadf</h2>
    <h2>create the netlify function lj;adfadf</h2>
    {/* <h1>{state.message}</h1> */}
  
    </div>
  )
}

export default App;
