import { TableContainer, Paper, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { useSelector } from "react-redux";
import { currencyFormat } from "../util/utils.js";



export default function OrderSummary({subtotal}) {
    const {basket} = useSelector(state => state.basket);
    if (subtotal === undefined)
       subtotal = basket?.items.reduce((sum, item) => sum + (item.quantity * item.price), 0) ?? 0;
    const deliveryFee = subtotal > 300 ? 0 : 8;

    return (
        <>
            <TableContainer component={Paper} variant={'outlined'}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">${subtotal}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Delivery fee*</TableCell>
                            <TableCell align="right">${deliveryFee}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">${subtotal + deliveryFee}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span style={{fontStyle: 'italic'}}>*Orders over $300 qualify for free delivery</span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}