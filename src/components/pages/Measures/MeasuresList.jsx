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
    editMeasure,
    deleteMeasure,
} from '../../../store/actions/measures';

export default function MeasuresList() {
    const measuresList = useSelector((state) => state.measures.measures)
    const dispatch = useDispatch();
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="center">Nombre</TableCell>
                    <TableCell align="center">Descripción</TableCell>
                    <TableCell align="center">Orden/Nivel</TableCell>
                    <TableCell align="center">Acciones</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {measuresList.map((measure, i) => (
                        <TableRow key={`measure-${i}`}>
                            <TableCell>
                                {measure.id}
                            </TableCell>
                            <TableCell align="center">
                                {measure.name}
                            </TableCell>
                            <TableCell align="center">
                                {measure.description}
                            </TableCell>
                            <TableCell align="center">
                                {measure.level}
                            </TableCell>
                            <TableCell align="center">
                                <IconButton 
                                    color="secondary"
                                    onClick={() => dispatch(editMeasure(measure))}
                                >
                                    <EditIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => dispatch(deleteMeasure(measure))}
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
