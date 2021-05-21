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
    const [styling, changeStyling] = useState({
        color: "#1C1C1C",
        background: "#ffffff"
    });


    useEffect(() => {
        document.querySelector(`.template${template.TemplateId}`).setAttribute("style", applyStyles())
    }, [styling])

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
                    <HtmlGenerated id="css-output"></HtmlGenerated>
                </Workspace>
            </>
        )
    }

    function applyStyles() {
        let concatTxt = "";
        for(let key in styling) {
            concatTxt += `${key}:${styling[key]};`
        }
        console.log(concatTxt);
        concatOutputCss(concatTxt)
        return concatTxt;
    }

    function concatOutputCss(styles) {
        document.getElementById("css-output").value=
        `${template.TemplateCss}\n .template${template.TemplateId}{${styles}}`
    }

    function fetchTemplate(id) {
        if(id < 10) {
            return BoxTemplates.find(element => element.TemplateId === parseInt(id))
        } else {
            return TableTemplates.find(element => element.TemplateId === parseInt(id))
        }
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