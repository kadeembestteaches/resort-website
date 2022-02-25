import React,{useState,useEffect} from 'react';

import ResortItem from "./ResortItem";


const ResortList = () => {

  //creating my state
  const [resorts , setResorts] = useState([{
    id:0,
    title:"",
    price: 0,
    imageSrc : null
  }]);


  useEffect(()=>{

    const URL = 'http://localhost:5000/resorts'
    //MAKE AN AJAX request

    fetch(URL)
    .then(response=>response.json())

    .then(json=>{
     

      setResorts(json)
    })
    .catch(err=>console.log(err))

  }, [])
  return (
    <section id="section-resort-list">
      <div className= "container">
      
          <h1>Featured Resort</h1>

          <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">

          {resorts.map(resort=>( <ResortItem title={resort.title} image ={resort.img} price={resort.price} />))}
          
              
    
            
  
  
          </div>

      </div>

    </section>

  );
};

export default ResortList;
