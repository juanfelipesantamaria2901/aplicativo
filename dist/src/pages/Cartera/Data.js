import React, { useEffect, useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'styled-components'
import './Cartera.css';
import { Input2 } from '../../Components/Inputs/styles';
import Inpunt from '../../Components/Inputs/Input';
import {
    Button,
} from 'react-bootstrap';
import { FilterComponent } from './Filter';


const paginacionOpciones = {
    rowsPerPageText: 'Filas por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
}


const Compoentedata = () => {

    const [cartera, setData] = useState([]);
    const URL = 'http://192.168.0.19:3001/api/cartera'


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
                || elemento.Hora.toString().toUpperCase().includes(terminoBusqueda.toUpperCase())
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
                || elemento.IdDocumento.toString().toUpperCase().includes(terminoBusqueda.toUpperCase())
                || elemento.Cuenta.toString().toUpperCase().includes(terminoBusqueda.toUpperCase())
            ) {
                return elemento;
            }
        });
        setData(resultadosBusqueda3);
    }

    const[TotalVolumen, setTotalVolumen] = useState(0);
    const[TotalValor, setTotalValor] = useState(0);
    
    const sumar = () => {
        var suma = 0;
        var suma2 = 0;
        for (var i = 0; i < cartera.length; i++) {
            suma += cartera[i].VolumenVenta;
            suma2 += cartera[i].ValorVenta;
        }
        setTotalVolumen(suma);
        setTotalValor(suma2);
    }  
    useEffect(() => {
        sumar()
    })


    const columns = [{
        name: 'Sede',
        selector: row => row.IdSede,
        sortable: true,
        maxWidth : '3%',
    },
    {
        name: 'Turno',
        selector: row => row.IdTurno,
        sortable: true,
        align: 'center', 
        maxWidth : '3%',
    },
    {
        name: 'Isla',
        selector: row => row.CodigoIsla,
        sortable: true,
        maxWidth : '3%',
    },
    {
        name: 'Vendedor',
        selector: row => row.NombreVendedor,
        sortable: true,
        grow : '4',
    },
    {
        name: 'Iden Cliente',
        selector: row => row.IdentificacionCliente,
        sortable: true,
    },
    {
        name: 'Cliente',
        selector: row => row.NombreCliente,
        sortable: true,
        grow : '5',
    },
    {
        name: 'Id Doc',
        selector: row => row.IdDocumento,
        sortable: true,
    },
    {
        name: 'Articulo',
        selector: row => row.Articulo,
        sortable: true,
        align: 'center', 
        grow : '4',
    },
    {
        name: 'Volumen',
        selector: row => row.VolumenVenta,
        sortable: true,
    },
    {
        name: 'PPU',
        selector: row => row.ValorUnitario,
        sortable: true,
    },
    {
        name: 'Valor Venta',
        selector: row => row.ValorVenta,
        sortable: true,
    },
    {
        name: 'Placa',
        selector: row => row.Placa,
        sortable: true,
    },
    {
        name: 'Forma Pago',
        selector: row => row.FormasPago,
        sortable: true,
        grow : '3',
    },
    {
        name: 'Cara',
        selector: row => row.CodigoCara,
        sortable: true,
    },
    {
        name: 'Mangueral',
        selector: row => row.CodigoManguera,
        sortable: true,
    },
    {
        name: 'Pre Factura',
        selector: row => row.PrefijoFactura,
        sortable: true,
    },
    {
        name: 'NumFactura',
        selector: row => row.NumeroFactura,
        sortable: true,
    },
    {
        name: 'Fecha Zeta',
        selector: row => row.FechaZeta,
        sortable: true,
    },
    {
        name: 'Fecha',
        selector: row => row.Fecha,
        sortable: true,
    },
    {
        name: 'Hora',
        selector: row => row.Hora,
        sortable: true,
    },
    {
        name: 'Km',
        selector: row => row.Kilometraje,
        sortable: true,
    },
    {
        name: 'Rom',
        selector: row => row.Rom,
        sortable: true,
        grow : '5',
    },
    {
        name: 'Cuenta',
        selector: row => row.Cuenta,
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
            <div style={{ width: '100%' } }>
            <Input2
                type="text"
                placeholder="Buscar Id Sede"
                className="textField"
                name="busqueda"
                value={busqueda}
                onChange={handleChange} />
                <Input2
                type="text"
                placeholder="Buscar Fecha"
                className="textField"
                name="busqueda2"
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
    }, [busqueda, handleChange, busqueda2, busqueda3,handleChange2,handleChange3]);

    return (
        <div>
        <div className="row">
        <div bg={'dark'} style={{ width: '250px', height: '60px', margin: '25px', color: '#f8a51e', backgroundColor: '#171616' }}
            text={'white'}
            className="card">
            <div classname="card head"><b>Transacciones Totales:</b></div>
            <div className="card body" style={{ color: '#ffffff', backgroundColor: '#171616' }}>{cartera.length}</div>
        </div>
        <div bg={'dark'} style={{ width: '250px', height: '60px', margin: '25px', color: '#f8a51e', backgroundColor: '#171616' }}
            text={'white'}
            className="card">
            <div classname="card head"> <b>Total Volumen Ventas: </b></div>
            <div className="card body" style={{ color: '#ffffff', backgroundColor: '#171616' }}>{TotalVolumen}</div>
        </div>
        <div bg={'dark'} style={{ width: '250px', height: '60px', margin: '25px', color: '#f8a51e', backgroundColor: '#171616' }}
            text={'white'}
            className="card">
            <div classname="card head"><b>Total Valor de Ventas:</b></div>
            <div className="card body" style={{ color: '#ffffff', backgroundColor: '#171616' }}>{TotalValor}</div>
        </div>
    </div>
                 <div style={{ "width": "100%", "border-radius": "5px", 'height': '80%', 'margin': '5px', ' background-color': '#212121' }}>
                 <div className="card-header bg-warning">
                     <h3 className="card-title"><b>Cuadre Diario Cartera</b></h3>
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
        </div>
        </div>
    );
}

export default Compoentedata;