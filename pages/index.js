import React from "react";
import styled from '@emotion/styled'
import Link from "next/link"
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Crea BLOQUES GUTENBERG para Wordpress: SEO amistoso, rápido y sin plugins</title>
        <meta name="description" content="Crea bloques gutenberg para wordpress en nichos de SEO en Adsense o Amazon sin saber programar y sin plugins. SEO amistoso, rápido y adaptables a móvil." />
        <link rel="icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Crea bloques gutenberg para wordpress en nichos de SEO en Adsense o Amazon sin saber programar y sin plugins. SEO amistoso, rápido y adaptables a móvil." />
        <meta name="twitter:image" content="https://bg.manu-scholz.com/wp-content/uploads/2021/06/open-graph.jpg" />

        <meta name="og:title" content="Crea elegantes BLOQUES GUTENBERG para Wordpress SEO amistoso, rápido y sin plugins" />
        <meta name="og:description" content="Crea bloques gutenberg para wordpress en nichos de SEO en Adsense o Amazon sin saber programar y sin plugins. SEO amistoso, rápido y adaptables a móvil." />
        <meta property="og:image" content="https://bg.manu-scholz.com/wp-content/uploads/2021/06/open-graph.jpg" />
        <meta name="og:image" content="https://bg.manu-scholz.com/wp-content/uploads/2021/06/open-graph.jpg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="550" />
        <meta property="og:url" content="https://bloques-gutenberg.com/" />
        <meta property="og:type" content="website" />
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
        <LandingSubtitle>
          Bloques gutenberg es una herramienta para crear, personalizar e integrar cajas informativas y tablas de productos
          en tus nichos de Amazon, Adsense y todo tipo de webs sin instalar plugins
        </LandingSubtitle>
        <ArrowText arrowLeft>Plantillas Verticales <span>(Recomendado para Amazon)</span></ArrowText>
        <DecorationArrow
          src="/images/decoration/curve-arrow-left.svg"
          arrowLeft
        />
        <ArrowText arrowRight>Plantillas Horizontales <span>(Recomendado para Adsense)</span></ArrowText>
        <DecorationArrow
          src="/images/decoration/curve-arrow-right.svg"
          arrowRight />
        <OptionWrapper>
          <Link href={{
            pathname: '/bloques',
            query: { optionChosed: "box" },
          }} as="/bloques" passHref>
            <a>
              <ImageOption src="/images/opcion-caja.png" />
            </a>
          </Link>
          <Link href={{
            pathname: '/bloques',
            query: { optionChosed: "table" },
          }} as="/bloques" passHref>
            <a>
              <ImageOption src="/images/opcion-tabla2.png" />
            </a>
          </Link>
        </OptionWrapper>
      </LandingWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <path fill="#151b24" fill-opacity="1" d="M0,0L48,10.7C96,21,192,43,288,74.7C384,107,480,149,576,144C672,139,768,85,864,85.3C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <LandingContent>
        <LandingInfo>
          <AvatarWrapper>
            <div>
              <Avatar src="/images/decoration/avatar.jpg" />
            </div>
            <div>
              <AvatarDescr>Hola, soy Manuel Scholz, fundador de Bloques Gutenberg, puedes seguir el progreso de la construcción de esta herramienta en <a href="https://twitter.com/ImScholz" target="_blank" style={{ color: "#34d399", textDecoration: "underline" }}>mi Twitter</a></AvatarDescr>
            </div>
          </AvatarWrapper>
          <LandingInfoTitle>Decora tu web, en segundos</LandingInfoTitle>
          <LandingInfoWrapper>
            <LandingInfoBox>
              <LandingInfoBoxTitle>Cajas Informativas</LandingInfoBoxTitle>
              <LandingInfoBoxDescr>Construye tus artículos, plantillas o páginas con elegantes y personalizables cajas con el objetivo de mostrar información mas clara y mejorar tu marca.</LandingInfoBoxDescr>
              <LandingInfoBoxButton>
                <Link href={{
                  pathname: '/bloques',
                  query: { optionChosed: "box" },
                }} as="/bloques" passHref>
                  <a>
                    Elige una Caja
                  </a>
                </Link>
              </LandingInfoBoxButton>
            </LandingInfoBox>
            <LandingInfoBox>
              <LandingInfoBoxTitle>Tablas de Productos</LandingInfoBoxTitle>
              <LandingInfoBoxDescr>Elabora listas de productos de Amazon Afiliados o destaca un producto diferenciandote de la competencia optimizando tu nicho y mejorando la conversión.</LandingInfoBoxDescr>
              <LandingInfoBoxButton>
                <Link href={{
                  pathname: '/bloques',
                  query: { optionChosed: "table" },
                }} as="/bloques" passHref>
                  <a>
                    Elige una Tabla
                  </a>
                </Link>
              </LandingInfoBoxButton>
            </LandingInfoBox>
          </LandingInfoWrapper>
        </LandingInfo>
        <LandingInfo>
          <LandingInfoTitle>Aprende a crear uno y publicarlo en 1 minuto</LandingInfoTitle>
          <LandingInfoWrapper>
            <LandingInfoBox style={{ alignItems: "center" }}>
              <video width="850" controls>
                <source src="/images/videos/create-block.mp4" type="video/mp4" />
              </video>
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
            <LandingInfoBox style={{ width: "60%" }}>
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
        width: 90%;
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
    width: 260px;
    height: 100%;
    cursor: pointer;
    transition: 1s;
    &:hover {
        transform: scale(1.05);
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
    @media(max-width: 920px) {
        display: none;
    }
    @media(min-width: 1920px) {
      top: ${props =>
    props.arrowLeft ? '70px' : '110px'};
      left: ${props =>
    props.arrowLeft ? '485px' : '-830px'};
    }
    @media(min-width: 3840px) {
      top: ${props =>
    props.arrowLeft ? '70px' : '110px'};
      left: ${props =>
    props.arrowLeft ? '730px' : '-1065px'};
    }
    
`

const ArrowText = styled.span`
    position: relative;
    top: ${props =>
    props.arrowLeft ? '10px' : '45px'};
    left: ${props =>
    props.arrowLeft ? '700px' : '-540px'};
    color: #34d399;
    text-align: center;
    font-family: 'Texturina', serif;
    font-size: 19px;
    & > span {
      font-size: 12px;
      margin-left: 6px;
      color: white;
    }
    @media(max-width: 920px) {
      display: none;
    }

    @media(min-width: 1920px) {
      top: ${props =>
    props.arrowLeft ? '10px' : '45px'};
      left: ${props =>
    props.arrowLeft ? '720px' : '-570px'};
    }
    @media(min-width: 3840px) {
      top: ${props =>
    props.arrowLeft ? '10px' : '45px'};
      left: ${props =>
    props.arrowLeft ? '990px' : '-820px'};
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
    margin: 24px 0;
    background: #1f6952;
    font-size: 17px;
    text-align: center;
    cursor: pointer;
    transition: 0.5s;
    border: 0;
    border-radius: 3px;
    & > a {
      display: block;
      padding: 10px 16px;
      text-decoration: none;
      color: white;
    }
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

const AvatarWrapper = styled.div`
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 16px;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 32px;
    border: 1px solid gray;
    border-radius: 7px;
    padding: 16px 24px;
    & > div {
      width: 100%;
      margin: 0 auto;
    }
    @media(max-width: 768px) {
      width: 100%;
    }
`

const Avatar = styled.img`
    width: 100%;
    border-radius: 50%;
    margin: 0 auto;
    text-align: center;
`

const AvatarDescr = styled.span`
    font-size: 14px;
    color: lightgray;
`
