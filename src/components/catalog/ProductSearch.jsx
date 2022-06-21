import { debounce, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setProductParams } from "../../redux/catalogSlice.js";

export default function ProductSearch() {
    const {productParams} = useSelector(state => state.catalog);
    const [searchTerm, setSearchTerm] = useState(productParams.searchTerm);
    const dispatch = useDispatch();

    const debouncedSearch = debounce((event) => {
        dispatch(setProductParams({searchTerm: event.target.value}))
    }, 1000)

    return (
        <TextField
            label='Search products'
            variant='outlined'
            fullWidth
            value={searchTerm || ''}
            onChange={(event) => {
                setSearchTerm(event.target.value);
                debouncedSearch(event);
            }}
        />
    )
}