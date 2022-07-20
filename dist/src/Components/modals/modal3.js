import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    Button, Nav,
} from 'react-bootstrap';
import Inpunt from '../Inputs/Input';
import { Select, Label } from '../../Components/Inputs/styles';

// API back-end
//const API = process.env.REACT_APP_API;

//Componente Modal
const Modal3 = () => {

    //Mehotd for sent data to API
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://192.168.0.19:3001/api/update/${TerceroMaster}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Identificacion,
                Nombre,
            }),
        });
        const data = await res.json();
        console.log(data);
        if (data != null) {
            window.alert("¡Informacion Guardada exitosamente!");
        }else{
            window.alert("¡Error al guardar la informacion!");
        }
    }
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

    //Values of the form to be sent to the API
    const [TerceroMaster, cambiarTerceroMaster] = useState("")
//    const  TerceroMaster =  TerceroMaster2.campo
    const [Identificacion2, cambiarIdentificacion] = useState({ campo: '' });
    const  Identificacion =  Identificacion2.campo
    const [SetIdentificacion] = useState("")
    const [Nombre2, cambiarNombre] = useState({ campo: '' });
    const Nombre = Nombre2.campo
    const [SetNombre] = useState("")

    //Render of the component
    return (
        <div className='content'>
            <div className="content-wrapper" style={{ "min-height": "1050px" }}>
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
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1> Registro Relacional</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-md-right">
                                    <Nav.Link className="breadcrumb-item" href="/Tabla">Cerrar</Nav.Link>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Main content */}
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
                                        <form onSubmit={handleSubmit}>
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
                                                <Button variant='warning' style={{ 'color': 'black' }} type="submit" ><b>Relacionar</b></Button>
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
            </div>
        </div>
    );
};
export default Modal3;