import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import agent from "../components/api/agent.js";

const productsAdapter = createEntityAdapter();
const initialState = productsAdapter.getInitialState();

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
  
    initialState,
    reducers: {},
    extraReducers: (builder => {

        builder.addCase(fetchProductsAsync.pending, (state) => {
           
        });

        builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
            productsAdapter.setAll(state, action.payload);
           
        });

        builder.addCase(fetchProductsAsync.rejected, (state, action) => {
            console.log(action.payload);

        });


        builder.addCase(fetchProductAsync.pending, (state) => {
            
          
        });

        builder.addCase(fetchProductAsync.fulfilled, (state, action) => {
            productsAdapter.upsertOne(state, action.payload);
            
      


        });
        builder.addCase(fetchProductAsync.rejected, (state, action) => {
            console.log(action);

        })
    })


})

export const productSelectors = productsAdapter.getSelectors((state) => state.catalog)