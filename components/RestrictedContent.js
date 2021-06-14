import React from "react";
import styled from "@emotion/styled"
import Head from 'next/head'
import Link from "next/link"

function RestrictedContent() {

    return (
        <>
            <Head>
                <title>Este contenido es exclusivo para usuarios registrados.</title>
                <meta name="description" content="Este contenido es exclusivo para usuarios registrados en la web de bloques-gutenberg.com." />
            </Head>
            <LandingTitle>Contenido restringido para usuarios  <span style={{
                color: "#34d399",
                textAlign: "center"
            }}>registrados</span></LandingTitle>

            <LandingInfo>
                <LandingInfoTitle><Link href="/iniciar-sesion">Inicia sesión</Link> o <Link href="/registro">registrate</Link> en la web para poder acceder a esta sección</LandingInfoTitle>
                <LandingInfoWrapper>
                    <LandingInfoBox>
                        <LandingInfoBoxTitle>Desbloquea todas las plantillas</LandingInfoBoxTitle>
                        <LandingInfoBoxDescr>Consigue acceso ilimitado a todas las cajas y tablas de la web registrándote gratis.</LandingInfoBoxDescr>
                    </LandingInfoBox>
                    <LandingInfoBox>
                        <LandingInfoBoxTitle>Acceso a tus bloques favoritos</LandingInfoBoxTitle>
                        <LandingInfoBoxDescr>Guarda los bloques que hayas creado y personalizado en tu cuenta.</LandingInfoBoxDescr>
                    </LandingInfoBox>
                </LandingInfoWrapper>
            </LandingInfo>
        </>
    )

}

export default RestrictedContent;

const LandingTitle = styled.h1`
    margin: 16px 0;
    font-size: 48px;
    font-family: 'Texturina', serif;
    color: white;
    word-spacing: -1px;
    @media(max-width: 768px) {
        padding: 36px 8px 8px 8px;
        font-size: 33px;
        line-height: 1.3;
        word-spacing: 1px;
        text-align: center;
    }
`

const LandingInfo = styled.div`
    width: 75%;
    margin: 8px auto;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    @media(max-width: 768px) {
      width: 95%;
      margin-bottom: 40px;
    }
`

const LandingInfoTitle = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin: 8px 0;
    word-spacing: -1.0px;
    letter-spacing: -0.5px;
    & > a {
        color: #34d399;
        text-decoration: none;
    }

    & > a:hover {
        text-decoration: underline;
    }
    @media(max-width: 768px) {
      font-size: 17px;
    }
`

const LandingInfoWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 24px 0;
    @media(max-width: 768px) {
      flex-direction: column;
    }
`

const LandingInfoBox = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    @media(max-width: 768px) {
      width: 100% !important;
    }
`

const LandingInfoBoxTitle = styled.h2`
    font-size: 28px;
    font-weight: bold;
    margin: 16px 0;
    @media(max-width: 768px) {
      font-size: 22px;
    }
`

const LandingInfoBoxDescr = styled.span`
    font-size: 15px;
    color: lightgray;
    font-weight: 300;
    margin: 8px auto;
    & > a {
      color: #34d399;
    }
    @media(max-width: 768px) {
      font-size: 13.5px;
    }
`