import React, { useEffect, useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'styled-components'
import './Cartera.css';
import { Input2 } from '../../Components/Inputs/styles';
import { CSVLink } from 'react-csv';
import { Button, Card, } from 'react-bootstrap';
// import './../../../node_modules/react-input-calendar/style/index.css'


const paginacionOpciones = {
    rowsPerPageText: 'Filas por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
}


const Plano = () => {

    const [cartera, setData] = useState([]);
    const URL = 'http://192.168.10.247:3001/api/vistaplano'


    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setData(data)
        setTablaUsuarios(data)
    }
    useEffect(() => {
        showData()
    }, [])


    const [tablaUsuarios, setTablaUsuarios] = useState([]);
    const [tablaUsuarios2, setTablaUsuarios2] = useState([]);
    const [tablaUsuarios3, setTablaUsuarios3] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [busqueda2, setBusqueda2] = useState("");
    const [busqueda3, setBusqueda3] = useState("");

    const regex = /-/gi;
    let fecha2 = busqueda2.replace(regex, '')
    let fecha = (fecha2.trim())
 
    const createFile = async (e) => {
        e.preventDefault();
        const res = await fetch(`https://tsriverabravaapi.azurewebsites.net/api/GeneraPlanoContable/${fecha}/${busqueda}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        console.log(data);
        if (data != null) {
            window.alert("¡Plano Generado Correctamente!");
        } else {
            window.alert("¡Error al Generar el Plano!");
        }
    }


    const handleChange = e => {
        setBusqueda(e.target.value)
        filtrar(e.target.value);
    }

    const handleChange2 = e => {
        setBusqueda2(e.target.value)
        filtrar2(e.target.value);
    }

    const handleChange3 = e => {
        setBusqueda3(e.target.value)
        filtrar3(e.target.value);
    }


    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
            if (elemento.IdSede.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
        setData(resultadosBusqueda);
        setTablaUsuarios2(resultadosBusqueda);
    }

    const filtrar2 = (terminoBusqueda) => {
        var resultadosBusqueda2 = tablaUsuarios2.filter((elemento) => {
            if (elemento.FechaZeta.toString().toUpperCase().includes(terminoBusqueda.toUpperCase())
            ) {
                return elemento;
            }
        });
        setData(resultadosBusqueda2);
        setTablaUsuarios3(resultadosBusqueda2);
    }

    const filtrar3 = (terminoBusqueda) => {
        var resultadosBusqueda3 = tablaUsuarios3.filter((elemento) => {
            if (elemento.IdentificacionCliente.toString().toUpperCase().includes(terminoBusqueda.toUpperCase())
                || elemento.NombreCliente.toString().toUpperCase().includes(terminoBusqueda.toUpperCase())
                || elemento.CantIdDocumento.toString().toUpperCase().includes(terminoBusqueda.toUpperCase())
                || elemento.Articulo.toString().toUpperCase().includes(terminoBusqueda.toUpperCase())
            ) {
                return elemento;
            }
        });
        setData(resultadosBusqueda3);
    }

    const [TotalVolumen, setTotalVolumen] = useState("");
    const [TotalValor, setTotalValor] = useState("");

    const sumar = () => {
        var suma = 0;
        var suma2 = 0;
        for (var i = 0; i < cartera.length; i++) {
            suma += cartera[i].ValorVenta;
            suma2 += cartera[i].CantIdDocumento;
        }
        let totalVolumen = (suma).toLocaleString("en-US", {
            style: "currency",
            currency: "COP",
            minimumFractionDigits: 0
        });
        let totalValor = (suma2).toLocaleString({ minimumFractionDigits: 2 });
        setTotalVolumen(totalVolumen);
        setTotalValor(totalValor);
    }
    useEffect(() => {
        sumar()
    })

    const columns = [{
        name: ' Id Sede',
        selector: row => row.IdSede,
        sortable: true,
    },
    {
        name: 'Identificacion Cliente',
        selector: row => row.IdentificacionCliente,
        sortable: true,
    },
    {
        name: ' Nombre Cliente',
        selector: row => row.NombreCliente,
        sortable: true,
    },
    {
        name: 'Articulo',
        selector: row => row.Articulo,
        sortable: true,
    },
    {
        name: 'Valor Venta',
        selector: row => row.ValorVenta,
        sortable: true,
    },
    {
        name: 'Fecha Zeta',
        selector: row => row.FechaZeta,
        sortable: true,
    },
    {
        name: 'Cant Id Documento',
        selector: row => row.CantIdDocumento,
        sortable: true,
    },
    ]


    createTheme('custom-theme', {
        text: {
            primary: '#FFFFFF',
            secondary: '#f8a51e',
        },
        background: {
            default: '#262625',
            secondary: '#262625',
        },
        context: {
            background: '#262625',
            text: '#f8a51e',
        },
        divider: {
            default: '#262625',
        },
        action: {
            button: 'rgba(0,0,0,.54)',
            hover: 'rgba(0,0,0,.08)',
            disabled: 'rgba(0,0,0,.12)',
        },
    }, 'dark');

    const subHeaderComponentMemo = React.useMemo(() => {

        return (
            <div style={{ width: '100%' }}>
                <Input2
                    type="text"
                    placeholder="Buscar Id Sede"
                    className="textField"
                    name="busqueda"
                    value={busqueda}
                    onChange={handleChange} />
                <Input2
                    type="date"
                    placeholder="Buscar Fecha"
                    className="textField"
                    name="busqueda2"
                    formTarget='YYYY-MM-DD'
                    value={busqueda2}
                    onChange={handleChange2} />
                <Input2
                    type="text"
                    placeholder="Buscar"
                    className="textField"
                    name="busqueda3"
                    value={busqueda3}
                    onChange={handleChange3} />
            </div>
        );
    }, [busqueda, handleChange, busqueda2, busqueda3, handleChange2, handleChange3]);

    return (
        <div className="content">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h3>Vista Plano Cartera</h3>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item active">Vista Plano Cartera</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <CSVLink data={cartera} filename={"Exportacion.csv"}> <Button variant='warning' style={{ 'color': 'black' }}>Exportar Datos</Button></CSVLink>
                {/* <Button variant='warning' style={{ 'color': 'black' }} onClick={createFile}>Generar Plano</Button> */}
                <a className="btn btn-warning" style={{color: 'black'}} target={'_blank'} href={`https://tsriverabravaapi.azurewebsites.net/api/GeneraPlanoContable/${fecha}/${busqueda}`}>Generar Plano</a>
            </section>
            <div className="row">
            </div>
            <div className="row">
                <div bg={'dark'} style={{ width: '250px', height: '60px', margin: '25px', color: '#f8a51e', backgroundColor: '#171616' }}
                    text={'white'}
                    className="card">
                    <div classname="card head"> <b> Cant de Id Documento: </b></div>
                    <div className="card body" style={{ color: '#ffffff', backgroundColor: '#171616' }}>{TotalValor}</div>
                </div>
                <div bg={'dark'} style={{ width: '250px', height: '60px', margin: '25px', color: '#f8a51e', backgroundColor: '#171616' }}
                    text={'white'}
                    className="card">
                    <div classname="card head"><b>Total Valor de Ventas:  </b></div>
                    <div className="card body" style={{ color: '#ffffff', backgroundColor: '#171616' }}>{TotalVolumen}</div>
                </div>
            </div>
            <Card style={{ "width": "100%", "border-radius": "5px", 'height': '80%', 'margin': '5px', ' background-color': '#212121' }}>
                <div className="card-header bg-warning">
                    <h3 className="card-title"><b>Vista Plano Cartera</b></h3>
                </div>
                <DataTable
                    bordered
                    hover
                    columns={columns}
                    theme="custom-theme"
                    data={cartera}
                    pagination
                    responsive={true}
                    paginationComponentOptions={paginacionOpciones}
                    noDataComponent={<span>No se encontró ningún elemento</span>}
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
                    selectableRows
                    persistTableHead
                />
            </Card>
        </div>
    );
}

export default Plano;