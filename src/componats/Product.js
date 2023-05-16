import React, { useEffect, useState } from 'react'
import Card from './Card'

const Product = () => {
    const[data, setData]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setData(json))
    },[])
  return (
    <div>
        <div className="container">
<div className="row">


        
      {data.map((index)=>{
       return(
        <div className='col-lg-3'>
            <Card id={index.id} iimmgg={index.image} title={index.title} description={index.description} Price={index.price} rate={index.rate}/>
         </div>
       )
      })}
      </div>
      </div>
    </div>
  )
}

export default Product;
