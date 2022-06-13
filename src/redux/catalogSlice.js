import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import agent from "../components/api/agent.js";

const productsAdapter = createEntityAdapter();


export const fetchProductsAsync = createAsyncThunk(

    'categories/fetchProductsAsync',
    async (_, thunkAPI) => {

        try {
            return await agent.Catalog.list();
        }
        catch (error) {
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

export const catalogSlice = createSlice({

    name: 'categories',
  
    initialState :  productsAdapter.getInitialState({
        productsLoaded: false,
        productStatus: 'idle'
    }),
    reducers: {},
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
    })


})

export const productSelectors = productsAdapter.getSelectors((state) => state.catalog)