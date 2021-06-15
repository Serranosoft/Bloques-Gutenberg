import React, { useContext, useEffect } from "react";
import styled from '@emotion/styled'
import Template from "../components/Template"
import Templates from "../resources/Templates"
import Link from "next/link";
import Head from 'next/head'
import { AuthContext } from '../components/Firebase/AuthDAO';
import { withRouter } from 'next/router';
import { useRouter } from 'next/router'

function TemplateList({ router: { query } }) {
    const { authUser } = useContext(AuthContext);
    const router = useRouter();
    const optionChosed = query.optionChosed
    useEffect(() => {
        if (!query.optionChosed) {
            router.push("/");
        }
    }, [])

    const ConditionalLink = ({ children, href, condition }) => (!condition && href)
        ? <Link href={href}>{children}</Link>
        : <PremiumContentWrapper>{children}</PremiumContentWrapper>;

    return (
        <>
            <Head>
                <title>TODA la lista de BLOQUES y DISEÑOS para nichos de Adsense y Amazon para Wordpress</title>
                <meta name="description" content="Crea bloques gutenberg para wordpress en nichos de SEO en Adsense o Amazon sin saber programar y sin plugins. SEO amistoso, rápido y adaptables a móvil." />
            </Head>
            <LandingTitle>Elige una  <span style={{
                color: "#34d399",
                textAlign: "center"
            }}>plantilla</span></LandingTitle>
            <DecorationArrow src="/images/decoration/curve-arrow-right.svg" className="scale-up-hor-right" optionChosed={optionChosed}/>
            <ArrowText className="scale-up-hor-right" optionChosed={optionChosed}>¡Escoge una plantilla y personalízala!</ArrowText>
            <TemplateListWrapper type={query.optionChosed}>
                {Templates.map((el => {
                    if (el.type === query.optionChosed) {
                        console.log(query.optionChosed);
                        return (
                            <ConditionalLink
                                key={el.id}
                                href={`/bloques/${el.name}`}
                                condition={!authUser && el.id === 1 || !authUser && el.id === 6}
                            >
                                <a>
                                    <PremiumContentWarn>{!authUser && el.id === 1 || !authUser && el.id === 6 ? "Registrate gratis para usar esta plantilla premium" : ""}</PremiumContentWarn>
                                    <Template image={el.TemplateImg} />
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
        props.type === "box" ? "67%" : "73%"};
    display: grid;
    grid-template-columns: ${props =>
        props.type === "box" ? '1fr' : '1fr 1fr 1fr'};
    align-items: center;
    justify-items: center;
    gap: 20px;
    margin-top: 40px;
    & a, & div:first-child {
        width: 75%;
        margin: 0 auto;
    }
    @media(max-width: 768px) {
        width: 95%;
        grid-template-columns: 1fr;
        & > * {
            width: 90% !important;
        }
    }
`

const PremiumContentWarn = styled.p`
    color: white;
    text-decoration: none;
    font-size: 13px;
    opacity: 1 !important;
`

const PremiumContentWrapper = styled.div`
    width: 60%;
    & > a div {
        opacity: 0.3;
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
        props.optionChosed === "box" ? '-420px' : '-550px'};
    @media(max-width: 768px) {
        display: none;
    }
`

const ArrowText = styled.span`
    position: relative;
    top: 25px;
    left: -420px;
    top: ${props =>
        props.optionChosed === "box" ? '30px' : '30px'};
    left: ${props =>
        props.optionChosed === "box" ? '-425px' : '-550px'};
    color: #34d399;
    text-align: center;
    font-family: 'Texturina', serif;
    font-size: 19px;
    @media(max-width: 768px) {
        display: none;
    }
`