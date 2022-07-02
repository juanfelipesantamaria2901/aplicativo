import React from "react";
import styled from "styled-components";
import {Button} from 'react-bootstrap';

const Input2 = styled.input.attrs(props => ({
  type: "text",
  size: props.small ? 5 : undefined
}))`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
`;

//const ClearButton = styled.button`
 // border-top-left-radius: 0;
 // border-bottom-left-radius: 0;
 // border-top-right-radius: 5px;
 // border-bottom-right-radius: 5px;
 // height: 34px;
 // width: 32px;
  //text-align: center;
  //display: flex;
 // align-items: center;
  //justify-content: center;
//`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <Input2
      id="search"
      type="text"
      placeholder="Buscar..."
      value={filterText}
      onChange={onFilter}
    />
    <Button variant="warning" style={{'color':'black'}} onClick={onClear}>X</Button>
  </>
);
const Filter = ( {onClear }) => (
  <>
    <Input2
      id="search"
      type="text"
      placeholder="Buscar..."
    />
    <Button variant="warning" style={{'color':'black'}} onClick={onClear}>X</Button>
  </>
);

export {FilterComponent, Filter };