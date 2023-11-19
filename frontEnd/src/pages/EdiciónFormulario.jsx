import React, { useState, useEffect } from 'react';
import axios from '../config/axios'
import SelectType from '../components/SelectType'
import TextField from '@mui/material/TextField';
import { TableContainer, TableRow, TableHead, Table, TableCell, Button, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const EdicionFormularioDinamico = () => {
    const navigate = useNavigate();
    const [columnas, setColumnas] = useState([]);
    const [flag, setFlag] = useState([]);
    const [isNew, setIsNew] = useState(true)

    const handleChange = async (nombreCampo, valor, history, change) => {
        const nuevasColumnas = [...columnas];
        const [nombreColumnaPadre, ...subcolumnas] = history.split('-');
        actualizarValorRecursivo(nuevasColumnas, nombreColumnaPadre, subcolumnas, nombreCampo, valor, change);
        setColumnas(nuevasColumnas);
        setFlag(!flag)
    };

    const actualizarValorRecursivo = async (columnas, nombreColumnaPadre, subcolumnas, nombreCampo, valor, change) => {
        const columnaPadreIndex = columnas.findIndex(c => c.nombre === nombreColumnaPadre);

        if (columnaPadreIndex !== -1) {

            if (subcolumnas.length === 0) {
                if (change === 'nombre') {
                    columnas[columnaPadreIndex] = { ...columnas[columnaPadreIndex], nombre: valor };
                } else if (change === 'tipo') {
                    columnas[columnaPadreIndex] = { ...columnas[columnaPadreIndex], tipo: valor };
                    if (valor === 'columna') {
                        columnas[columnaPadreIndex] = { ...columnas[columnaPadreIndex], subcolumnas: [] ,value:"" };
                    }
                } else if (change === 'subcolumnas') {
                    columnas[columnaPadreIndex] = { ...columnas[columnaPadreIndex], subcolumnas: valor };
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
        } catch (e) {
            console.log(e);
            if (e.response && e.response.status === 401) {
                console.log("No autorizado");
            }
        }
    };

    const addCustomer = async () => {
        console.log(columnas)
        let data={
            id:"1",
            columnas
        }
        try {
            const res = await axios.post("/customerForm", data, {
                headers: {
                    Authorization: localStorage.getItem("token"),
                }
            })
            if (res.status == 200)
            getColumns()
        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        setFlag(true)
        if (isNew) {
            getColumns()
            setIsNew(false)
        }
    }, [flag])

    const renderizarCampo = (columna, init) => {
        let history = init ? init + "-" + columna.nombre : columna.nombre

        if (columna.tipo === 'columna' && columna.subcolumnas) {
            return (

                <TableRow key={columna.nombre}>
                    <TableCell align="right">Columna</TableCell>
                    <TableCell align="right"><TextField id={history} variant="standard" value={columna.nombre} onChange={(e) => handleChange(columna.nombre, e.target.value, history, "nombre")} /></TableCell>
                    <TableCell align="right"><SelectType history={history} set={handleChange} /></TableCell>
                    <TableCell align="right"><Button variant="contained" color="success" onClick={() => {
                        handleChange(columna.nombre, [...columna.subcolumnas, { nombre: "nuevo", tipo: "texto" }], history, "subcolumnas")
                    }}>+</Button></TableCell>

                    {columna.subcolumnas.map((subcolumna) => renderizarCampo(subcolumna,history))}
                </TableRow>
            );
        }

        return (
            <TableRow key={columna.nombre}>
                <TableCell align="right">Atributo</TableCell>

                <TableCell align="right"> <TextField id={history} variant="standard" value={columna.nombre} onChange={(e) => handleChange(columna.nombre, e.target.value, history, "nombre")} label={columna.nombre} /></TableCell>
                <TableCell align="right"><SelectType value={columna.nombre} history={history} set={handleChange} /></TableCell>

            </TableRow>
        );
    };

    return (
        <form>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    </TableHead>
                </Table>
            </TableContainer>
            <Button variant="contained" color="success" onClick={() => {
                setColumnas(columnas => [{ nombre: "nuevo", tipo: "texto" ,value:""}, ...columnas]);
            }}>+</Button>
            {columnas.map((columna) => renderizarCampo(columna))}

            <Button variant="contained" color="success" onClick={() => {
                addCustomer()
            }}>Guardar</Button>
            <Button variant="contained" color="error" onClick={() => {
                navigate('/customerDinamic')
            }}>cancelar</Button>
        </form>
    );
};

export default EdicionFormularioDinamico;