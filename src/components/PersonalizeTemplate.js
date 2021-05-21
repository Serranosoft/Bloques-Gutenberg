import React, { useState, useEffect } from "react";
import styled from "@emotion/styled"
import { useHistory } from 'react-router-dom';
import BoxTemplates from "../resources/BoxTemplates.js"
import TableTemplates from "../resources/TableTemplates.json"
import Palette from "./Palette"
import "../resources/TemplatesStyles.css"

function PersonalizeTemplate(props) {    
    const history = useHistory();
    const [template, getTemplate] = useState(fetchTemplate(props.location.optionChosed));
    const [styling, changeStyling] = useState([]);


    useEffect(() => {
        for(let key in styling) {
            document.querySelector(`.template${template.TemplateId}`).setAttribute("style", `${key}:${styling[key]}`)
        }
    }, [styling])

    function fetchTemplate(id) {
        if(id < 10) {
            return BoxTemplates.find(element => element.TemplateId === parseInt(id))
        } else {
            return TableTemplates.find(element => element.TemplateId === parseInt(id))
        }
    }

    if (!props.location.optionChosed) {
        history.push("/")
        return (<></>)
    } else {
        return (
            <>
                <LandingTitle>Personaliza tu  <span style={{
                    color: "#34d399",
                    textAlign: "center"
                }}>plantilla</span></LandingTitle>

                <Workspace>
                    <div id="templatePreview" className={template.TemplateId} dangerouslySetInnerHTML={{ __html: template.TemplateHtml }}></div>
                    <Palette styling={styling} changeStyling={changeStyling}/>
                    <HtmlGenerated>{template.TemplateHtml}</HtmlGenerated>
                    <HtmlGenerated id="cssgenerated">{template.TemplateCss}</HtmlGenerated>
                </Workspace>
            </>
        )
    }

}

export default PersonalizeTemplate;


const LandingTitle = styled.h1`
    margin-top: 24px;
    margin-bottom: 32px;
    font-size: 60px;
    font-family: 'Texturina', serif;
    color: white;
    word-spacing: -5px;
`

const Workspace = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px auto;
    margin: 0 auto;
`

const HtmlGenerated = styled.textarea`
    width: 650px;
    height: 350px;
    margin: 0 auto;
`