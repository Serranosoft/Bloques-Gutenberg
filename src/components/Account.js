import React, { useContext, useState } from "react";
import styled from '@emotion/styled'
import { DBContext } from "./Firebase/UserDAO";
import { AuthContext } from './Firebase/AuthDAO';
import { Link, useHistory } from 'react-router-dom';

function Account() {

    const { userName } = useContext(DBContext);
    const history = useHistory();

    const initialState = {
        oldPassword: "",
        newPassword: ""
    }

    const [inputValues, setInputValues] = useState(initialState);
    const { UpdatePassword, signOut } = useContext(AuthContext);
    const {oldPassword, newPassword} = inputValues;

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputValues({ ...inputValues, [name]: value })
    }

    const onSubmit = event => {
        if (oldPassword !== newPassword) {
            UpdatePassword(oldPassword, newPassword)
                .then(authUser => {
                    history.push("/");
                    signOut();
                })
                .catch(error => {
                    console.log(error);
                    document.getElementById("error-msg").innerHTML = error
                });
        } else {
            document.getElementById("error-msg").innerHTML = "Las contraseñas no coinciden"
        }
        event.preventDefault();
    }

    return (
        <>
            <LandingTitle>Bienvenido/a  <span style={{
                color: "#34d399",
                textAlign: "center"
            }}> {userName}</span></LandingTitle>

            <LandingSubtitle>Accede a tus bloques guardados y modifica todos tus datos
                </LandingSubtitle>

            <AccountWrapper>
                <div style={{gridArea: "favorites"}}>
                    <BoxTitle>Mis favoritos</BoxTitle>
                    <LandingSubtitle>Accede a tus bloques guardados</LandingSubtitle>
                    <LinkWrapper to="cuenta/favoritos">
                        <Button>Favoritos</Button>
                    </LinkWrapper>
                </div>
                <form style={{gridArea: "changepassword"}}>
                    <BoxTitle>Cambiar contraseña</BoxTitle>
                    <Label>Contraseña actual
                        <Input 
                            type="password" 
                            name="oldPassword"
                            value={oldPassword} 
                            onChange={handleChange}/>
                    </Label>
                    <Label>Contraseña nueva
                        <Input 
                            type="password" 
                            name="newPassword"
                            value={newPassword} 
                            onChange={handleChange}
                        />
                    </Label>
                    <ErrorMessage id="error-msg"></ErrorMessage>
                    <Button onClick={onSubmit}>Cambiar contraseña</Button>
                </form>
                <div style={{gridArea: "temp1"}}>
                    <BoxTitle>En construcción</BoxTitle>
                </div>
                <div style={{gridArea: "temp2"}}>
                    <BoxTitle>En construcción</BoxTitle>
                </div>
                <div style={{gridArea: "temp3"}}>
                    <BoxTitle>En construcción</BoxTitle>
                </div>
            </AccountWrapper>
        </>
    )
}

export default Account

const LandingTitle = styled.h1`
    margin-top: 24px;
    font-size: 50px;
    font-family: 'Texturina', serif;
    color: white;
    word-spacing: -2px;
`

const LandingSubtitle = styled.p`
    width: 50%;
    margin: 0 auto;
    text-align: center;
    font-size: 17px;
`

const AccountWrapper = styled.div`
    width: 70%;
    display: grid;
    grid-template-areas:
    "favorites favorites changepassword changepassword"
    "temp1 temp1 temp2 temp3";
    gap: 40px;
    margin: 48px auto;
    & > div, & > form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background-color: #171e29;
        min-height: 250px;
    }
    & > div:nth-child(2) label:first-of-type {
        margin-top: 20px;
    }
`

const BoxTitle = styled.p`
    margin: 10px 0;
    font-size: 25px;
    color: white;
    text-align: center;
    font-weight: bold;
`

const LinkWrapper = styled(Link)`
    width: 100%;
    margin: 16px auto;
    text-align: center;
    `
    
    const Button = styled.button`
    width: 50%;
    padding: 10px 24px;
    margin: 16px auto;
    background: #1f6952;
    font-size: 17px;
    text-align: center;
    color: white;
    cursor: pointer;
    transition: 0.5s;
    border: 0;
    border-radius: 3px;
    &:hover {
        transform: scale(0.95);
    }
`

const Label = styled.label`
    width: 50%;
    display: block;
    color: white;
    font-size: 13px;
    margin: 8px 0;
    text-align: left;
`

const Input = styled.input`
    width: 100%;
    display: block;
    padding: 8px 24px;
    color: white;
    background-color: #171e29;
    border: 3px solid #373c40;
    outline: 0;
    font-size: 14px;
    &:focus {
        border: 2px solid white;
    }
`

const ErrorMessage = styled.p`
    font-size: 13px;
    color: red;
`