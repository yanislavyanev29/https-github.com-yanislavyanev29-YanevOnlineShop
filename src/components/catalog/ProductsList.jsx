import CategoryProduct from "./CategoryProduct.jsx"
import { Grid } from "@mui/material";
import { useSelector } from "react-redux"
import ProductCardSkeleton from "./productSkeleton.jsx"

const ProductsList = ({products}) => {

      const {productsLoaded} = useSelector(state => state.catalog)
      return (

    

            <Grid container spacing={3}>
            {products.map(product => (
                <Grid item xs={4} key={product.id}>
                    {!productsLoaded ? (
                        <ProductCardSkeleton />
                    ) : (
                        <CategoryProduct xs={4} product={product} />
                    )}
                </Grid>
            ))}
        </Grid>
      
      )
}
export default ProductsList;