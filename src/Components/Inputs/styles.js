import styled from 'styled-components'

const Label = styled.label`
background: -webkit-linear-gradient(25deg,#000000,#000000 60%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
dysplay: block;
position: relative;
margin: 3px;
font-weight: 700;
padding: 3px;
min-height: 40px;
border-radius: 15px;
border: 0px solid transparent;
@media (max-width: 800px){
    display: flex;
    color: black;
    width: 100%;
}`;

const Select = styled.select`
position: relative;
margin: 0px;
width: 100%;
border-radius: 3px;
height: 40px;
background : #fff;
boder-radius: 15px;
line-height: 35px;
padding: 0 10px 0 10px;
transition: .3s ease all;
border: 1px solid gray;
color: black;
resize: vertical;
@media (max-width: 800px){
    display: flex;
    color: black;
    width: 100%;
}`;

const GrupoInput = styled.div`
position: relative;
color: #000000;
background :transparent;
border: 0px solid transparent;
justify-content: center; 
z-index: 90;
`;


const Input = styled.input`
position: relative;
margin: 0px;
width: 100%;
border-radius: 3px;
height: 40px;
background : #fff;
boder-radius: 15px;
line-height: 35px;
padding: 0 10px 0 10px;
transition: .3s ease all;
border: 1px solid gray;
color: black;
resize: vertical;
@media (max-width: 800px){
    display: flex;
    color: black;
    width: 100%;
}`;

const Input2 = styled.input`
position: relative;
margin: 0px;
width: 15%;
border-radius: 3px;
height: 40px;
background : #fff;
boder-radius: 15px;
line-height: 35px;
padding: 0 10px 0 10px;
transition: .3s ease all;
border: 1px solid gray;
color: black;
resize: vertical;
@media (max-width: 800px){
    display: flex;
    color: black;
    width: 70%;
}`;

export { Label, GrupoInput, Input, Select, Input2 };