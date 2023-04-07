
import './App.css';
import HeaderContainers from './Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { useEffect } from 'react';
import HomeContainer from './containers/HomeContainer';


function App() {
  // useEffect(()=>{
  //   const url = 'http://projects.raisonminds.com/api/data.json';
  //   fetch(url,{
  //    method:"GET",
  //    body:JSON.stringify(),
  //     headers: {
  //       "Authorization": "Bearer k_sudl4l70"
  //          },
  //   }).then((response)=>response.json()).then((data)=>{
  //    console.log(data);
  //   }).catch(e=>{
  //    console.log(e);
  //   })
  //  },[])
  return (
    <>
    <HomeContainer/>
  
    </>
  );
}

export default App;
