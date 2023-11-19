import React, { useState, useEffect } from 'react';
import axios from '../config/axios'
import { TableContainer, TableRow, TableHead, Table, TableCell, Button, Paper, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';
// 
const FormularioDinamico = () => {
    const [customerId, setCustomerId] = useState(localStorage.getItem("customer"))
    const navigate = useNavigate();
    const [formulario, setFormulario] = useState({});
    const [columnas, setColumnas] = useState([]);

    const handleChange = async (nombreCampo, valor, history, change) => {

        const nuevasColumnas = [...columnas];
        const [nombreColumnaPadre, ...subcolumnas] = history.split('-');
        actualizarValorRecursivo(nuevasColumnas, nombreColumnaPadre, subcolumnas, nombreCampo, valor, change);
        setColumnas(nuevasColumnas);
    };

    const actualizarValorRecursivo = async (columnas, nombreColumnaPadre, subcolumnas, nombreCampo, valor, change) => {
        const columnaPadreIndex = columnas.findIndex(c => c.nombre === nombreColumnaPadre);

        if (columnaPadreIndex !== -1) {

            if (subcolumnas.length === 0) {
                if (change === 'value') {
                    columnas[columnaPadreIndex] = { ...columnas[columnaPadreIndex], value: valor };
                }
            } else {

                const subcolumnaActual = columnas[columnaPadreIndex].subcolumnas || [];
                const subcolumnaIndex = subcolumnaActual.findIndex(subc => subc.nombre === subcolumnas[0]);
                if (subcolumnaIndex !== -1) {
                    actualizarValorRecursivo(subcolumnaActual, subcolumnas[0], subcolumnas.slice(1), nombreCampo, valor, change);
                }
            }
        }
    };


   

    const getColumns = async () => {
        try {
            const res = await axios.get("/customerForm/1", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });
            setColumnas(res.data.columnas)
            localStorage.setItem("form", res.data.columnas);

        } catch (e) {
            console.log(e);
            if (e.response && e.response.status === 401) {
                console.log("No autorizado");
            }
        }
    };

    const getCustomer = async () => {
        try {
            const res = await axios.get("/customers-mdb/" + customerId, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });
            const res2 = await axios.get("/customerForm/1", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });
            setColumnas(res.data.data);
        } catch (e) {
            if (e.response && e.response.status === 401) {
                console.log("No Registrado");
            }
        }
    }

    const handleSubmit = async (e) => {
        
        let data = {
            customerId: customerId,
            data: columnas
        }

        try {
            const res = await axios.post("/customers-mdb", data, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                }
            })
            if (res.status == 200)
                useEffect()
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getColumns()
        getCustomer()
    }, [])

    const renderizarCampo = (columna, init) => {
        let history = init ? init + "-" + columna.nombre : columna.nombre

        if (columna.tipo === 'columna' && columna.subcolumnas) {
            return (

                <TableRow key={columna.nombre}>
                    <TableCell align="right">{columna.nombre}</TableCell>
                    {columna.subcolumnas.map((subcolumna) => renderizarCampo(subcolumna, history))}
                </TableRow>
            );
        }

        return (
            <TableRow key={columna.nombre}>
                <TableCell align="right">{columna.nombre}</TableCell>
                <TableCell align="right"> <TextField id={history} variant="standard" value={columna.value} onChange={(e) => handleChange(columna.nombre, e.target.value, history, "value")} label={columna.nombre} /></TableCell>

            </TableRow>
        );
    };

    return (
        <form>
            <Button variant="contained" color="success" onClick={() => { navigate('/editForm') }}>Edit Form</Button>
            {columnas.map((columna) => renderizarCampo(columna))}
            <Button variant="contained" color="success" onClick={() => { handleSubmit() }}>Save</Button>
            <Button variant="contained" color="error" onClick={() => { navigate("/customers") }}>Cancel</Button>
        </form>
    );
};

export default FormularioDinamico;