import Product from "./Product.jsx"
import { productItems } from "../data.js"
import '../styles/Products.css'


const Products = () => {

      return (
    <>
    {productItems.length > 0
    ? (

        <div className="product-layout">

              {productItems.map(x => <Product key={x.id} product={x}/>)}
        </div>
           
    )
    : <p>There are no products in the database</p>
      
    
    
       }
      </>
      )
}
export default Products;