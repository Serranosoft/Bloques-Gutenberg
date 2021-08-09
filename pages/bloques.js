import React, { useContext, useEffect } from "react";
import styled from '@emotion/styled'
import Template from "../components/Template"
import Templates from "../resources/Templates"
import Link from "next/link";
import Head from 'next/head'
import { AuthContext } from '../components/Firebase/AuthDAO';
import { withRouter } from 'next/router';
import { useRouter } from 'next/router'

function TemplateList({ router: { query } }, props) {
    console.log(props);
    const { authUser } = useContext(AuthContext);
    const router = useRouter();
    const optionChosed = query.optionChosed

    useEffect(() => {
        if (!query.optionChosed) {
            router.push("/");
        }
    }, [])

    const ConditionalLink = ({ children, href, condition }) => (!condition && href)
        ? <Link href={href} passHref>{children}</Link>
        : <PremiumContentWrapper>{children}</PremiumContentWrapper>;

    return (
        <>
            <Head>
                <title>Listado de Bloques Prediseñados para Wordpress - Bloques Gutenberg</title>
                <meta name="description" content="Crea bloques gutenberg para wordpress en nichos de SEO en Adsense o Amazon sin saber programar y sin plugins. SEO amistoso, rápido y adaptables a móvil." />
            </Head>
            <LandingTitle>Elige una  <span style={{
                color: "#34d399",
                textAlign: "center"
            }}>plantilla</span></LandingTitle>
            <DecorationArrow src="/images/decoration/curve-arrow-right.svg" className="scale-up-hor-right" optionChosed={optionChosed} />
            <ArrowText className="scale-up-hor-right" optionChosed={optionChosed}>¡Escoge una plantilla y personalízala!</ArrowText>
            <TemplateListWrapper type={query.optionChosed}>
                {Templates.map((el => {
                    if (el.type === query.optionChosed) {
                        return (
                            <ConditionalLink
                                key={el.id}
                                href={`/bloques/${el.name}`}
                                condition={!authUser && el.id === 1 || !authUser && el.id === 6}
                            >
                                <a>
                                    <PremiumContentWarn>{!authUser && el.id === 1 || !authUser && el.id === 6 ? "Registrate gratis para usar esta plantilla premium" : ""}</PremiumContentWarn>
                                    <Template image={el.TemplateImg}/>
                                </a>
                            </ConditionalLink>
                        )
                    }
                }))}

            </TemplateListWrapper>
        </>
    )
}

export default withRouter(TemplateList);

const LandingTitle = styled.h1`
    margin: 16px 0;
    font-size: 60px;
    font-family: 'Texturina', serif;
    color: white;
    word-spacing: -5px;
    @media(max-width: 768px) {
        padding: 36px 8px 8px 8px;
        font-size: 33px;
        line-height: 1.3;
        word-spacing: 1px;
    }
`

const TemplateListWrapper = styled.section`
    width: ${props =>
        props.type === "box" ? "55%" : "77%"};
    display: grid;
    grid-template-columns: ${props =>
        props.type === "box" ? '1fr' : '1fr 1fr 1fr'};
    align-items: center;
    justify-items: center;
    gap: 20px;
    margin-top: 40px;
    & a, & div {
        width: 95%;
        margin: 0 auto;
    }
    & > a img, div {
        min-height: ${props =>
        props.type === "box" ? "" : "420px"};
    }
    & > a img {
        max-height: ${props =>
        props.type === "box" ? "370px" : "500px"};
    }
    @media(min-width: 3840px) {
        & > a img {
            max-height: ${props =>
            props.type === "box" ? "" : "100%"};
        }
    }
    @media(max-width: 920px) {
        width: 75%;
        grid-template-columns: 1fr;
        & > a img {
            max-height: ${props =>
            props.type === "box" ? "" : "100%"};
        }
    }
    @media(max-width: 480px) {
        width: 95%;
    }
`

const PremiumContentWarn = styled.p`
    color: white;
    text-decoration: none;
    font-size: 13px;
    opacity: 1 !important;
    margin-left: 13px;
`

const PremiumContentWrapper = styled.div`
    width: 60%;
    & > a div {
        opacity: 0.3 !important;
        cursor: auto;
    }
    & > a div:hover {
        transform: scale(1);
    }
`

const DecorationArrow = styled.img`
    width: 50px;
    position: relative;
    top: ${props =>
        props.optionChosed === "box" ? '120px' : '120px'};
    left: ${props =>
        props.optionChosed === "box" ? '-420px' : '-600px'};
    @media(max-width: 768px) {
        display: none;
    }
    @media(min-width: 1920px) {
        left: ${props =>
        props.optionChosed === "box" ? '-420px' : '-750px'};
      }
      @media(min-width: 3840px) {
        left: ${props =>
        props.optionChosed === "box" ? '-420px' : '-1500px'};
      }
`

const ArrowText = styled.span`
    position: relative;
    top: 25px;
    left: -420px;
    top: ${props =>
        props.optionChosed === "box" ? '30px' : '30px'};
    left: ${props =>
        props.optionChosed === "box" ? '-425px' : '-570px'};
    color: #34d399;
    text-align: center;
    font-family: 'Texturina', serif;
    font-size: 19px;
    @media(max-width: 768px) {
        display: none;
    }
    @media(min-width: 1920px) {
        left: ${props =>
        props.optionChosed === "box" ? '-425px' : '-700px'};
    }
    @media(min-width: 3840px) {
            left: ${props =>
        props.optionChosed === "box" ? '-425px' : '-1500px'};
      }
`