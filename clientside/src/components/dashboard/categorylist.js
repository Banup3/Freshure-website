
import React,{useContext} from "react";
import "./category.css";
import OffersSection from '../offers/offersection';
import { CartContext } from '../cartcontext';


function CategoryList () {
  const { addToCart } = useContext(CartContext);
    const item=[
        {title:"Flavoured rice",img:'assets/flavourrice.jpg',link:"/falvourrice"},
        {title:"Biryani",img:'assets/biryani.jpg', link:"/biryani"},
        {title:"Roti's",img:'assets/rotis.jpg',link:"/roti"},
        {title:"Curries",img:'assets/curries-2.jpg',link:"/curries"},
        {title:"Snacks",img:'assets/snacks.jpg',link:"/snacks"},
    ]
  return (
    <>
    <div className="popular-section" >
      <h2>{item.title}</h2>
      <div className="cuisine-list">
        {item.map((item, index) => (
          <div className="cuisine-item" key={index}>
            <a href={item.link}><img src={item.img} alt={item.title} /></a>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="row">
          <h1 style={{textAlign:'center',textDecoration:'line'}}>Best selling items</h1>
        {[
          { name: 'Lemon rice', img: 'assets/lemon.jpg',price:'₹150/-' },
          { name: 'Paneer biryani', img: 'assets/paneer-biryani-1.jpg',price:'₹200/-' },
          { name: 'Cranberry juice', img: 'assets/cranberry.jpeg',price:'₹220/-' },
          { name: 'Roasted makhana', img: 'assets/roasted.jpg',price:'₹250/-' },
          { name: 'Matka biryani', img: 'assets/matka.jpg',price:'₹175/-' },
           { name: 'Dragon fruit', img: 'assets/dragon.webp',price:'₹250/-' },
        ].map((outlet) => (
          <div className="col-12 col-sm-6 col-md-4 mt-4 mb-4 d-flex justify-content-center">
            <div className="card outlet-card" style={{ width: '18rem' ,border:"none"}}>
              <a href='#'><img 
      src={outlet.img} 
      className="card-img-top" 
      alt={outlet.name}
      style={{
        height: '200px',
        objectFit: 'cover'
      }}
    />   </a> 
              <h4 className="card-title" style={{textAlign:"center"}}>{outlet.name}</h4>
              <h4 className="card-title" style={{textAlign:"center"}}>{outlet.price}</h4>
              <button style={{width:"75px",borderRadius:'25px',position:'relative',left:"35%"}}onClick={() => addToCart(item)}>add</button>
            </div>
          </div>
        ))}
      </div>
      <OffersSection/>
   
    </>
  );
};

export default CategoryList;
