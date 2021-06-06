import React from "react";
import styled from '@emotion/styled'
import opcionCaja from "../images/opcion-caja.png"
import opcionTabla from "../images/opcion-tabla.png"
import ArrowLeft from "../images/decoration/curve-arrow-left.svg"
import ArrowRight from "../images/decoration/curve-arrow-right.svg"
import { Link } from "react-router-dom"

function Landing() {

    return (
        <>
            <LandingTitle>Crear Bloques Gutenberg <span style={{
                textDecoration: "line-through",
                textDecorationColor: "rgba(237, 66, 66, 0.85)",
                textDecorationThickness: "16.5px"
            }}>es dificil</span>
                <span style={{
                    display: "block",
                    color: "#34d399",
                    textAlign: "center"
                }}>nunca ha sido tan fácil</span>
            </LandingTitle>

            <LandingWrapper>
                <LandingSubtitle>Elige una plantilla y personaliza tu bloque gutenberg de Wordpress para SEO,
                nichos de Amazon, Adsense y todo tipo de webs sin el uso de plugins
                </LandingSubtitle>
                <ArrowText arrowLeft>Plantillas para Tablas</ArrowText>
                <DecorationArrow src={ArrowLeft} arrowLeft />
                <ArrowText arrowRight>Plantillas para Cajas</ArrowText>
                <DecorationArrow src={ArrowRight} arrowRight />
                <OptionWrapper>
                    <Link to={{
                        pathname: "/plantillas",
                        optionChosed: "box"
                    }}>
                        <ImageOption src={opcionCaja} />
                    </Link>
                    <Link to={{
                        pathname: "/plantillas",
                        optionChosed: "table"
                    }}>
                        <ImageOption src={opcionTabla} />
                    </Link>
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
    text-align: center;
    @media(max-width: 768px) {
        padding: 36px 8px 8px 8px;
        font-size: 33px;
        line-height: 1.3;
        word-spacing: 1px;
    }
`

const LandingWrapper = styled.div`
    width: 75%;
    height: 100%;
    margin-top: 20px;
    text-align: center;
    @media(max-width: 768px) {
        width: 95%;
        margin-top: 8px;
    }
`


const LandingSubtitle = styled.p`
    width: 650px;
    margin: 0 auto;
    font-size: 17px;
    @media(max-width: 768px) {
        padding: 8px;
        font-size: 14px;
        width: 100%;
    }
`

const OptionWrapper = styled.div`
    width: 100%; 
    display: flex;
    justify-content: space-evenly;   
    margin-top: 24px;
    @media(max-width: 768px) {
        flex-direction: column;
        margin-top: 8px;
        align-items: space-evenly;
    }
`

const ImageOption = styled.img`
    width: 280px;
    height: 100%;
    cursor: pointer;
    transition: 1s;
    &:hover {
        transform: scale(1.1);
    }
    @media(max-width: 768px) {
        width: 90%;
        height: 150px;
        margin-top: 35px;
        &:hover {
            transform: scale(1.05);
        }
    }
`

const DecorationArrow = styled.img`
    width: 50px;
    position: relative;
    top: ${props =>
        props.arrowLeft ? '70px' : '70px'};
    left: ${props =>
        props.arrowLeft ? '445px' : '-620px'};
    
    @media(max-width: 768px) {
        display: none;
    }
    
`

const ArrowText = styled.span`
    position: relative;
    top: ${props =>
        props.arrowLeft ? '10px' : '10px'};
    left: ${props =>
        props.arrowLeft ? '570px' : '-520px'};
    color: #34d399;
    text-align: center;
    font-family: 'Texturina', serif;
    font-size: 19px;
    @media(max-width: 768px) {
        position: absolute;
        top: ${props =>
            props.arrowLeft ? '600px' : '420px'};
        left: ${props =>
            props.arrowLeft ? '35px' : '35px'};
        font-size: 13px;
    }
`