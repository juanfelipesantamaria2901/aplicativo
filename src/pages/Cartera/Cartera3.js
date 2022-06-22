import React, { Component }  from 'react';
import DataTable, {createTheme} from 'react-data-table-component';
import { Input2 } from '../../Components/Inputs/styles';
import {CSVLink} from 'react-csv'; 
import {
    Button, Navbar, Nav,  NavDropdown,  Container, Offcanvas, FormControl, Form,
    Card,
} from 'react-bootstrap';
import { useState } from 'react';


const tablaPlano = [
    { Cliente: "705361607", Nombre: "Juan Felipe Ramirez", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Acciones: <Button variant="warning" style={{ 'color': 'black' }}>Editar</Button> },
    { Cliente: "810361607", Nombre: "Liliana parra", Articulo: "DIESEL", Valorventa: "13,184", CantIdDocumento: "8", Acciones: <Button variant="warning" style={{ 'color': 'black' }}>Editar</Button> },
    { Cliente: "850361607", Nombre: "Benito antonio martinez", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Acciones: <Button variant="warning" style={{ 'color': 'black' }}>Editar</Button> },
    { Cliente: "900381507", Nombre: "Andres Parra sierra", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Acciones: <Button variant="warning" style={{ 'color': 'black' }}>Editar</Button> },
    { Cliente: "707361807", Nombre: "Gustavo avila rodigrez", Articulo: "DIESE", Valorventa: "13,184", CantIdDocumento: "8", Acciones: <Button variant="warning" style={{ 'color': 'black' }}>Editar</Button> },
    { Cliente: "900361607", Nombre: "Crinstian parra sierra", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Acciones: <Button variant="warning" style={{ 'color': 'black' }}>Editar</Button> },
    { Cliente: "820381607", Nombre: "Jesus antonio martinez", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Acciones: <Button variant="warning" style={{ 'color': 'black' }}>Editar</Button> },
    { Cliente: "705368808", Nombre: "Andres Jose Ramirez", Articulo: "DIESE", Valorventa: "13,184", CantIdDocumento: "8", Acciones: <Button variant="warning" style={{ 'color': 'black' }}>Editar</Button>, },
    { Cliente: "920561708", Nombre: "Manchester United FC", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Acciones: <Button variant="warning" style={{ 'color': 'black' }}>Editar</Button> },
    { Cliente: "985361607", Nombre: "Jesus antonio martinez", Articulo: "DIESE", Valorventa: "13,184", CantIdDocumento: "8", Acciones: <Button variant="warning" style={{ 'color': 'black' }}>Editar</Button> },
    { Cliente: "908361608", Nombre: "Gustavo avila rodigrez", Articulo: "DIESE", Valorventa: "13,184", CantIdDocumento: "8", Acciones: <Button variant="warning" style={{ 'color': 'black' }}>Editar</Button> },
    { Cliente: "902361607", Nombre: "Juan Felipe Ramirez", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Acciones: <Button variant="warning" style={{ 'color': 'black' }}>Editar</Button> },
    { Cliente: "920361607", Nombre: "Andres Jose Ramirez", Articulo: "DIESE", Valorventa: "13,184", CantIdDocumento: "8", Acciones: <Button variant="warning" style={{ 'color': 'black' }}> Editar</Button> },
    { Cliente: "936361607", Nombre: "Gustavo avila rodigrez", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Acciones: <Button variant="warning" style={{ 'color': 'black' }}>Editar</Button> },
    { Cliente: "982361607", Nombre: "Jesus antonio martinez", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Acciones: <Button variant="warning" style={{ 'color': 'black' }}>Editar</Button> },
    { Cliente: "992361607", Nombre: "Juan Felipe Ramirez", Articulo: "DIESE", Valorventa: "13,184", CantIdDocumento: "8", Acciones: <Button variant="warning" style={{ 'color': 'black' }}>Editar</Button> },
    { Cliente: "919361607", Nombre: "Crinstian parra sierra", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Acciones: <Button variant="warning" style={{ 'color': 'black' }}>Editar</Button> },
    { Cliente: "956361607", Nombre: "Andres Jose Ramirez", Articulo: "GASOLINA CORRIENTE", Valorventa: "13,184", CantIdDocumento: "8", Acciones: <Button variant="warning" style={{ 'color': 'black' }}>Editar</Button> },
    { Cliente: "902561607", Nombre: "Real Madrid CF", Articulo: "DIESE", Valorventa: "13,184", CantIdDocumento: "8", Acciones: <Button variant="warning" style={{ 'color': 'black' }}>Editar</Button> },
    { Cliente: "914361607", Nombre: "Juan Felipe Ramirez", Articulo: "DIESE", Valorventa: "13,184", CantIdDocumento: "8", Acciones: <Button variant="warning" style={{ 'color': 'black' }}>Editar</Button> },
];

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
  },'dark' );

const paginacionOpciones = {
    rowsPerPageText: 'Filas por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
}

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
                selector: 'id',
                sortable: true,
                center: true
            },
            {
                name: 'Identificacion Cliente',
                selector: 'Cliente',
                sortable: true,
                center: true
            },
            {
                name: 'Nombre Cliente',
                selector: 'Nombre',
                sortable: true,
                center: true
            },
            {
                name: 'Articulo',
                selector: 'Articulo',
                sortable: true,
                center: true
            },
            {
                name: 'Valor Venta',
                selector: 'Valorventa',
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
                name: 'Acciones',
                selector: 'Acciones',
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
                item.CantIdDocumento.toString().includes(this.state.busqueda)
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
                                                    <NavDropdown.Item href="/Cartera">Cartera</NavDropdown.Item>
                                                </li>
                                                <li>
                                                    <NavDropdown.Item href="/Tabla">
                                                        Tabla Relacional
                                                    </NavDropdown.Item>
                                                </li>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="/Vista" active>
                                                    Vista Plano
                                                </NavDropdown.Item>
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
                                    <h3>Vista Plano Cartera</h3>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item active">Vista Plano Cartera</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                       <CSVLink data={tablaPlano} filename={"Exportacion.csv"}> <Button variant='warning' style={{ 'color': 'black' }}>Exportar</Button></CSVLink>
                    </section>
                    <div className="row">
                    </div>
                    <Card style={{ "width": "100%", "border-radius": "5px", 'height': '80%', 'margin': '5px', ' background-color': '#212121' }}>
                            <div className="card-header bg-warning">
                                <h3 className="card-title"><b>Vista Plano Cartera</b></h3>
                            </div>
                        <div style={{ "border-radius": "5px", 'margin': '5px', ' background-color': '#212121' }}>
                            <div className="table-responsive">
                                <div className="barraBusqueda">
                                  <Input2
                                        type="text"
                                        placeholder="Buscar"
                                        className="textField"
                                        name="busqueda"
                                        value={this.state.busqueda}
                                        onChange={this.onChange}
                                    /> 
                                </div>
                                <DataTable
                                    striped
                                    bordered
                                    hover
                                    columns={this.state.columnas}
                                    responsive
                                    data={this.state.planos}
                                    pagination
                                    paginationComponentOptions={paginacionOpciones}
                                    fixedHeader
                                    fixedHeaderScrollHeight="600px"
                                    noDataComponent={<span>No se encontró ningún elemento</span>}
                                />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}
export default VistaPlano;