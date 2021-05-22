import React from "react";
import styled from '@emotion/styled'
import Template from "./Template"
import BoxTemplates from "../resources/BoxTemplates"
import TableTemplates from "../resources/TableTemplates.js"
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom"

function TemplateList(props) {
    const history = useHistory();
    if (!props.location.optionChosed) {
        history.push("/")
        return (<></>)
    } else {
        return (
            <>
                <LandingTitle>Elige una  <span style={{
                    color: "#34d399",
                    textAlign: "center"
                }}>plantilla</span></LandingTitle>

                <TemplateListWrapper>
                    {props.location.optionChosed === "box" ?
                        BoxTemplates.map((el => {
                            console.log(el.TemplateId);
                            return (
                                <Link 
                                key={el.TemplateId} 
                                to={{
                                    pathname: "/personalizar",
                                    optionChosed: el.TemplateId
                                }}>
                                    <Template
                                        image={el.TemplateImg} />
                                </Link>
                            )
                        }))
                        :
                        TableTemplates.map((el => {
                            return (
                                <Link 
                                key={el.TemplateId} 
                                to={{
                                    pathname: "/personalizar",
                                    optionChosed: el.TemplateId
                                }}>
                                    <Template image={el.TemplateImg} id={el.TemplateId} />
                                </Link>
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
    width: 85%;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    gap: 30px;
    margin-top: 40px;
    & a {
        width: 50%;
    }
`