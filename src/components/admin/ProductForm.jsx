import { Typography, Grid, Paper, Box, Button } from "@mui/material";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import AddDropzone from "../AppDropZone.jsx";
import AppSelectList from "../AppSelectList.jsx";
import AppTextInput from "../AppTextInput.jsx";
import useProducts from "../hooks/useProducts.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./productValidation.js";
import { useDispatch } from "react-redux";
import { setProduct } from "../../redux/catalogSlice";
import { LoadingButton } from "@mui/lab";
import agent from "../api/agent";


export default function ProductForm({product, cancelEdit}){


    const {control, reset, handleSubmit, watch, formState: {isDirty, isSubmitting}} = useForm({

        mode: 'all',
        resolver: yupResolver(validationSchema)
    });

    const {brands, types} = useProducts();
    const watchFile = watch('file', null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(product && !watchFile && !isDirty) reset(product);
        return () => {
            if(watchFile) URL.revokeObjectURL(watchFile.preview);

        }
    }, [product, reset,watchFile,isDirty]);

    async function handleSubmitData(data){

        try{
            let response;

            if(product){
                response = await agent.Admin.updateProduct(data)
            } else{
                response = await agent.Admin.createProduct(data);
            }

        } catch(error){
            console.log(error);
        }
    }

    return (
        <Box component={Paper} sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
                Product Details
            </Typography>
            <form onSubmit={handleSubmit(handleSubmitData)}>
                <Grid container spacing={3}>  
                    <Grid item xs={12} sm={12}>
                        <AppTextInput control={control} name='name' label='Product name' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <AppSelectList items={brands} control={control} name='brand' label='Brand' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <AppSelectList items={types} control={control} name='type' label='Type' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <AppTextInput type='number' control={control} name='price' label='Price' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <AppTextInput type='number' control={control} name='quantityInStock' label='Quantity in Stock' />
                    </Grid>
                    <Grid item xs={12}>
                        <AppTextInput multiline={true} rows={4} control={control} name='description' label='Description' />
                    </Grid>
                    <Grid item xs={12}>
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <AddDropzone control={control} name='file' />
                            {watchFile ? (
                                <img src={watchFile.preview} alt='preview' style={{maxHeight: 200}} />
                            ) : (
                                <img src={product?.pictureUrl} alt={product?.name} style={{maxHeight: 200}} />
                            )}
                        </Box>

                    </Grid>
                </Grid>
                <Box display='flex' justifyContent='space-between' sx={{ mt: 3 }}>
                    <Button onClick={cancelEdit} variant='contained' color='inherit'>Cancel</Button>
                    <LoadingButton loading={isSubmitting} type='submit' variant='contained' color='success'>Submit</LoadingButton>
                </Box>
            </form>
        </Box>
    )
}