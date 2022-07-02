import React, { useEffect, useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'styled-components'
import './Cartera.css';
import {FilterComponent} from './Filter';


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
    }
    useEffect(() => {
        showData()
    }, [])

    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = cartera.filter(
        item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    );

    const columns = [{
        name: 'Sede',
        selector: row => row.IdSede,
        sortable: true,
    },
    {
        name: 'Turno',
        selector: row => row.IdTurno,
        sortable: true,
    },
    {
        name: 'Isla',
        selector: row => row.CodigoIsla,
        sortable: true,
    },
    {
        name: 'Vendedor',
        selector: row => row.NombreVendedor,
        sortable: true,
    },
    {
        name: 'Identificacion Cliente',
        selector: row => row.IdentificacionCliente,
        sortable: true,
    },
    {
        name: 'Cliente',
        selector: row => row.NombreCliente,
        sortable: true,
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
        name: 'Kilometraje',
        selector: row => row.Kilometraje,
        sortable: true,
    },
    {
        name: 'Rom',
        selector: row => row.Rom,
        sortable: true,
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
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)}  onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);

    return (
        <DataTable
            bordered
            hover
            columns={columns}
            theme="custom-theme"
            data={cartera}
            pagination
            responsive={true}
            paginationResetDefaultPage={resetPaginationToggle}
            paginationComponentOptions={paginacionOpciones}
            noDataComponent={<span>No se encontró ningún elemento</span>} 
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            selectableRows
            persistTableHead
        />
    );
}

export default Compoentedata;