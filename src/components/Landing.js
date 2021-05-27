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
`

const LandingSubtitle = styled.p`
    width: 650px;
    margin: 0 auto;
    text-align: center;
    font-size: 17px;
`

const LandingWrapper = styled.div`
    width: 75%;
    height: 100%;
    margin-top: 20px;
    text-align: center;
`

const OptionWrapper = styled.div`
    width: 100%; 
    display: flex;
    justify-content: space-evenly;   
    margin-top: 24px;
`

const ImageOption = styled.img`
    width: 280px;
    height: 100%;
    cursor: pointer;
    transition: 1s;
    &:hover {
        transform: scale(1.1);
    }
`

const DecorationArrow = styled.img`
    width: 50px;
    position: relative;
    top: ${props =>
        props.arrowLeft ? '70px' : '70px'};
    left: ${props =>
        props.arrowLeft ? '445px' : '-595px'};
    
`

const ArrowText = styled.span`
    position: relative;
    top: ${props =>
        props.arrowLeft ? '10px' : '10px'};
    left: ${props =>
        props.arrowLeft ? '555px' : '-505px'};
    color: #34d399;
    text-align: center;
    font-family: 'Texturina', serif;
`