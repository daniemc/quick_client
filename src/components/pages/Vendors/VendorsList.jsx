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
    Chip,
} from '@material-ui/core';
import {
    useSelector,
    useDispatch,
} from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {
    editVendor,
    deleteVendor,
} from '../../../store/actions/vendors';

export default function VendorsList() {
    const vendorsList = useSelector((state) => state.vendors.vendors)
    const dispatch = useDispatch();
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="center">Nombre</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">Acciones</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {vendorsList.map((vendor, i) => (
                        <TableRow key={`vendor-${i}`}>
                            <TableCell>
                                {vendor.id}
                            </TableCell>
                            <TableCell align="center">
                                {vendor.name}
                            </TableCell>
                            <TableCell align="center">
                                <Chip 
                                    label={vendor.active ? 'Activo' : 'Inactivo'} 
                                    variant="outlined" 
                                    color={vendor.active ? 'primary' : 'secondary'} 
                                />
                                
                            </TableCell>
                            <TableCell align="center">
                                <IconButton 
                                    color="secondary"
                                    onClick={() => dispatch(editVendor(vendor))}
                                >
                                    <EditIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => dispatch(deleteVendor(vendor))}
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
