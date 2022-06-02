
import React from "react";

import '../../styles/Product.css'
import { Link,useNavigate   } from 'react-router-dom';

const CategoryProduct = ({
product
}) => { 

    let navigate = useNavigate(); 
  const detailsButton = () =>{ 
    let path = `/details/${product.id}`; 
    navigate(path);
  }


  
  return (

     
<div className="product">


            <div className="img-container">
              <img src={product.imageUrl1}/>
              <div className="addCart">
                <i className="fas fa-shopping-cart"></i>
              </div>

              <ul className="side-icons">
                <span onClick={detailsButton}><i className="fas fa-search"></i></span>
                <span><i className="far fa-heart"></i></span>
                <span><i className="fas fa-sliders-h"></i></span>
              </ul>
            </div>
            <div className="bottom">
              <a href="productDetails.html">{product.name}</a>
              <div className="price">
                <span>{product.price}$</span>
              </div>
            </div>
          </div>

         
        
    )
}

export default CategoryProduct;

