import { configureStore } from "@reduxjs/toolkit";
import {basketSlice} from './basketSlice.js'
import {catalogSlice} from './catalogSlice.js'
import {useDispatch, useSelector } from "react-redux";
import { accountSlice } from "./accountSlice.js";

export const store = configureStore ({

    reducer : {

        basket: basketSlice.reducer,
        catalog: catalogSlice.reducer,
        account: accountSlice.reducer
    }
})

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

