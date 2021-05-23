import React, { useState, useEffect } from "react";
import styled from "@emotion/styled"
import { useHistory } from 'react-router-dom';
import BoxTemplates from "../resources/BoxTemplates.js"
import TableTemplates from "../resources/TableTemplates.js"
import Palette from "./Palette"
import "../resources/TemplatesStyles.css"

function PersonalizeTemplate(props) {    
    const history = useHistory();
    const [template, getTemplate] = useState(fetchTemplate(props.location.optionChosed));
    const [styling, changeStyling] = useState({
        color: "#1C1C1C",
        background: "#ffffff",
        "letter-spacing": "0px",
        "word-spacing": "1px",
        "border-radius": "0px"
    });

    const [stylingButton, changeButton] = useState({
        background: "#272c30",
        color: "#ffffff",
        "border-radius": "0px"
    })


    useEffect(() => {
        let btn = document.querySelector(`.template${template.TemplateId} .wp-block-button a`);
        if(btn!=null) {
            btn.setAttribute("style", applyStyles(stylingButton))
        }
    }, [stylingButton])

    useEffect(() => {
        document.querySelector(`.template${template.TemplateId}`).setAttribute("style", applyStyles(styling))
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
                    <div className={template.TemplateId} dangerouslySetInnerHTML={{ __html: template.TemplateHtml }}></div>
                    <Palette 
                        template={template.TemplateId}
                        styling={styling} 
                        changeStyling={changeStyling} 
                        stylingButton={stylingButton}
                        changeButton={changeButton} 
                    />
                    <Button>CREAR BLOQUE</Button>
                </Workspace>
                <CodeSpace>
                    <HtmlGenerated>{template.TemplateHtml}</HtmlGenerated>
                    <HtmlGenerated id="css-output"></HtmlGenerated>
                </CodeSpace>
            </>
        )
    }

    function applyStyles(style) {
        let concatTxt = "";
        for(let key in style) {
            concatTxt += `${key}:${style[key]};`
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
    & > div {
        width: 100%;
    }
`

const CodeSpace = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin: 16px auto;
`

const HtmlGenerated = styled.textarea`
    width: 100%;
    height: 350px;
    margin: 40px auto;
    padding: 10px;
    background: transparent;
    border: 1px solid #34d399;
    color: white;
    font-size: 18px;
    font-family: 'Space Mono', monospace;
`

const Button = styled.button`
    width: 65%;
    padding: 8px 24px;
    margin: 8px auto;
    background: #181f29;
    border: 1px solid lightgray;
    outline: 0;
    font-size: 24px;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    color: #34d399;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        transform: scale(1.05);
    }
`