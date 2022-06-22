import React, { useEffect, useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
    Button, Navbar, Nav, NavDropdown, Container, Offcanvas, FormControl, Form,
    Card, Table,
} from 'react-bootstrap';
import { data } from '../Dashboard/Dashboard';

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



const paginacionOpciones = {
    rowsPerPageText: 'Filas por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
}


const Cartera4 = () => {
    const [cartera, setData] = useState([]);

    const URL = 'http://192.168.0.19:3001/api/cartera'

    const showData = async () => {

        const response = await fetch(URL)

        const data = await response.json()

        setData(data)

    }
    useEffect(() => {
        showData()
    }
        , [])
   
        const columns = [{
            name: 'Sede',
            selector: row => row.IdSede,
          },
          {
            name: 'Turno',
            selector: row => row.IdTurno,
          },
          {
            name: 'Isla',
            selector: row => row.CodigoIsla,
          },
          {
            name: 'Vendedor',
            selector: row => row.Vendedor,
          },
          {
            name: 'Identificacion Cliente',
            selector: row => row.IdentificacionCliente,
          },
          {
            name: 'Cliente',
            selector: row => row.NombreCliente,
          },
          {
            name: 'Id Doc',
            selector: row => row.IdDocumento,
          },
          {
            name: 'Articulo',
            selector: row => row.Articulo,
          },
          {
            name: 'Volumen',
            selector: row => row.VolumenVenta,
          },
          {
            name: 'Valor Unitario',
            selector: row => row.ValorUnitario,
          },
          {
            name: 'Total',
            selector: row => row.ValorVenta,
          },
          {
            name: 'Placa',
            selector: row => row.Placa,
          },
          {
            name: 'Forma Pago',
            selector: row => row.FormasPago,
          },
          {
            name: 'Cara',
            selector: row => row.CodigoCara,
          },
          {
            name: 'Mangueral',
            selector: row => row.CodigoManguera,
          },
          {
            name: 'Factura',
            selector: row => row.PrefijoFactura,
          },
          {
            name: 'NumFactura',
            selector: row => row.NumeroFactura,
          },
          {
            name: 'Fecha Zeta',
            selector: row => row.FechaZeta,
          },
          {
            name: 'Fecha',
            selector: row => row.Fecha,
          },
          {
            name: 'Hora',
            selector: row => row.Hora,
          },
          ]


    createTheme('custom-theme', {
        text: {
            primary: '#FFFFFF',
            secondary: '#FFFFFF',
        },
        background: {
            default: '#262625',
        },
        context: {
            background: '#262625',
            text: '#FFFFFF',
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
                <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
                <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
                <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
                <script src="http://cnd.jsdelivr.net/momentjs/latest/moment.min.js"></script>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.11.0/mdb.min.js"></script>

                {['sm'].map((expand) => (
                    <Navbar key={expand} bg="dark" variant="dark" expand={expand} className="mb-3">
                        <Container fluid>
                            <Navbar.Brand href="#"><i class="icon fa fa-eye"></i>&ensp;<b>Aplicativo Rivera</b></Navbar.Brand>
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
                                                    <NavDropdown.Item href="/Cartera" >Cartera</NavDropdown.Item>
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
                                                <li>
                                                    <NavDropdown.Item  active href="/DatosCartera">
                                                        Prueba Datos
                                                    </NavDropdown.Item>
                                                </li>
                                            </NavDropdown>
                                        <Nav.Link href="/Inventario">Control Mecanicos Inventario</Nav.Link>
                                        <Nav.Link href="/Ingreso">Ingreso</Nav.Link>
                                    </Nav>
                                    <Nav
                                        class=" dropdown-toggle d-flex align-items-center hidden-arrow"
                                        href="#"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-mdb-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i class="fas fa-bell"></i>
                                        <span class="badge rounded-pill badge-notification bg-danger">1</span>
                                        <NavDropdown
                                            class="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="navbarDropdownMenuAvatar">
                                            <li>
                                                <NavDropdown.Item class="dropdown-item" href="#">Notificaciones</NavDropdown.Item>
                                            </li>
                                            <li>
                                                <NavDropdown.Item class="dropdown-item" href="#">Actualizaciones</NavDropdown.Item>
                                            </li>
                                            <li>
                                                <NavDropdown.Item class="dropdown-item" href="#">Sobre</NavDropdown.Item>
                                            </li>
                                        </NavDropdown>
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
                                            <NavDropdown.Item class="dropdown-item" href="#">Perfil</NavDropdown.Item>
                                        </li>
                                        <li>
                                            <NavDropdown.Item class="dropdown-item" href="#">Configuracion</NavDropdown.Item>
                                        </li>
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
                    <Button variant='warning' style={{ 'color': 'black' }} href={"/Registro_Cartera"} >Agregar</Button>
                    <Button variant='warning' style={{ 'color': 'black' }}>Confirmar</Button>
                </section>
                <div className="row">
                </div>
                <Card style={{ "width": "100%", "border-radius": "5px", 'height': '80%', 'margin': '5px', ' background-color': '#212121' }}>
                    <div className="card-header bg-warning">
                        <h3 className="card-title"><b>Cuadre Diario Cartera</b></h3>
                    </div>
                    <div style={{ 'border-radiusr': '5px', ' background-color': '#212121', 'margin-right':'8px'}}>
                        <DataTable
                            bordered
                            hover
                            theme='custom-theme'
                            responsive
                            columns={columns}
                            data={cartera}
                            pagination
                            paginationComponentOptions={paginacionOpciones}
                            fixedHeader
                            fixedHeaderScrollHeight="1000px"
                            noDataComponent={<span>No se encontró ningún elemento</span>}>
                        </DataTable>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Cartera4;  
