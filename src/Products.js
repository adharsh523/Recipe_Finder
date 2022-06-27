import React from 'react'
import "./App.css";

const Products = ({data}) => {
  return (
    <div>
      <div className='row'>
          {data.map(data =>
          <div className='col-md-3'>
              <div class="card" style={{"width":"18rem"}}>
                  <img class="Card-img-top" src={data.recipe.image} alt="Card img cap"/>
                  <div class="card-body">
                      <center>
                          <h5 class="card-title">{data.recipe.label}</h5>
                          <p class="card-text">Total Amount of Calories :{data.recipe.calories}</p>
                          <div className="steps">
                            {data.recipe.ingredientLines.map((step)=>{
                              return <p style={{"font-size":"10px"}}>{step}</p>
                            })}
                          </div>

                          
                      </center>
                  </div>
              </div>
          </div>
          )}   
      </div>
    </div>
  )
}

export default Products
