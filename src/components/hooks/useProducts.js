import { useEffect } from "react";
import { productSelectors,fetchProductsAsync, fetchFilters } from "../../redux/catalogSlice.js";
import { useSelector, useDispatch } from "react-redux";

export default function useProducts() {

    const products = useSelector(productSelectors.selectAll);
    const {productsLoaded, filtersLoaded, brands, types, metaData} = useSelector(state => state.catalog)

    const dispatch = useDispatch();

    useEffect(() => {
        if(!productsLoaded) dispatch(fetchProductsAsync());

    }, [productsLoaded,dispatch]);

    useEffect(() => {
        if(!filtersLoaded) dispatch(fetchFilters());

    },[filtersLoaded,dispatch]) 

    return {
        products,
        productsLoaded,
        filtersLoaded,
        brands,
        types,
        metaData
    }

}