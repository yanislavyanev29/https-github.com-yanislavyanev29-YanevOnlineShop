
import React from "react";
import { useAppDispatch,useAppSelector } from "../../redux/configureStore";
import '../../styles/Product.css'
import { Link } from 'react-router-dom';
import { addBasketItemAsync } from "../../redux/basketSlice";
const Product = ({
product
}) => { 

  const {status} = useAppSelector(state => state.basket);
  const dispatch = useAppDispatch();
  return (

     
<div className="product">


            <div className="img-container">
              <img src={product.imgUrl}/>
              <div className="addCart" onClick={() => dispatch(addBasketItemAsync({productId: product.id}))}>
                <i className="fas fa-shopping-cart"></i>
              </div>

              <ul className="side-icons">
                <span><Link style={{textDecoration : "none" , color: "black"}} to={`/details/${product.id}`}><i className="fas fa-search"></i></Link></span>
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

export default Product;


