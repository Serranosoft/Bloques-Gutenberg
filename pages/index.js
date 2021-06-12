import { getHowToPost } from '../lib/api'
import React from "react";
import styled from '@emotion/styled'
import Link from "next/link"
import Head from 'next/head'

export async function getStaticProps() {
  const data = await getHowToPost();
  return {
    props: { data }
  }
}

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Crea BLOQUES GUTENBERG para Wordpress: SEO amistoso, rápido y sin plugins</title>
        <meta name="description" content="Crea bloques gutenberg para wordpress en nichos de SEO en Adsense o Amazon sin saber programar y sin plugins. SEO amistoso, rápido y adaptables a móvil." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingTitle>Crear Bloques en Wordpress <span style={{
        textDecoration: "line-through",
        textDecorationColor: "rgba(237, 66, 66, 0.92)",
        textDecorationThickness: "19px"
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
        <ArrowText arrowLeft>Plantillas para Tablas <span>(Recomendado para Amazon)</span></ArrowText>
        <DecorationArrow
          src="/images/decoration/curve-arrow-left.svg"
          arrowLeft
        />
        <ArrowText arrowRight>Plantillas para Cajas <span>(Recomendado para Adsense)</span></ArrowText>
        <DecorationArrow
          src="/images/decoration/curve-arrow-right.svg"
          arrowRight />
        <OptionWrapper>
          <Link href="/bloques"
            href={{
              pathname: '/bloques',
              query: { optionChosed: "box" },
            }}
            as="/bloques"
          >
            <ImageOption src="/images/opcion-caja.png" />
          </Link>
          <Link
            href={{
              pathname: '/bloques',
              query: { optionChosed: "table" },
            }}
            as="/bloques"
          >
            <ImageOption src="/images/opcion-tabla.png" />
          </Link>
        </OptionWrapper>
      </LandingWrapper>
      <Wave src="/images/decoration/wave.svg/" />
      <LandingContent>
        <LandingInfo>
          <LandingInfoTitle>Decora tu web, en segundos</LandingInfoTitle>
          <LandingInfoWrapper>
            <LandingInfoBox>
              <LandingInfoBoxTitle>Cajas Informativas</LandingInfoBoxTitle>
              <LandingInfoBoxDescr>Construye tus artículos, plantillas o páginas con elegantes y personalizables cajas con el objetivo de mostrar información mas clara y mejorar tu marca.</LandingInfoBoxDescr>
              <Link href={{
                pathname: '/bloques',
                query: { optionChosed: "box" },
              }}
                as="/bloques"><LandingInfoBoxButton>Elige una Caja</LandingInfoBoxButton></Link>
            </LandingInfoBox>
            <LandingInfoBox>
              <LandingInfoBoxTitle>Tablas de Productos</LandingInfoBoxTitle>
              <LandingInfoBoxDescr>Elabora listas de productos de Amazon Afiliados o destaca un producto diferenciandote de la competencia optimizando tu nicho y mejorando la conversión.</LandingInfoBoxDescr>
              <Link href={{
                pathname: '/bloques',
                query: { optionChosed: "table" },
              }}
                as="/bloques"><LandingInfoBoxButton>Elige una Tabla</LandingInfoBoxButton></Link>
            </LandingInfoBox>
          </LandingInfoWrapper>
        </LandingInfo>
        <LandingInfo>
          <LandingInfoTitle>Compatible con todas las plantillas de Wordpress</LandingInfoTitle>
          <LandingInfoWrapper>
            <LandingInfoBox>
              <LandingInfoBoxTitle>Se puede compaginar con Elementor, Divi o cualquier plugin</LandingInfoBoxTitle>
              <LandingInfoBoxDescr>» Testeado desde la versión 5.5 de Wordpress hasta la versión actual con cualquier plugin, constructor de temas o plantillas.</LandingInfoBoxDescr>
              <LandingInfoBoxDescr>» Funcional con otros theme builders menos conocidos como Oxygen Builder.</LandingInfoBoxDescr>
              <LandingInfoBoxDescr>» Totalmente personalizable y con la posibilidad de cambiar el contenido sin saber HTML ni CSS.</LandingInfoBoxDescr>
            </LandingInfoBox>
            <LandingInfoBox>
              <Gif src="/images/decoration/wordpress-editor.gif" />
            </LandingInfoBox>
          </LandingInfoWrapper>
        </LandingInfo>
        <LandingInfo>
          <LandingInfoTitle>Elige {'&'} Personaliza</LandingInfoTitle>
          <LandingInfoBoxDescr>Desbloquea todas las cajas y tablas premium <Link href="/registro">creando una cuenta</Link> gratis</LandingInfoBoxDescr>
          <LandingInfoWrapper>
            <LandingInfoBox style={{width: "60%"}}>
              <Gif src="/images/decoration/personalize-template-example.gif" />
            </LandingInfoBox>
          </LandingInfoWrapper>
        </LandingInfo>
      </LandingContent>
    </>
  )
}


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
    align-items: center;
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
    props.arrowLeft ? '70px' : '110px'};
    left: ${props =>
    props.arrowLeft ? '445px' : '-790px'};
    
    @media(max-width: 768px) {
        display: none;
    }
    
`

const ArrowText = styled.span`
    position: relative;
    top: ${props =>
    props.arrowLeft ? '10px' : '45px'};
    left: ${props =>
    props.arrowLeft ? '700px' : '-580px'};
    color: #34d399;
    text-align: center;
    font-family: 'Texturina', serif;
    font-size: 19px;
    & > span {
      font-size: 12px;
      margin-left: 6px;
      color: white;
    }
    @media(max-width: 768px) {
        position: absolute;
        top: ${props =>
    props.arrowLeft ? '600px' : '420px'};
        left: ${props =>
    props.arrowLeft ? '35px' : '35px'};
        font-size: 13px;
    }
`

const Wave = styled.img`
    width: 100%;
    margin-top: -70px;
    @media(max-width: 768px) {
      margin-top: -10px;
    }
`

const LandingContent = styled.section`
    width: 100%;
    background-color: #151b24;
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
    font-size: 46px;
    font-weight: bold;
    text-align: center;
    margin: 8px 0;
    word-spacing: -3.0px;
    letter-spacing: -0.8px;
    @media(max-width: 768px) {
      font-size: 36px;
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

const LandingInfoBoxButton = styled.button`
    width: 35%;
    padding: 10px 16px;
    margin: 24px 0;
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
    @media(max-width: 768px) {
      width: 50%;
    }

`

const Gif = styled.img`
    width: 100%;
    border-radius: 30px;
    @media(max-width: 768px) {
      margin-top: 16px;
    }
`