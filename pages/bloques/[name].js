import React, { useState, useEffect, useContext } from "react";
import styled from "@emotion/styled"
import Templates from "../../resources/Templates.js"
import Palette from "../../components/Palette"
import AddFavorites from "../../components/AddFavorites.js";
import RestrictedContent from "../../components/RestrictedContent";
import Head from 'next/head'
import { AuthContext } from '../../components/Firebase/AuthDAO';
import { DBContext } from "../../components/Firebase/UserDAO.js";
import { generateRandomId } from "../../lib/utils"
import StarRatingComponent from 'react-star-rating-component';
import RateTemplate from "../../components/RateTemplate"

function PersonalizeTemplate(props) {

    const template = props;

    const { authUser } = useContext(AuthContext);
    const { getTemplateTotalRating } = useContext(DBContext)

    const [styling, changeStyling] = useState({
        color: "#1C1C1C",
        background: "#ffffff",
        "letter-spacing": "0px",
        "word-spacing": "1px",
        "border-top-left-radius": "0px",
        "border-top-right-radius": "0px",
        "border-bottom-left-radius": "0px",
        "border-bottom-right-radius": "0px",
        "border": "1px solid #d3d3d3",
        "border-color": "#d3d3d3"
    });

    const [stylingButton, changeButton] = useState({
        background: "#272c30",
        color: "#ffffff",
        "border-radius": "7px",
        "font-weight": "normal",
        "padding-top": "10px",
        "padding-bottom": "10px",
        "padding-left": "20px",
        "padding-right": "20px"
    })

    const [id, inmutableId] = useState(generateRandomId());
    const [templateRating, getTotalRating] = useState(null);
    const [isReady, handleReady] = useState(false)

    useEffect(() => {
        if (isReady) {
            let btn = document.querySelectorAll(`.template${template.id} .wp-block-button a, .template${template.id} tr:last-child td a`);
            if (btn != null) {
                for (let i = 0; i < btn.length; i++) {
                    btn[i].setAttribute("style", applyStyles().buttonStyles)
                }
            }
        }
    }, [stylingButton, isReady])

    useEffect(() => {
        if (isReady) {
            document.querySelector(`.template${template.id}`).setAttribute("style", applyStyles().templateStyles)
        }
    }, [styling, isReady])

    useEffect(() => {
        getTemplateTotalRating(template.id, getTotalRating)
    }, [isReady])

    if (isReady) {
        return (
            <>
                <Head>
                    <title>Personalizar: {template.name.replace(/-/g, ' ')} - Bloques Gutenberg</title>
                    <meta name="description" content="Diseña y personaliza tu bloque gutenberg: tabla o caja para tu nicho SEO de Amazon Afiliados o Adsense en Wordpress" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <LandingTitle>Personaliza tu  <span style={{
                    color: "#34d399",
                    textAlign: "center"
                }}>plantilla</span></LandingTitle>

                <Workspace>
                    <DecorationArrow src="/images/decoration/curve-arrow-right.svg" className="scale-up-hor-right" type={template.type} />
                    <ArrowText className="scale-up-hor-right" type={template.type}>Así es como quedará en tu página web, visita la web en tu móvil para ver la versión adaptada</ArrowText>
                    <div style={{ fontSize: 28, textAlign: "center" }}>
                        <StarRatingComponent
                            name={"templateRate"}
                            value={templateRating}
                            editing={false}
                        />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: template.TemplateHtml }}></div>
                    <Palette
                        id={template.id}
                        styling={styling}
                        changeStyling={changeStyling}
                        stylingButton={stylingButton}
                        changeButton={changeButton}
                    />
                    <RateTemplate
                        isReady={isReady}
                        template={template}
                        authUser={authUser}
                        getTotalRating={getTotalRating}
                    />
                    <Button onClick={showResult}>OBTENER CÓDIGO</Button>
                    <AddFavorites
                        template={template}
                        stylingButton={stylingButton}
                        styling={styling}
                    />
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
    } else {
        if (authUser !== "" && templateRating !== null) {
            if (authUser === null && template.id === 1 || authUser === null && template.id === 6) {
                return (<RestrictedContent />)
            } else {
                handleReady(true)
            }
        }
        return (
            <div className="skeleton-2wv2iwtyaua"></div>
        )
    }

    function applyStyles() {
        let templateStyles = "";
        let buttonStyles = "";

        for (let key in styling) {
            templateStyles += `${key}:${styling[key]}!important;`
        }

        for (let key in stylingButton) {
            buttonStyles += `${key}:${stylingButton[key]}!important;`
        }

        concatOutputCss(templateStyles, buttonStyles)
        return { templateStyles, buttonStyles }
    }

    function applyIdToHtml() {
        document.getElementById("html-output").value = template.TemplateHtml
        let index = template.TemplateHtml.lastIndexOf(`template${template.id}`);
        let value = document.getElementById("html-output").value
        document.getElementById("html-output").value = value.substring(0, index) + `template${template.id} ${id}` + value.substring(index + `template${template.id}`.length)
    }

    function concatOutputCss(templateStyles, buttonStyles) {
        let index = document.getElementById("css-output").value.indexOf("\n")
        let str = document.getElementById("css-output").value.substring(0, index);
        document.getElementById("css-output").value = `${str}\n.${id}{${templateStyles}}\n .${id} .wp-block-button a, .${id} tr:last-child td a {${buttonStyles}}\n `
        applyIdToHtml();
    }

    function showResult() {
        let codespace = document.getElementById("codespace");
        codespace.setAttribute("style", "display: grid");
        window.scrollTo({ top: document.body.scrollHeight - 1000, behavior: "smooth" });
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
    margin: 16px 0;
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
    margin: 16px auto 24px auto;
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
    padding-bottom: 30px;
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
        props.type === "box" ? '80px' : '30px'};
    left: ${props =>
        props.type === "box" ? '-450px' : '-210px'};
    @media(max-width: 920px) {
        display: none;
    }
    @media(max-width: 1280px) {
        top: ${props =>
        props.type === "box" ? '80px' : '80px'};
        left: ${props =>
        props.type === "box" ? '-400px' : '-390px'};
    } 
`

const ArrowText = styled.span`
    position: relative;
    top: ${props =>
        props.type === "box" ? '-5px' : '-55px'};
    left: ${props =>
        props.type === "box" ? '-300px' : '-230px'};
    color: #34d399;
    text-align: center;
    font-family: 'Texturina', serif;
    font-size: 19px;
    @media(max-width: 920px) {
        display: none;
    }
    @media(max-width: 1280px) {
        top: ${props =>
        props.type === "box" ? '-5px' : '-15px'};
        left: ${props =>
        props.type === "box" ? '-250px' : '-270px'};
    }
    @media(min-width: 1920px) {
        top: ${props =>
        props.type === "box" ? '-15px' : '-55px'};
        left: ${props =>
        props.type === "box" ? '-500px' : '-230px'};
    }
    @media(min-width: 3840px) {
        top: ${props =>
        props.type === "box" ? '-15px' : '-55px'};
        left: ${props =>
        props.type === "box" ? '-990px' : '-230px'};
    }
`

const SuccessfulMessage = styled.span`
    display: none;    
    font-size: 25px;
    color: #2b702f;
    text-align: center;
    transition: 1s;
`