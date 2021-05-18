import React from "react";
import styled from '@emotion/styled'
import Template from "./Template"
import BoxTemplates from "../resources/BoxTemplates.json"
import TableTemplates from "../resources/TableTemplates.json"
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
                            return (
                                <Link to={{
                                    pathname: "/personalizar",
                                    optionChosed: el.templateId
                                }}>
                                    <Template
                                        image={el.templateImg}
                                        htmlCode={el.templateHtml}
                                        cssCode={el.templateCss} />
                                </Link>
                            )
                        }))
                        :
                        TableTemplates.map((el => {
                            return (
                                <Template
                                    image={el.templateImg}
                                    htmlCode={el.templateHtml}
                                    cssCode={el.templateCss} />
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
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    align-items: center;
    gap: 30px;
    margin-top: 40px;
`