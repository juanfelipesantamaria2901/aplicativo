import React, { useEffect, useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'styled-components'
import './Cartera.css';
import Compoentedata from './Data';
import Inpunt from '../../Components/Inputs/Input';
import {
    Button, Navbar, Nav, NavDropdown, Container, Offcanvas, FormControl, Form, Modal
} from 'react-bootstrap';
import { Select, Label, Input2} from '../../Components/Inputs/styles';

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



const Cartera5 = () => {

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


    const [relacional, setData] = useState([]);
    const URL = 'http://192.168.10.247:3001/api/relacional'
    const showData = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      setData(data)
    }
    useEffect(() => {
      showData()
    }
      , [])


    const [Data2, setData2] = useState([]);
    const handleSubmit2 = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://192.168.10.247:3001/api/relacional/${TerceroMaster}`, {
            method: "GET"
        });
        const data = await res.json();
            setData2(data);
            Nombre2.campo = data.Nombre;
            Identificacion2.campo = data.Identificacion;
        console.log(data);
    }
    useEffect(() => {
        handleSubmit2();
    }
    , [])

        //Mehotd for sent data to API
        const handleSubmit = async (e) => {
            e.preventDefault();
            const res = await fetch(`http://192.168.10.247:3001/api/relacional/${TerceroMaster2}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    IdentificacionCliente,
                    NombreCliente,
                }),
            });
            const data = await res.json();
            console.log(data);
            if (data != null) {
                window.alert("¡Informacion Guardada exitosamente!");
            } else {
                window.alert("¡Error al guardar la informacion!");
            }
        }

    //Values of the form to be sent to the API
    const [TerceroMaster, cambiarTerceroMaster] = useState("")
    const TerceroMaster2 = TerceroMaster
//    const  TerceroMaster =  TerceroMaster2.campo
    const [Identificacion2, cambiarIdentificacion] = useState({ campo: '' });
    const  IdentificacionCliente =  Identificacion2.campo
    const [SetIdentificacion] = useState("")
    const [Nombre2, cambiarNombre] = useState({ campo: '' });
    const NombreCliente = Nombre2.campo
    const [SetNombre] = useState("")


    const [disable, setDisable] = React.useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                </section>
                <Compoentedata />
            </div>

            <Modal show={show} onHide={handleClose} animation={false} fullscreen={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Filtrados</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            {/* left column */}
                            <div className="col-md-12" style={{ "height": "950px" }}>
                                {/* general form elements disabled */}
                                <div className="card card-warning">
                                    <div className="card-header bg-warning">
                                        <h3 className="card-title"><b>Registro Relacional</b></h3>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body ">
                                        <form onSubmit={handleSubmit2}>
                                            <div className="row">
                                            <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <Label className="Select-FormasPago">Tercero Master</Label>
                                                        <Select name="FormasPago" id="FormasPago"
                                                            Classname="form-select"
                                                            showSearch
                                                            value={TerceroMaster}
                                                            onChange={(e) => cambiarTerceroMaster(e.target.value)}
                                                            required>
                                                            <option selected>Seleccione una opcion</option>
                                                            {relacional.map((item, index) => (
                                                                <option key={index} value={item.TerceroMaster}>{item.TerceroMaster}</option>
                                                            ))}
                                                        </Select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={Identificacion2}
                                                            cambiarEstado={cambiarIdentificacion}
                                                            name="Identificacion"
                                                            type="text"
                                                            label="Identificacion"
                                                            placeholder="Escribe..."
                                                            id="Identificacion"
                                                            value={Identificacion2}
                                                            onChange={(e) => SetIdentificacion(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <Inpunt
                                                            required
                                                            estado={Nombre2}
                                                            cambiarEstado={cambiarNombre}
                                                            name="Nombre"
                                                            type="text"
                                                            label="Nombre"
                                                            placeholder="Escribe..."
                                                            id="Nombre"
                                                            value={Nombre2}
                                                            onChange={(e) => SetNombre(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <Button variant='warning' style={{ 'color': 'black' }} type="submit" ><b>Buscar</b></Button>
                                            </div>
                                        </form></div>
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>
                        {/* /.card */}
                    </div>
                    {/*/.col */}
                </section>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" style={{ color: 'black' }} onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="warning" style={{ color: 'black' }} onClick={handleSubmit}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}

export default Cartera5;  
