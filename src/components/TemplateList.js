import React, { useContext } from "react";
import styled from '@emotion/styled'
import Template from "./Template"
import BoxTemplates from "../resources/BoxTemplates"
import TableTemplates from "../resources/TableTemplates.js"
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom"
import { AuthContext } from './Firebase/AuthDAO';
import ArrowRight from "../images/decoration/curve-arrow-right.svg"


function TemplateList(props) {
    const { authUser } = useContext(AuthContext);

    const ConditionalLink = ({ children, to, condition }) => (!condition && to)
        ? <Link to={to}>{children}</Link>
        : <PremiumContentWrapper>{children}</PremiumContentWrapper>;

    if (!props.location.optionChosed) {
        return (<Redirect to="/" />)
    } else {
        return (
            <>
                <LandingTitle>Elige una  <span style={{
                    color: "#34d399",
                    textAlign: "center"
                }}>plantilla</span></LandingTitle>
                <DecorationArrow src={ArrowRight} />
                <ArrowText>¡Escoge una plantilla y personaliza-la!</ArrowText>
                <TemplateListWrapper type={props.location.optionChosed}>
                    {props.location.optionChosed === "box" ?
                        BoxTemplates.map((el => {
                            return (
                                <ConditionalLink
                                    key={el.TemplateId}
                                    to={{
                                        pathname: "/personalizar",
                                        optionChosed: el.TemplateId
                                    }}
                                    condition={!authUser && el.TemplateId === 1}
                                >
                                    <PremiumContentWarn>{!authUser && el.TemplateId === 1 && "Registrate para usar esta plantilla premium"}</PremiumContentWarn>
                                    <Template image={el.TemplateImg} />
                                </ConditionalLink>
                            )
                        }))
                        :
                        TableTemplates.map((el => {
                            return (
                                <ConditionalLink
                                    key={el.TemplateId}
                                    to={{
                                        pathname: "/personalizar",
                                        optionChosed: el.TemplateId
                                    }}
                                    condition={!authUser && el.TemplateId === 10}
                                >
                                    <PremiumContentWarn>{!authUser && el.TemplateId === 10 && "Registrate para usar esta plantilla premium"}</PremiumContentWarn>
                                    <Template image={el.TemplateImg} />
                                </ConditionalLink>
                            )
                        }))
                    }
                </TemplateListWrapper>
            </>
        )
    }
}

export default TemplateList;

const LandingTitle = styled.h1`
    margin-top: 24px;
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
        props.type === "box" ? "73%" : "60%"};
    display: grid;
    grid-template-columns: ${props =>
        props.type === "box" ? '1fr' : '1fr 1fr'};
    align-items: center;
    justify-items: center;
    gap: 20px;
    margin-top: 40px;
    & a, & div:first-child {
        width: 70%;
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
    & > div {
        opacity: 0.3;
        cursor: auto;
    }
    & > div:hover {
        transform: scale(1);
    }
`

const DecorationArrow = styled.img`
    width: 50px;
    position: relative;
    top: 110px;
    left: -435px;
    @media(max-width: 768px) {
        display: none;
    }
`

const ArrowText = styled.span`
    position: relative;
    top: 25px;
    left: -435px;
    color: #34d399;
    text-align: center;
    font-family: 'Texturina', serif;
    @media(max-width: 768px) {
        display: none;
    }
`