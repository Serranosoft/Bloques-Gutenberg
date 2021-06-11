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
  console.log(data);
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
        <ArrowText arrowLeft>Plantillas para Tablas</ArrowText>
        <DecorationArrow
          src="/images/decoration/curve-arrow-left.svg"
          arrowLeft
        />
        <ArrowText arrowRight>Plantillas para Cajas</ArrowText>
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
    props.arrowLeft ? '445px' : '-620px'};
    
    @media(max-width: 768px) {
        display: none;
    }
    
`

const ArrowText = styled.span`
    position: relative;
    top: ${props =>
    props.arrowLeft ? '10px' : '45px'};
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