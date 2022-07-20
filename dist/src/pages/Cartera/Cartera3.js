import React, { Component , useEffect, useState} from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { Input2 } from '../../Components/Inputs/styles';
import 'styled-components' 
import './Cartera.css';
import Plano from './Plano';
import { CSVLink } from 'react-csv';
import {
    Button, Navbar, Nav, NavDropdown, Container, Offcanvas, FormControl, Form,
} from 'react-bootstrap';



const Data = () => {
    const [cartera, setData] = useState([]);
    const URL = 'http://192.168.0.19:3001/api/vistaplano'
    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setData(data)
    }
    useEffect(() => {
        showData()
    }, [])
    return (cartera)
}

const tablaPlano = [
    { IdSede:"2", Cliente: "705361607", Nombre: "Juan Felipe Ramirez", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Fecha: "2020-01-01",},
    { IdSede:"2", Cliente: "810361607", Nombre: "Liliana parra", Articulo: "DIESEL", Valorventa: "13,184", CantIdDocumento: "8", Fecha: "2020-02-01",},
    { IdSede:"2", Cliente: "850361607", Nombre: "Benito antonio martinez", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Fecha: "2020-03-01",},
    { IdSede:"3", Cliente: "900381507", Nombre: "Andres Parra sierra", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Fecha: "2020-04-01",},
    {IdSede:"3", Cliente: "707361807", Nombre: "Gustavo avila rodigrez", Articulo: "DIESE", Valorventa: "13,184", CantIdDocumento: "8", Fecha: "2020-05-01",},
    { IdSede:"3",Cliente: "900361607", Nombre: "Crinstian parra sierra", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Fecha: "2020-06-01",},
    {IdSede:"1", Cliente: "820381607", Nombre: "Jesus antonio martinez", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Fecha: "2020-07-01",},
    { IdSede:"1",Cliente: "705368808", Nombre: "Andres Jose Ramirez", Articulo: "DIESE", Valorventa: "13,184", CantIdDocumento: "8", Fecha: "2020-08-01",},
    {IdSede:"2", Cliente: "920561708", Nombre: "Manchester United FC", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Fecha: "2020-09-01",},
    {IdSede:"3", Cliente: "985361607", Nombre: "Jesus antonio martinez", Articulo: "DIESE", Valorventa: "13,184", CantIdDocumento: "8", Fecha: "2020-10-01",},
    { IdSede:"2",Cliente: "908361608", Nombre: "Gustavo avila rodigrez", Articulo: "DIESE", Valorventa: "13,184", CantIdDocumento: "8", Fecha: "2020-11-01",},
    { IdSede:"3",Cliente: "902361607", Nombre: "Juan Felipe Ramirez", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Fecha: "2020-12-01",},
    { IdSede:"3",Cliente: "920361607", Nombre: "Andres Jose Ramirez", Articulo: "DIESE", Valorventa: "13,184", CantIdDocumento: "8", Fecha: "2020-12-02",},
    { IdSede:"3",Cliente: "936361607", Nombre: "Gustavo avila rodigrez", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Fecha: "2020-12-03",},
    {IdSede:"1", Cliente: "982361607", Nombre: "Jesus antonio martinez", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Fecha: "2020-12-04",},
    { IdSede:"2",Cliente: "992361607", Nombre: "Juan Felipe Ramirez", Articulo: "DIESE", Valorventa: "13,184", CantIdDocumento: "8", Fecha: "2020-12-05",},
    {IdSede:"3", Cliente: "919361607", Nombre: "Crinstian parra sierra", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Fecha: "2020-12-06",},
    { IdSede:"1",Cliente: "956361607", Nombre: "Andres Jose Ramirez", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Fecha: "2020-12-07",},
    {IdSede:"2", Cliente: "902561607", Nombre: "Real Madrid CF", Articulo: "DIESE", Valorventa: "13,184", CantIdDocumento: "8", Fecha: "2020-12-08",},
    {IdSede:"2", Cliente: "914361607", Nombre: "Juan Felipe Ramirez", Articulo: "DIESE", Valorventa: "13,184", CantIdDocumento: "8", Fecha: "2020-12-09",},
];

const paginacionOpciones = {
    rowsPerPageText: 'Filas por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
}

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

class VistaPlano extends Component {
    state = {
        busqueda: '',
        planos: [],
        columnas: []
    } 



    onChange = async e => {
        e.persist();
        await this.setState({ busqueda: e.target.value });
        this.filtrarElementos();
    }

    asignarColumnas = () => {

        const columnas = [
            {
                name: 'Id Sede',
                selector: row => row.IdSede,
                sortable: true,
                center: true
            },
            {
                name: 'Identificacion Cliente',
                selector: row => row.Cliente,
                sortable: true,
                center: true
            },
            {
                name: 'Nombre Cliente',
                selector: row => row.Cliente,
                sortable: true,
                center: true
            },
            {
                name: 'Articulo',
                selector: row => row.Articulo,
                sortable: true,
                center: true
            },
            {
                name: 'Valor Venta',
                selector: row => row.Valorventa,
                sortable: true,
                center: true
            },
            {
                name: 'Cant Id Documento',
                selector: 'CantIdDocumento',
                sortable: true,
                center: true
            },
            {
                name: 'Fecha',
                selector: row => row.Fecha,
                sortable: true,
                center: true
            }
        ];

        this.setState({ columnas: columnas });
    }

    filtrarElementos = () => {
        var search = tablaPlano.filter(item => {
            if (item.Cliente.toString().includes(this.state.busqueda) ||
                item.Nombre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(this.state.busqueda) ||
                item.Articulo.toLowerCase().includes(this.state.busqueda) ||
                item.Valorventa.toString().includes(this.state.busqueda) ||
                item.CantIdDocumento.toString().includes(this.state.busqueda) ||
                item.Fecha.toString().includes(this.state.busqueda)
            ) { 
                return item;
            }
        });
        this.setState({ planos: search });
    }

    crearIndex = () => {
        var contador = 1;
        tablaPlano.map(elemento => {
            elemento["id"] = contador;
            contador++;
        })
    }

  componentDidMount() {
      this.crearIndex();
     this.asignarColumnas();
   this.setState({ planos: tablaPlano });
 }

    render() {
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
                                                <NavDropdown.Item  href="/DatosCartera">
                                                    Cartera
                                                </NavDropdown.Item>
                                            </li>
                                            <li>
                                                <NavDropdown.Item href="/Tabla">
                                                    Tabla Relacional
                                                </NavDropdown.Item>
                                            </li>
                                            <li>
                                                <NavDropdown.Item  active href="/Vista">
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
                <Plano/>
            </div>
        );
    }
}
export default VistaPlano;