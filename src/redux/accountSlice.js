import { FieldValues } from "react-hook-form";
import agent from "../components/api/agent";
import { setBasket } from "./basketSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { history } from "..";
const initialState ={

    user: null
}

export const signInUser = createAsyncThunk(

    'account/signInUser',
    async(data,thunkAPI) => {

        try{

            const userDto = await agent.Account.login(data);
            const {basket, ...user} = userDto;
            if(basket) thunkAPI.dispatch(setBasket(basket));
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        } catch (error) {
            return thunkAPI.rejectWithValue({error: error.data});
        }
    }
)

export const fetchCurrentUser = createAsyncThunk(
    'account/fetchCurrentUser',
    async (_,thunkAPI) => {
          
        thunkAPI.dispatch(setUser(JSON.parse(localStorage.getItem('user'))))

        try{
            const userDto = await agent.Account.currentUser();
            const {basket, ...user} = userDto;
            if(basket) thunkAPI.dispatch(setBasket(basket));
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        } catch (error) {
            return thunkAPI.rejectWithValue({error: error.data})
        }
    },
    {
        condition: () => {
            if(!localStorage.getItem('user')) return false;
        }
    }
)

export const accountSlice = createSlice({

    name : 'account',
    initialState,
    reducers: {

        signOut: (state) => {
            state.user = null;
            localStorage.removeItem('user');
            history.push('/')
        },
        setUser : (state,action) =>  {
            
          let claims = JSON.parse(atob(action.payload.token.split('.')[1]));
          let roles = claims['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
          state.user = {...action.payload , roles: typeof(roles) === 'string' ? [roles] : roles};

        }
    },

    extraReducers: (builder => {


        builder.addCase(fetchCurrentUser.rejected,(state) => {

            state.user = null;
            localStorage.removeItem('user');
            history.push('/');
        })

        builder.addMatcher(isAnyOf(signInUser.fulfilled,fetchCurrentUser.fulfilled), (state,action) => {
            let claims = JSON.parse(atob(action.payload.token.split('.')[1]));
            let roles = claims['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
            state.user = {...action.payload , roles: typeof(roles) === 'string' ? [roles] : roles};
        });

        builder.addMatcher(isAnyOf(signInUser.rejected), (state,action) => {
            throw action.payload;
        })
    })

})

export const {signOut, setUser} = accountSlice.actions
