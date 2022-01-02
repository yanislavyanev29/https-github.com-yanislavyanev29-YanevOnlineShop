import {useState, useEffect} from 'react';

import * as productService from '../services/productService.js'



const useProductState = (productId) => {

const [product,setProduct] = useState({});
  

 

useEffect(() => {
  productService.getProduct(productId)
      .then(res => {
        console.log(res);
          setProduct(res);
      })

 
}, []);
    return [
         product,
         setProduct

    ]

};
export default useProductState;