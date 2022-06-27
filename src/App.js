import React,{useState} from 'react'
import Products from './Products'

const App = () => {
   const [search,setSearch] =useState('');
   const [data,setData] =useState([]);
   const APP_ID= "1dee463a";
   const APP_KEY= "62f96ddd8ec820db3908471a011be4d4";
     const submitHandler= e =>{
       e.preventDefault();
       fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
         response => response.json()
       ).then(
         data => setData(data.hits)
       )
         
     }
      const changeHandler = e =>{
        setSearch(e.target.value);
      }
  return (
    <div>
      <center>
        <h1> Search Your Favorite Recipe here..!!</h1>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange ={changeHandler} />
          <br/>
          <br/>
          <input type="submit" className='btn btn-primary' value="search" />
        </form>
        <br/>
        {data.length>=1 ? <Products data={data}/> :null}
        
      </center>
      
    </div>
  )
}

export default App
