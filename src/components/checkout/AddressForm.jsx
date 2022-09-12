import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useFormContext } from 'react-hook-form';
import AppTextInput from '../AppTextInput.jsx';
import AppCheckbox from '../AppCheckBox.jsx';

export default function AddressForm() {
    const { control, formState } = useFormContext();
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <AppTextInput  name='fullName' label='Full name' />
                </Grid>
                <Grid item xs={12}>
                    <AppTextInput  name='address1' label='Address line 1' />
                </Grid>
                <Grid item xs={12}>
                    <AppTextInput  name='address2' label='Address line 2' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput  name='city' label='City' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput  name='state' label='State' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput  name='zip' label='Zipcode' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AppTextInput  name='country' label='Country' />
                </Grid>
                <Grid item xs={12}>
                    <AppCheckbox 
                      disabled={!formState.isDirty}
                        name='saveAddress' 
                        label='Save this as the default address' 
                        control={control} 
                    />
                </Grid>
            </Grid>
        </>
    );
}