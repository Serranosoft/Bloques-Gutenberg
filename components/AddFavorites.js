import React, { useContext, useState } from "react";
import styled from "@emotion/styled"
import { DBContext } from "./Firebase/UserDAO";
import { AuthContext } from "./Firebase/AuthDAO"
import {SuccessfulMessage, ErrorMessage} from "../styles/styledComponents"

function AddFavorites({ template, stylingButton, styling }) {

    const initialState = {
        templateName: ""
    }
    const { authUser } = useContext(AuthContext);
    const { setFavorite } = useContext(DBContext);
    const [inputValues, setInputValues] = useState(initialState);
    const { templateName } = inputValues;

    function setFavoriteTemplate() {
        if(authUser !== null) {
            if (templateName !== "") {
    
                let templateStyles = "";
                let buttonStyles = "";
    
                for (let key in styling) {
                    templateStyles += `${key}:${styling[key]};`
                }
    
                for (let key in stylingButton) {
                    buttonStyles += `${key}:${stylingButton[key]};`
                }
    
                let templateFavorite = {
                    TemplateName: templateName,
                    TemplateId: template.id,
                    TemplateHtml: template.TemplateHtml,
                    TemplateImg: template.TemplateImg,
                    TemplateCss: `${template.TemplateCss}\n .template${template.id}{${templateStyles}}\n .template${template.id} .wp-block-button a, .template${template.id} tr:last-child td {${buttonStyles}}\n`
                }
    
                setFavorite(authUser.uid, templateFavorite)
                setInputValues(initialState)
                document.getElementById("favorite-error").innerHTML = ""
                document.getElementById("favorite-sucess").innerHTML = "Plantilla guardada con éxito"
            } else {
                document.getElementById("favorite-error").innerHTML = "Introduce algún nombre"
                document.getElementById("favorite-sucess").innerHTML = ""
            }

        } else {
            document.getElementById("favorite-error").innerHTML = "Inicia sesión o registrate para guardar en favoritos"
        }

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputValues({ ...inputValues, [name]: value })
    }

    return (
        <>
            <AddFavoritesWrapper>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="templateName"
                    value={templateName}
                    placeholder="Guardar en favoritos"
                    maxLength="20"
                />
                <Button onClick={setFavoriteTemplate}>Guardar</Button>
            </AddFavoritesWrapper>
            <SuccessfulMessage id="favorite-sucess"></SuccessfulMessage>
            <ErrorMessage id="favorite-error"></ErrorMessage>
        </>
    )

}

export default AddFavorites


const AddFavoritesWrapper = styled.div`
    width: 35% !important;
    display: flex;
    align-self: end;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 8px;
    font-size: 13px;
    @media(max-width: 768px) {
        width: 95% !important;
    }
`

const Input = styled.input`
    height: 100%;
    display: block;
    padding: 5px 16px;
    color: white;
    background-color: #171e29;
    border: 3px solid #373c40;
    outline: 0;
    flex: 4;
    &:focus {
        border: 2px solid white;
    }
`

const Button = styled.button`
    padding: 5px 16px;
    margin: 0px 8px;
    background: #1f6952;
    text-align: center;
    color: white;
    cursor: pointer;
    transition: 0.5s;
    border: 0;
    border-radius: 3px;
    flex: 1;
    &:hover {
        transform: scale(0.95);
    }
`