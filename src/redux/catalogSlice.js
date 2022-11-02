import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import agent from "../components/api/agent.js";

const productsAdapter = createEntityAdapter();

function getAxiosParams(productParams) {
    const params = new URLSearchParams();

    params.append('pageNumber', productParams.pageNumber.toString());
    params.append('pageSize', productParams.pageSize.toString());
    params.append('orderBy', productParams.orderBy);

    if (productParams.searchTerm) {
        params.append('searchTerm', productParams.searchTerm);
    }

    if (productParams.brands.length > 0) {
        params.append('brands', productParams.brands.toString());
    }

    if (productParams.types.length > 0) {
        params.append('types', productParams.types.toString());
    }

    return params;
}

export const fetchProductsAsync = createAsyncThunk(

    'categories/fetchProductsAsync',
    async (_, thunkAPI) => {
            const params = getAxiosParams(thunkAPI.getState().catalog.productParams)
        try {
            const response = await agent.Catalog.list(params);
            thunkAPI.dispatch(setMetaData(response.metaData));
            return response.items;
        }
        catch (error) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }
)
export const fetchFilters = createAsyncThunk(

    'categories/fetchFilters',
    async (_, thunkAPI) => {

        try {

            return agent.Catalog.fetchFilters();
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }

)

export const fetchProductAsync = createAsyncThunk(
    'categories/fetchProductAsync',
    async (productId, thunkAPI) => {

        try {
            return await agent.Catalog.details(productId);
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }
)

function initParams() {

    return {

        pageNumber: 1,
        pageSize: 2,
        orderBy: 'name',
        brands: [],
        types: []
    }
}
export const catalogSlice = createSlice({

    name: 'categories',

    initialState: productsAdapter.getInitialState({
        productsLoaded: false,
        productStatus: 'idle',
        filterLoaded: false,
        brands: [],
        types: [],
        productParams: initParams(),
        metaData: null
    }),
    reducers: {


        setProductParams: (state, action) => {
            state.productsLoaded = false;
            state.productParams = { ...state.productParams, ...action.payload, pageNumber: 1 }
        },

        setPageNumber: (state, action) => {

            state.productsLoaded = false;
            state.productParams = { ...state.productParams, ...action.payload };
        },

        setMetaData: (state, action) => {
            state.metaData = action.payload;
        },

        resetProductParams: (state) => {
            state.productParams = initParams();
        },
        setProduct: (state,action) => {
            productsAdapter.upsertOne(state,action.payload);
            state.productsLoaded = false;
        },
        removeProduct: (state,action) => {
            productsAdapter.removeOne(state, action.payload);
            state.productsLoaded = false;
        }


    },
    extraReducers: (builder => {

        builder.addCase(fetchProductsAsync.pending, (state) => {
            state.productStatus = 'pendingFetchProducts';
        });

        builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
            productsAdapter.setAll(state, action.payload);
            state.productStatus = 'idle';
            state.productsLoaded = true;
        });

        builder.addCase(fetchProductsAsync.rejected, (state, action) => {
            console.log(action.payload);
            state.productStatus = 'idle';
        });

       



        builder.addCase(fetchProductAsync.pending, (state) => {
            state.productStatus = 'pendingFetchProduct';

        });

        builder.addCase(fetchProductAsync.fulfilled, (state, action) => {
            productsAdapter.upsertOne(state, action.payload);
            state.productStatus = 'idle';




        });
        builder.addCase(fetchProductAsync.rejected, (state, action) => {
            console.log(action);
            state.productStatus = 'idle';

        })

        builder.addCase(fetchFilters.pending, (state) => {
            state.productStatus = 'pendingFetchFilters';
        })

        builder.addCase(fetchFilters.fulfilled, (state, action) => {

            state.brands = action.payload.brands;
            state.types = action.payload.types;
            state.filtersLoaded = true;
            state.productStatus = 'idle';
        })

        builder.addCase(fetchFilters.rejected, (state, action) => {

            state.productStatus = 'idle';
            console.log(action.payload);
        })
    })


})

export const productSelectors = productsAdapter.getSelectors((state) => state.catalog)

export const {setProductParams , resetProductParams , setMetaData, setPageNumber,setProduct,removeProduct} = catalogSlice.actions;