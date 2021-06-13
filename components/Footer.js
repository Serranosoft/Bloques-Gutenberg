import React from "react";
import styled from '@emotion/styled';

import Link from "next/link";

function Footer() {

    return (
        <FooterSection>
            <FooterWrapper>
                <div>
                    <Link href="/">
                        <a>
                            <HeaderTitle>
                                <span>Bloques gutenberg</span>
                                <img src="/images/decoration/plugin.svg" alt="bloques gutenberg" />
                            </HeaderTitle>
                        </a>
                    </Link>
                    <FooterDescr>La solución mas fácil para decorar tus webs para Adsense o Amazon Afiliados.</FooterDescr>
                </div>
                <Menu>
                    <MenuColumn>
                        <MenuColumnTitle>PRODUCTO</MenuColumnTitle>
                        <Link href="/">Aplicación</Link>
                        <Link href="/iniciar-sesion">Iniciar Sesión</Link>
                        <Link href="/registro">Registro</Link>
                    </MenuColumn>
                    <MenuColumn>
                        <MenuColumnTitle>FUNDADOR</MenuColumnTitle>
                        <Link href="/blog">Blog</Link>
                        <a href="/">Twitter</a>
                        <a href="/iniciar-sesion">LinkedIn</a>
                    </MenuColumn>
                    <MenuColumn>
                        <MenuColumnTitle>PROYECTOS</MenuColumnTitle>
                        <a href="/" target="_blank">Curricufy</a>
                        <a href="/">Memorify</a>
                        <a href="/iniciar-sesion">Fake Spotify</a>
                    </MenuColumn>
                </Menu>

            </FooterWrapper>
        </FooterSection>
    )
}

export default Footer;


const FooterSection = styled.footer`
  width: 100%;
  padding: 80px 40px;
  background-color: #242f40;
  @media(max-width: 768px) {
      padding: 40px 16px;
  }
`

const FooterWrapper = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  gap: 30px;
  margin: 0 auto;
  & > div a {
      text-decoration: none;
    }
    @media(max-width: 768px) {
        width: 95%;
        grid-template-columns: 1fr;
    }
`

const HeaderTitle = styled.div`
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    font-family: 'Texturina', serif;
    margin-bottom: 18px;
    & > img {
        align-self: start;
        width: 25px;
        color: white;
        margin: 0 5px;
    }
    @media(max-width: 768px) {
        display: block;
        font-size: 18px;
        margin: 8px 0;
    }
`

const Menu = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const MenuColumn = styled.div`
    display: flex;
    flex-direction: column;

    & > a {
        display: block;
        color: lightgray;
        text-decoration: none;
        font-size: 15px;
        margin: 3px 0;
    }
    & > a:hover {
        text-decoration: underline;
        color: white;
    }
    @media(max-width: 768px) {
        & > a {
            font-size: 12px;
            margin: 6px 0;
        }
    }
`

const MenuColumnTitle = styled.p`
    font-size: 15px;
    color: white;
    font-weight: bold;
    margin: 8px 0;
    @media(max-width: 768px) {
        font-size: 13px;
    }
`

const FooterDescr = styled.span`
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