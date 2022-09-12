
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { Box } from "@mui/system";


export default function OrderTable({ items }) {


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="right">Subtotal</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map(item => (
                        <TableRow
                            key={item.productId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                               
                                <Box display='flex' alignItems='center'>
                                    <img src={item.imageUrl} alt={item.name} style={{ height: 50, marginRight: 20 }} />
                                    <span>{item.name}</span>
                                </Box>
                                 
                            </TableCell>
                            <TableCell align="right">${(item.price)}</TableCell>
                            <TableCell align="center">

                                {item.quantity}

                            </TableCell>
                            <TableCell align="right">${((item.price) * item.quantity)}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}