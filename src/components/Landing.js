import React from "react";
import styled from '@emotion/styled'
import opcionCaja from "../images/opcion-caja.png"
import opcionTabla from "../images/opcion-tabla.png"
import { Link } from "react-router-dom"

function Landing() {

    return (
        <>
            <LandingTitle>Crear Bloques Gutenberg <span style={{ textDecoration: "line-through", textDecorationColor: "red", textDecorationThickness: "16.5px" }}>es dificil </span> <span style={{ display: "block", color: "#34d399", textAlign: "center" }}>nunca ha sido tan fácil</span></LandingTitle>
            <LandingWrapper>
                <p>Elige un tipo de bloque</p>
                <OptionWrapper>
                    <Link to="/plantillas">
                        <Image src={opcionCaja} />
                    </Link>
                    <Image src={opcionTabla} />
                </OptionWrapper>
            </LandingWrapper>
        </>
    )
}

export default Landing;

const LandingTitle = styled.h1`
    padding-top: 36px;
    font-size: 60px;
    font-family: 'Texturina', serif;
    color: white;
    line-height: 1.1;
    word-spacing: -5px;
`

const LandingWrapper = styled.div`
    width: 75%;
    height: 100%;
    margin-top: 40px;
    text-align: center;
`

const OptionWrapper = styled.div`
    width: 100%; 
    display: flex;
    justify-content: space-evenly;   
    margin-top: 24px;
`

const Image = styled.img`
    width: 280px;
    height: 100%;
    cursor: pointer;
    transition: 1s;
    &:hover {
        transform: scale(1.1);
    }
`