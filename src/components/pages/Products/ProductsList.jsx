import React from 'react';
import {
    Table,
    TableContainer,
    Paper,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    IconButton,
} from '@material-ui/core';
import {
    useSelector,
    useDispatch,
} from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {
    editProduct,
    deleteProduct,
} from '../../../store/actions/products';

export default function ProductsList() {
    const productsList = useSelector((state) => state.products.products)
    const dispatch = useDispatch();
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="center">Nombre</TableCell>
                    <TableCell align="center">Unidad Med Compra</TableCell>
                    <TableCell align="center">Cant compra</TableCell>
                    <TableCell align="center">Unidad Med Venta</TableCell>
                    <TableCell align="center">Cant venta</TableCell>
                    <TableCell align="center">Acciones</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {productsList.map((product, i) => (
                        <TableRow key={`product-${i}`}>
                            <TableCell>
                                {product.id}
                            </TableCell>
                            <TableCell align="center">
                                {product.name}
                            </TableCell>
                            <TableCell align="center">
                                {product.purchase_unit_measure}
                            </TableCell>
                            <TableCell align="center">
                                {product.purchase_qty}
                            </TableCell>
                            <TableCell align="center">
                                {product.sale_unit_measure}
                            </TableCell>
                            <TableCell align="center">
                                {product.sale_qty}
                            </TableCell>
                            <TableCell align="center">
                                <IconButton 
                                    color="secondary"
                                    onClick={() => dispatch(editProduct(product))}
                                >
                                    <EditIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => dispatch(deleteProduct(product))}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
