import React from "react";

function Card(props) {
  // "id": 1,
  // "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  // "price": 109.95,
  // "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  // "category": "men's clothing",
  // "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  // "rating": {
  //   "rate": 3.9,
  //   "count": 120

  // IMGURL,title,description,Price,rate

   const myComponentStyle={
width:'300px'
  }
  const i_size ={
  height:"300px",
  border:'2px solid black'
}
const bb={
  backgroundColor:'gray',
  border:'2px solid black'
  }
  const col={
    color:'red'
  }
  return (
    <div>
      <div className="card" style={myComponentStyle}>
        <img src={props.iimmgg} className="card-img-top  " alt="..." style={i_size} />
        <div className="card-body" style={bb}>
          <h5 className="card-title">{props.title}</h5>
          {/* <p className="card-text">{props.description }</p> */}
          <p style={col}> Price :{props.Price}</p>
          <p>{props.rate}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
