import React from "react";
import styled from '@emotion/styled'
import Link from "next/link"
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Elige &#38; Personaliza Bloques para Wordpress sin instalar Plugins</title>
        <meta name="description" content="Elige y personaliza un bloque gutenberg (Adsense y Amazon) sin instalar plugins en tu página web, optimizados y adaptado a todos los dispositivos." />
        <link rel="icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Elige y personaliza un bloque gutenberg (Adsense y Amazon) sin instalar plugins en tu página web, optimizados y adaptado a todos los dispositivos." />
        <meta name="twitter:image" content="https://bg.manu-scholz.com/wp-content/uploads/2021/07/bloques-gutenberg-twitter2.jpg" />

        <meta name="og:title" content="Elige y Personaliza Bloques para Wordpress sin Plugins" />
        <meta name="og:description" content="Elige y personaliza un bloque gutenberg (Adsense y Amazon) sin instalar plugins en tu página web, optimizados y adaptado a todos los dispositivos" />
        <meta property="og:image" content="https://bg.manu-scholz.com/wp-content/uploads/2021/07/bloques-gutenberg-twitter2.jpg" />
        <meta name="og:image" content="https://bg.manu-scholz.com/wp-content/uploads/2021/07/bloques-gutenberg-twitter2.jpg" />
        {/* <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="550" /> */}
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
          Accede a una lista de bloques personalizables para tu web de Adsense y Amazon Afiliados sin instalar plugins.
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
        <AboutMe>
          <div>
            <img src="/images/decoration/avatar.jpg" />
          </div>
          <div>
            <span>Hola, soy Manuel Scholz, fundador de Bloques Gutenberg, puedes seguir el progreso de la construcción de esta herramienta en <a href="https://twitter.com/ImScholz" target="_blank" style={{ color: "#34d399", textDecoration: "underline" }}>mi Twitter</a></span>
          </div>
        </AboutMe>
        <LandingInfoTitle><span style={{ color: "#34d399" }}>Características</span> de los bloques gutenberg</LandingInfoTitle>
        <Grid4Options>
          <div>
            <img src="/images/decoration/feature1.svg" />
            <LandingInfoBoxDescr>
              Ahorra tiempo creando bloques atractivos para destacar información
            </LandingInfoBoxDescr>
            <span>&lt; de 1 mínuto</span>
          </div>
          <div>
            <img src="/images/decoration/feature2.svg" />
            <LandingInfoBoxDescr>
              Mejora las métricas LCP, FID y CLS con bloques sin instalar plugins
            </LandingInfoBoxDescr>
            <span>20% mejora en LCP</span>
          </div>
          <div>
            <img src="/images/decoration/feature3.svg" />
            <LandingInfoBoxDescr>
              Edita los textos, colores y formas de todos los diseños para crear tu propia marca
            </LandingInfoBoxDescr>
            <span>Diferente a la competencia</span>
          </div>
          <div>
            <img src="/images/decoration/feature4.svg" />
            <LandingInfoBoxDescr>
              La lista de bloques y tablas se amplía y se actualizan mejorando su rendimiento
            </LandingInfoBoxDescr>
            <span>Producto actual</span>
          </div>

        </Grid4Options>
        <CompatibilitySection>
          <div>
            <H2>Compatible con Elementor, Divi o cualquier plugin y plantilla</H2>
            <LandingInfoBoxDescr><img src="/images/decoration/arrow.svg" /> Testeado desde la versión 5.5 de Wordpress hasta
              la versión actual con cualquier plugin, constructor de temas o plantillas.</LandingInfoBoxDescr>
            <LandingInfoBoxDescr><img src="/images/decoration/arrow.svg" /> Funcional con otros theme builders
              menos conocidos como Oxygen Builder.</LandingInfoBoxDescr>
            <LandingInfoBoxDescr><img src="/images/decoration/arrow.svg" /> Totalmente personalizable y con la posibilidad
              de cambiar el contenido sin saber HTML ni CSS.</LandingInfoBoxDescr>
          </div>
          <CompatibilitySvgWrapper>
            <img src="/images/decoration/elementor.svg" />
            <img src="/images/decoration/divi.svg" />
            <img src="/images/decoration/oxygen.svg" style={{ gridColumn: "1 / 3" }} />
          </CompatibilitySvgWrapper>
        </CompatibilitySection>
        <LandingInfoTitle>Decora tu web, <span style={{ color: "#34d399" }}>en segundos</span></LandingInfoTitle>
        <CTA2Columns>
          <div>
            <H2>Cajas Informativas</H2>
            <LandingInfoBoxDescr>Consigue atraer mas público con elegantes cajas informativas para tus webs y aumenta tus ingresos en Adsense.</LandingInfoBoxDescr>
            <button>
              <Link href={{
                pathname: '/bloques',
                query: { optionChosed: "box" },
              }} as="/bloques" passHref>
                <a>
                  Aumenta mis ganancias con cajas
                </a>
              </Link>
            </button>
          </div>
          <div>
            <H2>Tablas de Productos</H2>
            <LandingInfoBoxDescr>Consigue una mayor conversión de ventas enseñando tus productos de Amazon Afiliados con bonitas comparativas.</LandingInfoBoxDescr>
            <button>
              <Link href={{
                pathname: '/bloques',
                query: { optionChosed: "table" },
              }} as="/bloques" passHref>
                <a>
                  Aumenta mis ganancias con tablas
                </a>
              </Link>
            </button>
          </div>
        </CTA2Columns>
        <LandingInfoTitle>Aprende a crear uno y <span style={{ color: "#34d399" }}>publicarlo en 1 minuto</span></LandingInfoTitle>
        <VideoTutorialWrapper>
          <LandingSubtitle>
            En menos de un mínuto puedes elegir un bloque que te guste, personalizarlo y copiar y pegar el resultado en tu post o página de Wordpress
          </LandingSubtitle>
          <video width="850" controls>
            <source src="/images/videos/create-block.mp4" type="video/mp4" />
          </video>
        </VideoTutorialWrapper>
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
        padding: 16px 12px 8px 12px;
        font-size: 29px;
        line-height: 1.3;
        word-spacing: 1px;
    }
`

const LandingWrapper = styled.div`
    width: 75%;
    margin-top: 20px;
    text-align: center;
    @media(max-width: 768px) {
        width: 100%;
        padding: 0 24px;
        margin-top: 16px;
    }
`

const LandingSubtitle = styled.p`
    width: 650px;
    margin: 16px auto 8px auto;
    font-size: 20px;
    text-align: center;
    color: #d6d6d6;
    @media(max-width: 768px) {
        width: 100%;
        margin: 0px 0px;
        font-size: 16.5px;
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
        margin-top: 12px;
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

const LandingContent = styled.section`
    width: 100%;
    background-color: #151b24;
    padding: 0 170px;
    @media(max-width: 768px) {
      padding: 0 24px;
    }
`

const AboutMe = styled.div`
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 16px;
    align-items: center;
    margin: 0 auto 80px auto;
    border: 1px solid gray;
    border-radius: 15px;
    padding: 16px 24px;
    & > div {
      width: 100%;
      margin: 0 auto;
    }
    & img {
      width: 100%;
      border-radius: 50%;
      margin: 0 auto;
      text-align: center;
      @media(max-width: 768px) {
        width: 40%;
      }
    }
    & span {
      font-size: 14px;
      color: lightgray;
      @media(max-width: 768px) {
        text-align: center;
        line-height: 1.45;
      }
    }
    @media(max-width: 768px) {
      width: 100%;
      grid-template-columns: 1fr;
      & > div {
        display: flex;
      }
    }
    `

const CTA2Columns = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 24px 0 120px 0;
    & > div {
      width: 40%;
    display: flex;
    flex-direction: column;
    @media(max-width: 768px) {
      width: 100%;
      text-align: center;
    }
    }
    & > div button {
      width: 75%;
      margin: 24px 0;
      padding: 10px 8px;
      background: #1f6952;
      font-size: 17px;
      text-align: center;
      cursor: pointer;
      transition: 0.5s;
      border: 0;
      border-radius: 30px;
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
        width: 100%;
        margin: 22px auto;
      }
    }
    @media(max-width: 768px) {
      flex-direction: column;
      margin: 0 auto 50px auto;
    }
`

const Grid4Options = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 25px;
    margin: 60px 0 100px 0; 
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px 32px;
      border-radius: 30px;
      background-color: #0f131a;
    }
    & > div img {
      width: 40px;
      margin: 8px 0;
    }
    & > div p {
      text-align: center;
      line-height: 1.5;
    }
    & > div span {
      padding: 8px 16px;
      border-radius: 30px;
      background-color: #216b50;
      font-size: 13px;
      margin: 8px 0;
    }
    @media(max-width: 768px) {
      margin: 60px 0 50px 0; 
    }
`

const CompatibilitySection = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 30px;
    margin: 24px 0 100px 0;
    @media(max-width: 768px) {
      grid-template-columns: 1fr;
      margin: 32px 0 50px 0;
    }
    & > div img {
      display: inline;
      width: 15px;
    }
    & > div p {
      margin: 40px auto;
      @media(max-width: 768px) {
        font-size: 16px;
        line-height: 1.6;
        text-align: left;
        margin: 40px auto;
      }
    }
`

const CompatibilitySvgWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
    & > img {
      width: 90px !important;
      margin: 0 auto;
    }
`

const VideoTutorialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0 120px 0;
    & > p {
      width: 50%;
      text-align: center;
      margin: 0px 0 32px 0;
    }
    @media(max-width: 768px) {
      margin: 16px 0 50px 0;
      & > p {
        width: 100%;
        font-size: 15px;
      }
    }
`

const LandingInfoTitle = styled.p`
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin: 32px 0;
    word-spacing: -3.0px;
    letter-spacing: -0.8px;
    @media(max-width: 768px) {
      font-size: 32px;
      margin: 16px 0;
    }
`

const H2 = styled.h2`
    font-size: 28px;
    font-weight: bold;
    margin: 16px 0;
    @media(max-width: 768px) {
      font-size: 22.5px;
    }
`

const LandingInfoBoxDescr = styled.p`
    font-size: 16px;
    color: #dedede;
    font-weight: 300;
    margin: 16px auto;
    & > a {
      color: #34d399;
    }
    @media(max-width: 768px) {
      font-size: 16px;
      line-height: 1.4;
      text-align: left;
      margin: 16px auto;
    }
`