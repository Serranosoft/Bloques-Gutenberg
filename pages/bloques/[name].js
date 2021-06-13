import React, { useState, useEffect } from "react";
import styled from "@emotion/styled"
import Templates from "../../resources/Templates.js"
import Palette from "../../components/Palette"
import AddFavorites from "../../components/AddFavorites.js";
import Head from 'next/head'

function PersonalizeTemplate(props) {
    const template = props;
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
        "border-radius": "7px"
    })


    useEffect(() => {
        let btn = document.querySelector(`.template${template.id} .wp-block-button a, .template${template.id} tr:last-child td a`);
        if (btn != null) {
            btn.setAttribute("style", applyStyles().buttonStyles)
        }
    }, [stylingButton])

    useEffect(() => {
        document.querySelector(`.template${template.id}`).setAttribute("style", applyStyles().templateStyles)
    }, [styling])

    return (
        <>
            <Head>
                <title>Personaliza tu bloque gutenberg | Bloques Gutenberg</title>
                <meta name="description" content="Diseña y personaliza tu bloque gutenberg: tabla o caja para tu nicho SEO de Amazon Afiliados o Adsense en Wordpress" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LandingTitle>Personaliza tu  <span style={{
                color: "#34d399",
                textAlign: "center"
            }}>plantilla</span></LandingTitle>

            <Workspace>
                <DecorationArrow src="/images/decoration/curve-arrow-right.svg" id={template.id} />
                <ArrowText id={template.id}>Así es como quedará en tu página web</ArrowText>
                <div dangerouslySetInnerHTML={{ __html: template.TemplateHtml }}></div>
                <Palette
                    id={template.id}
                    styling={styling}
                    changeStyling={changeStyling}
                    stylingButton={stylingButton}
                    changeButton={changeButton}
                />
                <AddFavorites
                    template={template}
                    stylingButton={stylingButton}
                    styling={styling}
                />
                <Button onClick={showResult}>OBTENER CÓDIGO</Button>
            </Workspace>
            <CodeSpace id="codespace">
                <div>
                    <p>Cópialo en la entrada/página de tu Wordpress para pegar el bloque</p>
                    <HtmlGenerated id="html-output" value={template.TemplateHtml} readOnly onClick={HtmlClipBoard}></HtmlGenerated>
                    <SuccessfulMessage id="html-copied" className="slide-top">¡Copiado!</SuccessfulMessage>
                </div>
                <div>
                    <p>Cópialo en CSS Adicional (Personalizar {'>'} CSS Adicional)</p>
                    <HtmlGenerated id="css-output" value={template.TemplateCss} readOnly onClick={CssClipBoard}></HtmlGenerated>
                    <SuccessfulMessage id="css-copied" className="slide-top">¡Copiado!</SuccessfulMessage>
                </div>
            </CodeSpace>
        </>
    )


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

        let copied = document.getElementById("html-copied");
        copied.setAttribute("style", "display: block")
        setTimeout(() => {
            copied.setAttribute("style", "display: none")
        }, 1500)
    }

    function CssClipBoard() {
        var copyText = document.getElementById("css-output");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");

        let copied = document.getElementById("css-copied");
        copied.setAttribute("style", "display: block")
        setTimeout(() => {
            copied.setAttribute("style", "display: none")
        }, 1500)
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
        document.getElementById("css-output").value = `${str}\n .template${template.id}{${templateStyles}}\n .template${template.id} .wp-block-button a, .template${template.id} tr:last-child td a {${buttonStyles}}\n `
    }
}

export const getStaticPaths = async () => {
    return {
        paths: Templates.map((el) => ({
            params: {
                name: el.name
            },
        })),
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const name = context.params.name;
    return {
        props: Templates.find((el) => el.name === name),
    };
}

export default PersonalizeTemplate;


const LandingTitle = styled.h1`
    margin-top: 24px;
    margin-bottom: 32px;
    font-size: 60px;
    font-family: 'Texturina', serif;
    color: white;
    word-spacing: -5px;
    @media(max-width: 768px) {
        text-align: center
        padding: 36px 8px 8px 8px;
        font-size: 33px;
        line-height: 1.3;
        word-spacing: 1px;
        margin-bottom: 16px;
    }
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
    @media(max-width: 768px) {
        width: 95%;
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
    margin: 8px auto 32px auto;
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
    padding: 10px 24px;
    margin: 16px auto;
    background: #1f6952;
    font-size: 17px;
    text-align: center;
    color: white;
    cursor: pointer;
    transition: 0.5s;
    border: 0;
    border-radius: 3px;
    &:hover {
        transform: scale(0.95);
    }
`

const DecorationArrow = styled.img`
    width: 50px;
    position: relative;
    top: ${props =>
        props.id < 10 ? '50px' : '70px'};
    left: ${props =>
        props.id < 10 ? '-450px' : '-240px'};
    @media(max-width: 768px) {
        display: none;
    }
    
`

const ArrowText = styled.span`
    position: relative;
    top: ${props =>
        props.id < 10 ? '-30px' : '-10px'};
    left: ${props =>
        props.id < 10 ? '-450px' : '-240px'};
    color: #34d399;
    text-align: center;
    font-family: 'Texturina', serif;
    font-size: 19px;
    @media(max-width: 768px) {
        display: none;
    }
`

const SuccessfulMessage = styled.span`
    display: none;    
    font-size: 25px;
    color: #2b702f;
    text-align: center;
    transition: 1s;
`