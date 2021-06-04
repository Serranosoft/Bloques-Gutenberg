import React, { useContext } from "react";
import styled from '@emotion/styled'
import Template from "./Template"
import BoxTemplates from "../resources/BoxTemplates"
import TableTemplates from "../resources/TableTemplates.js"
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom"
import { AuthContext } from './Firebase/AuthDAO';

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
`

const TemplateListWrapper = styled.section`
    width: ${props =>
        props.type === "box" ? "73%" : "65%"};
    display: grid;
    grid-template-columns: ${props =>
        props.type === "box" ? '1fr' : '1fr 1fr'};
    align-items: center;
    justify-items: center;
    gap: 30px;
    margin-top: 40px;
    & a, & div:first-child {
        width: 70%;
        margin: 0 auto;
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
