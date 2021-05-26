import React, { useState, useEffect } from "react";
import styled from "@emotion/styled"
import { Redirect } from 'react-router-dom';
import BoxTemplates from "../resources/BoxTemplates.js"
import TableTemplates from "../resources/TableTemplates.js"
import Palette from "./Palette"
import "../resources/TemplatesStyles.css"

function PersonalizeTemplate(props) {
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
        if (template !== undefined) {
            let btn = document.querySelector(`.template${template.TemplateId} .wp-block-button a, .template${template.TemplateId} tr:last-child td`);
            if (btn != null) {
                btn.setAttribute("style", applyStyles().buttonStyles)
            }
        }
    }, [stylingButton])

    useEffect(() => {
        if (template !== undefined) {
            document.querySelector(`.template${template.TemplateId}`).setAttribute("style", applyStyles().templateStyles)
        }
    }, [styling])

    if (!props.location.optionChosed) {
        return (<Redirect to="/" />)
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
                        templateId={template.TemplateId}
                        styling={styling}
                        changeStyling={changeStyling}
                        stylingButton={stylingButton}
                        changeButton={changeButton}
                    />
                    <Button onClick={showResult}>CREAR BLOQUE</Button>
                </Workspace>
                <CodeSpace id="codespace">
                    <div>
                        <p>Copia-lo en la entrada/página de tu Wordpress para pegar el bloque</p>
                        <HtmlGenerated id="html-output" value={template.TemplateHtml} readOnly onClick={HtmlClipBoard}></HtmlGenerated>
                    </div>
                    <div>
                        <p>Copia-lo en CSS Adicional (Personalizar {'>'} CSS Adicional)</p>
                        <HtmlGenerated id="css-output" readOnly onClick={CssClipBoard}>{template.TemplateCss}</HtmlGenerated>
                    </div>
                </CodeSpace>
            </>
        )
    }

    function showResult() {
        let codespace = document.getElementById("codespace");
        codespace.setAttribute("style", "display: grid");
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }

    function HtmlClipBoard() {
        var copyText = document.getElementById("html-output");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }

    function CssClipBoard() {
        var copyText = document.getElementById("css-output");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }

    function applyStyles() {
        let templateStyles = "";
        let buttonStyles = "";

        for (let key in styling) {
            templateStyles += `${key}:${styling[key]};`
        }

        for (let key in stylingButton) {
            buttonStyles += `${key}:${stylingButton[key]};`
        }

        concatOutputCss(templateStyles, buttonStyles)
        return { templateStyles, buttonStyles }
    }

    function concatOutputCss(templateStyles, buttonStyles) {
        let index = document.getElementById("css-output").value.indexOf("\n")
        let str = document.getElementById("css-output").value.substring(0, index);
        document.getElementById("css-output").value = `${str}\n .template${template.TemplateId}{${templateStyles}}\n .template${template.TemplateId} .wp-block-button a, .template${template.TemplateId} tr:last-child td {${buttonStyles}}\n `
    }

    function fetchTemplate(id) {
        if (id < 10) {
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
    display: none;
    gap: 24px;
    margin: 16px auto;
    padding-bottom: 60px;
`

const HtmlGenerated = styled.textarea`
    width: 100%;
    height: 350px;
    margin: 8px auto;
    padding: 10px;
    background-color: #181f29;
    border: 1px solid #34d399;
    color: lightgray;
    font-size: 15.5px;
    font-family: 'Space Mono', monospace;
    resize: none;
`

const Button = styled.button`
    width: 65%;
    padding: 8px 24px;
    margin: 24px auto;
    background: #2c9374;
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