import { productItems } from "../data.js"

export  const  getProduct =  async (productId) => {
    const  {product} =  productItems.map(p => p.id === productId);
    console.log(product)
    return product;
};