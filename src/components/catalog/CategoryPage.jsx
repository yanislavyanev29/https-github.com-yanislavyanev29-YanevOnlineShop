import { Grid, Paper } from "@mui/material";
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchFilters,fetchProductsAsync,productSelectors,setPageNumber,setProductParams } from '../../redux/catalogSlice.js';
import LoadingComponent from '../layout/LoadingComponent.jsx';
import RadioButton from './RadioButton.jsx';
import AppPagination from './PaginationComponent.jsx';
import CheckBox from './CheckBox.jsx';
import ProductsList from './ProductsList.jsx';
import ProductSearch from "./ProductSearch.jsx";

const sortOptions = [

    {value: 'clothes' , label: 'Clothes'},
    {value: 'shoes', label: 'Shoes'},
    {value: 'accessories' ,label: 'Accessories'}
]

const CategoryPage = () => {

    const products = useSelector(productSelectors.selectAll)
    const {productsLoaded,filtersLoaded,brands,types,productParams,metaData} = useSelector(state => state.catalog);
    const dispatch = useDispatch();
  
    useEffect(() => {
        if(!productsLoaded) dispatch(fetchProductsAsync());
       
    }, [dispatch, productsLoaded]);

   
    useEffect(() => {
        if (!filtersLoaded) dispatch(fetchFilters());
    }, [filtersLoaded, dispatch]);
   // if (!filtersLoaded) return <LoadingComponent message='Loading products...' />
    return (

        <Grid sx={{marginTop: '180px'}} container columnSpacing={4}>
            <Grid item xs={3}>
                <Paper sx={{ mb: 2 }}>
                    <ProductSearch/>
                </Paper>
                <Paper sx={{mr: 0, mb: 2, p: 2 }}>
                     <RadioButton 
                       selectedValue={productParams.orderBy}
                       options={sortOptions}
                       onChange={(e) => dispatch(setProductParams({orderBy: e.target.value}))}
                     
                      />
                </Paper>
                <Paper sx={{ mb: 2, p: 2 }}>
                   
                   
                  <CheckBox
                   items={brands}
                   checked={productParams.brands}
                   onChange={(items) => dispatch(setProductParams({brands: items}))}
                  
                  />

                </Paper>
                <Paper sx={{ mb: 2, p: 2 }}>
                    
                </Paper>
            </Grid>
            <Grid item xs={7.5}>
                <ProductsList products={products} />
            </Grid>
            <Grid item xs={3} />
            <Grid item xs={9} sx={{mb: 7}}>
                 {metaData &&
                <AppPagination 
                    
                    metaData={metaData}
                    onPageChange={(page) => 
                    dispatch(setPageNumber({pageNumber : page}))}
                
                />}
            </Grid>
        </Grid>
    )
}

export default CategoryPage;

// // <form action="">
// <div className="item">
// <label htmlFor="sort-by">Sort By</label>
// <select className='item-select' name="sort-by" id="sort-by">
//     <option value="title" selected="selected">Name</option>
//     <option value="number">Price</option>

//     <option value="created">Newness</option>
// </select>
// </div>
// <div className="item">
// <label htmlFor="order-by">Order</label>
// <select className='item-select' name="order-by" id="sort-by">
//     <option value="ASC" selected="selected">ASC</option>
//     <option value="DESC">DESC</option>
// </select>
// </div>
// <a type='submit' href="#">Apply</a>
// </form>