import React from 'react';
import { Label, GrupoInput, Input} from './styles';

//llamo los atributos a usar
const Inpunt = ({ estado, cambiarEstado, name, type, label, disabled,
  placeholder, id }) => {

  //cambio de estado para validar
  const onChange = (e) => {
    console.log(e.target.value);
    cambiarEstado({ campo: e.target.value });
  }


  //retornamos los recuros para exportar
  return (
    <div>
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
      <Label htmlFor={id} >{label}</Label>
      <GrupoInput classname="form-group row">
        <Input classname="form-control"
          id={id}
          disabled={disabled}
          name={name}
          type={type}
          placeholder={placeholder}
          value={estado.campo}
          onChange={onChange}
        />
      </GrupoInput>
    </div>
  );
}

//exportamos el archivo
export default Inpunt;