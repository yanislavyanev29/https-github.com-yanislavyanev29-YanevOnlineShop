import { createAsyncThunk, createSlice,isAnyOf } from "@reduxjs/toolkit";
import agent from "../components/api/agent.js";
import { getCookie } from "../components/util/utils.js";

const initialState = {
    basket: null,
    status: 'idle'
}

export const fetchBasketAsync = createAsyncThunk( 
    'basket/fetchBasketAsync',
    async(_,thunkAPI) => {

        try{

            return await agent.Basket.get();
        } catch(error){
            return thunkAPI.rejectWithValue({error: error.data});
        }
    },

    {
        condition: () => {
            if(!getCookie('buyerId')) return false;
        }
    }
)
export const addBasketItemAsync = createAsyncThunk(
   
    'basket/addBasketItemAsync',
    async ({productId, quantity = 1}, thunkAPI) => {

        try{
            return await agent.Basket.addItem(productId,quantity);
        } catch(error){
            return thunkAPI.createAsyncThunk({error: error.data})
        }
    }
)

export const removeBasketItemAsync = createAsyncThunk(
    'basket/removeBasketItemAsync',
    async ({productId,quantity}, thunkAPI) => {

        try{
            await  agent.Basket.removeItem(productId,quantity);

        } catch (error){
               return thunkAPI.rejectWithValue({error: error.data})
        }

    }
)

export const basketSlice = createSlice({

    name: 'basket',
    initialState,
    reducers: {
        setBasket: (state,action) => {
            state.basket = action.payload
        },

        clearBasket: (state) => {
            state.basket = null;
        }
    },
    extraReducers: (builder => {
        
        builder.addCase(addBasketItemAsync.pending, (state,action) => {
            state.status = 'pendingAddItem' + action.meta.arg.productId;
        });

       

         builder.addCase(removeBasketItemAsync.pending, (state,action) => {
             state.status = 'pendingRemoveItem' + action.meta.arg.productId + 
             action.meta.arg.name;
         });

         builder.addCase(removeBasketItemAsync.fulfilled, (state,action) => {

            const {productId,quantity} = action.meta.arg;
            const itemIndex = state.basket?.items.findIndex(i => i.productId === productId);

            if(itemIndex === -1 || itemIndex === undefined) return;
            state.basket.items[itemIndex].quantity -= quantity;

            if(state.basket?.items[itemIndex].quantity === 0)
              state.basket.items.splice(itemIndex,1);

            state.status = 'idle';

         });

         builder.addCase(removeBasketItemAsync.rejected,(state,action) => {

            console.log(action.payload);
            state.status = 'idle';
         })
        
         builder.addMatcher(isAnyOf(addBasketItemAsync.fulfilled,fetchBasketAsync.fulfilled), (state,action) => {
             state.basket = action.payload;
             state.status = 'idle';
         });

         builder.addMatcher(isAnyOf(addBasketItemAsync.rejected, fetchBasketAsync.rejected),(state,action) => {
             console.log(action.payload);
             state.status = 'idle';
         })

    })
})

export const {setBasket, clearBasket} = basketSlice.actions;