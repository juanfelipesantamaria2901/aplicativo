import React, { useEffect, useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'styled-components'
import './Cartera.css';
import Compoentedata from './Data';
import Inpunt from '../../Components/Inputs/Input';
import { Input2 } from '../../Components/Inputs/styles';
import {
    Button, Navbar, Nav, NavDropdown, Container, Offcanvas, FormControl, Form, Modal
} from 'react-bootstrap';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
registerLocale("es", es);

//,[IdTurno]
//,[CodigoIsla]
//,[Vendedor]
//,[IdentificacionCliente]
//,[NombreCliente]
//,[IdDocumento]
//,[Articulo]
//,[VolumenVenta]
//,[ValorUnitario]
//,[ValorVenta]
//,[Placa]
//,[FormasPago]
//,[CodigoCara]
//,[CodigoManguera]
//,[PrefijoFactura]
//,[NumeroFactura]
//,[FechaZeta]
//,[Fecha]
//,[Hora]

//<DataTable
//bordered
//hover
//theme='custom-theme'
//responsive
//columns={columns}
//data={cartera}
//pagination
//paginationComponentOptions={paginacionOpciones}
//fixedHeader
//fixedHeaderScrollHeight="1000px"
//noDataComponent={<span>No se encontró ningún elemento</span>} >
//</DataTable>



const Cartera4 = () => {

    const [tablaUsuarios, setTablaUsuarios] = useState([]);
    const [tablaUsuarios2, setTablaUsuarios2] = useState([]);
    const [tablaUsuarios3, setTablaUsuarios3] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [busqueda2, setBusqueda2] = useState("");
    const [date, setDate] = useState(new Date());


    const handleChange = e => {
        setBusqueda(e.target.value)
        filtrar(e.target.value);
    }

    const handleChange2 = e => {
        setBusqueda2(e.target.value)
        filtrar2(e.target.value);
    }


    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
            if (elemento.FechaZeta.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
        setData(resultadosBusqueda);
        setTablaUsuarios2(resultadosBusqueda);
    }

    const filtrar2 = (terminoBusqueda) => {
        var resultadosBusqueda2 = tablaUsuarios2.filter((elemento) => {
            if (elemento.Fecha.toString().toUpperCase().includes(terminoBusqueda.toUpperCase())
                || elemento.FechaZeta.toString().toUpperCase().includes(terminoBusqueda.toUpperCase())
                || elemento.Hora.toString().toUpperCase().includes(terminoBusqueda.toUpperCase())
            ) {
                return elemento;
            }
        });
        setData(resultadosBusqueda2);
        setTablaUsuarios3(resultadosBusqueda2);
    }


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



    const [disable, setDisable] = React.useState(false);
    const [SetFechaZeta] = useState("")
    const [FechaZeta2, cambiarFechaZeta] = useState({ campo: '' });
    const FechaZeta = FechaZeta2.campo
    const [SetFechaZeta2] = useState("")
    const [FechaZeta3, cambiarFechaZeta2] = useState({ campo: '' });
    const FechaZeta4 = FechaZeta3.campo

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [TotalVolumen, setTotalVolumen] = useState(0);
    const [TotalValor, setTotalValor] = useState(0);

    const sumar = () => {
        var suma = 0;
        var suma2 = 0;
        for (var i = 0; i < cartera.length; i++) {
            suma += cartera[i].VolumenVenta;
            suma2 += cartera[i].ValorVenta;
        }
        let totalVolumen = suma;
        let totalValor = suma2;
        setTotalVolumen(totalVolumen);
        setTotalValor(totalValor);
    }
    useEffect(() => {
        sumar()
    })


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

    const handleCalendarClose = () => console.log("Calendar closed");
    const handleCalendarOpen = () => console.log("Calendar opened");

    const subHeaderComponentMemo = React.useMemo(() => {

        return (
            <div style={{ width: '100%' }}>
                <Input2
                    type="text"
                    placeholder="Buscar Fecha Inicio"
                    className="textField"
                    name="busqueda"
                    value={busqueda}
                    onChange={handleChange} />
                <Input2
                    type="text"
                    placeholder="Buscar Fecha Fin"
                    className="textField"
                    name="busqueda"
                    value={busqueda2}
                    onChange={handleChange2} />
            </div>
        );
    }, [busqueda, handleChange, busqueda2, handleChange2]);

    return (
        <div>
            <header>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossorigin="anonymous"
                />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.11.0/mdb.min.css" rel="stylesheet" />
                <script src="https://cdn.datatables.net/v/bs4-4.1.1/dt-1.10.18/datatables.min.js"></script>

                <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
                <script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>
                <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
                <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
                <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
                <script src="http://cnd.jsdelivr.net/momentjs/latest/moment.min.js"></script>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.11.0/mdb.min.js"></script>

                {['sm'].map((expand) => (
                    <Navbar key={expand} bg="dark" variant="dark" expand={expand} className="mb-3">
                        <Container fluid>
                            <Navbar.Brand href="#"><i class="fa-solid fa-gas-pump"></i>&ensp;<b>Aplicativo Rivera</b></Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Aplicativo Rivera
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link href="/Dashboard"  >Dashboard</Nav.Link>
                                        <NavDropdown
                                            title="Cartera"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                            <li>
                                                <NavDropdown.Item active href="/DatosCartera">
                                                    Cartera
                                                </NavDropdown.Item>
                                            </li>
                                            <li>
                                                <NavDropdown.Item href="/Tabla">
                                                    Tabla Relacional
                                                </NavDropdown.Item>
                                            </li>
                                            <li>
                                                <NavDropdown.Item href="/Vista">
                                                    Vista Plano
                                                </NavDropdown.Item>
                                            </li>
                                        </NavDropdown>
                                        <Nav.Link href="/Inventario">Control Mecanicos Inventario</Nav.Link>
                                        <Nav.Link href="/Ingreso">Ingreso</Nav.Link>
                                    </Nav>
                                    <Nav
                                        class="dropdown-toggle d-flex align-items-center hidden-arrow"
                                        href="#"
                                        id="navbarDropdownMenuAvatar"
                                        role="button"
                                        data-mdb-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                            class="rounded-circle"
                                            height="25"
                                            alt="Black and White Portrait of a Man"
                                            loading="lazy"
                                        />
                                    </Nav>
                                    <NavDropdown
                                        class="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="navbarDropdownMenuAvatar">
                                        <li>
                                            <NavDropdown.Item class="dropdown-item" href="/">Salir</NavDropdown.Item>
                                        </li>
                                    </NavDropdown>
                                    <Form className="d-flex">
                                        <FormControl
                                            type="search"
                                            placeholder="Buscar"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button variant='warning' style={{ 'color': 'black' }}>Buscar</Button>
                                    </Form>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </header>
            <div className="content">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h3>Cartera</h3>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item active">Cartera</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <Button variant='warning' style={{ 'color': 'black' }} disabled={disable} href={"/Registro_Cartera"} >Agregar</Button>
                    <Button variant='warning' style={{ 'color': 'black' }} disabled={disable} href={"/Actualizar"} >Actualizar</Button>
                    <Button variant='warning' style={{ 'color': 'black' }} disabled={disable} onClick={handleShow} >Filtrar</Button>
                    <Button variant='warning' style={{ 'color': 'black' }} disabled={disable} onClick={() => setDisable(true)}>Confirmar</Button>
                    <Button variant='warning' style={{ 'color': 'black' }} onClick={() => setDisable(false)}>Cancelar</Button>
                </section>
                <Compoentedata />
            </div>

            <Modal show={show} onHide={handleClose} animation={false} fullscreen={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Filtrados</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div bg={'dark'} style={{ width: '250px', height: '60px', margin: '25px', color: '#f8a51e', backgroundColor: '#171616' }}
                            text={'white'}
                            className="card">
                            <div classname="card head"><b>Transacciones Subtotales:</b></div>
                            <div className="card body" style={{ color: '#ffffff', backgroundColor: '#171616' }}>{cartera.length}</div>
                        </div>
                        <div bg={'dark'} style={{ width: '250px', height: '60px', margin: '25px', color: '#f8a51e', backgroundColor: '#171616' }}
                            text={'white'}
                            className="card">
                            <div classname="card head"> <b>Subtotal Volumen Ventas: </b></div>
                            <div className="card body" style={{ color: '#ffffff', backgroundColor: '#171616' }}>{TotalVolumen}</div>
                        </div>
                        <div bg={'dark'} style={{ width: '250px', height: '60px', margin: '25px', color: '#f8a51e', backgroundColor: '#171616' }}
                            text={'white'}
                            className="card">
                            <div classname="card head"><b>Subtotal Valor de Ventas:</b></div>
                            <div className="card body" style={{ color: '#ffffff', backgroundColor: '#171616' }}>{TotalValor}</div>
                        </div>
                    </div>
                    <DataTable
                        bordered
                        hover
                        columns={columns}
                        theme="custom-theme"
                        data={cartera}
                        pagination
                        responsive={true}
                        noDataComponent={<span>No se encontró ningún elemento</span>}
                        subHeader
                        subHeaderComponent={subHeaderComponentMemo}
                        selectableRows
                        persistTableHead
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" style={{ color: 'black' }} onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="warning" style={{ color: 'black' }} onClick={handleClose}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}

export default Cartera4;  
