import React, { useEffect, useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  Button, Navbar, Nav, NavDropdown, Container, Offcanvas, FormControl, Form, Card,
} from 'react-bootstrap';

const paginacionOpciones = {
  rowsPerPageText: 'Filas por Página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos',
}

const Tabla = () => {


  const [relacional, setData] = useState([]);

  const URL = 'http://192.168.0.19:3001/api/relacional'

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
    name: 'Identificacion Master',
    selector: row => row.IdentificacionMaster,
  },
  {
    name: 'Tercero Master',
    selector: row => row.TerceroMaster,
  },
  {
    name: 'Identificacion',
    selector: row => row.Identificacion,
  },
  {
    name: 'Nombre',
    selector: row => row.Nombre,
  },
  ]

  createTheme('custom-theme', {
    text: {
      primary: '#FFFFFF',
      secondary: '#f8a51e',
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
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.11.0/mdb.min.css" rel="stylesheet" />
        <link rel="stylesheet"
          href="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/docs-app/css/dist/mdb5/plugins/table-editor.min.css" />
        <link rel="stylesheet"
          href="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/docs-app/css/dist/mdb5/standard/modules/b4bca5d779777cff9d5c51553952a0a1.min.css" />
        <link rel="stylesheet" id="roboto-subset.css-css"
          href="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/docs-app/css/mdb5/fonts/roboto-subset.css?ver=3.9.0-update.5"
          type="text/css" media="all" />


        <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>

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
                        <NavDropdown.Item  active href="/Tabla">
                          Tabla Relacional
                        </NavDropdown.Item>
                      </li>
                      <li>
                        <NavDropdown.Item href="/Vista">
                          Vista Plano
                        </NavDropdown.Item>
                      </li>
                      <li>
                        <NavDropdown.Item href="/DatosCartera">
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
                <h3>Tabla Relacional</h3>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active">Tabla Relacional</li>
                </ol>
              </div>
            </div>
          </div>
          <Button variant='warning' style={{ 'color': 'black' }} href="/Registro_Relacional">Agregar</Button>
          <Button variant='warning' style={{ 'color': 'black' }}>Confirmar</Button>
        </section>
        <div className="row">
        </div>
        <Card style={{ "width": "100%", "border-radius": "5px", 'height': '80%', 'margin': '5px', ' background-color': '#212121' }}>
          <div className="card-header bg-warning">
            <h3 className="card-title"><b>Tabla Relacional</b></h3>
          </div>
        </Card>
      </div>
      <div style={{ "border-radius": "5px", 'margin': '5px', ' background-color': '#212121' }}>
        <DataTable
          bordered
          hover
          theme='custom-theme'
          columns={columns}
          responsive
          data={relacional}
          pagination
          paginationComponentOptions={paginacionOpciones}
          fixedHeader
          fixedHeaderScrollHeight="600px"
          noDataComponent={<span>No se encontró ningún elemento</span>}
        />
      </div>
    </div>
  );
}

export default Tabla;