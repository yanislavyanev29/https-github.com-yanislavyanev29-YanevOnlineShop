import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import OrderSummary from '../orders/OrderSummary.jsx'
import OrderTable from '../orders/OrderTable.jsx'

export default function Review() {
  const {basket} = useSelector(state => state.basket);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      {basket &&
      <OrderTable items={basket.items} isBasket={false} />}
      <Grid container>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <OrderSummary />
        </Grid>
      </Grid>
    </>
  );
}