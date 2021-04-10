import React from 'react';
import {
    Table,
    TableContainer,
    Paper,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@material-ui/core';
import {
    useSelector,
} from 'react-redux';

export default function MeasuresList() {
    const measuresList = useSelector((state) => state.measures.measures)
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
                    {measuresList.map((measure) => (
                        <TableRow>
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
                                actions
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
