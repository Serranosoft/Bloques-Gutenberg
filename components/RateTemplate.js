import React, { useState, useEffect, useContext } from "react";
import styled from "@emotion/styled"
import { DBContext } from "../components/Firebase/UserDAO.js";
import StarRatingComponent from 'react-star-rating-component';
import {SuccessfulMessage, ErrorMessage} from "../styles/styledComponents"

function RateTemplate({isReady, template, authUser, getTotalRating}) {

    const [rating, rateTemplate] = useState(1);

    const { setTemplateRating, getUserTemplateRating } = useContext(DBContext)

    useEffect(() => {
        if(authUser !== null) {
            getUserTemplateRating(template.id, authUser.uid, rateTemplate)
        }
    }, [isReady])

    return (
        <div style={{ textAlign: "center", fontSize: 30 }}>
            <Label>Valora el bloque y comparte tu puntuación con un solo clic</Label>
            <StarRatingComponent
                name={"putTemplateRating"}
                value={rating}
                onStarClick={rateOnClick}
            />
            <ErrorMessage id="rate-template-error"></ErrorMessage>
            <SuccessfulMessage id="rate-template-success"></SuccessfulMessage>
        </div>
    )

    
    function rateOnClick(nextValue, prevValue, name) {
        if(authUser !== null) {
            setTemplateRating(template.id, authUser.uid, nextValue, getTotalRating)
            rateTemplate(nextValue)
            document.getElementById("rate-template-success").innerHTML = "Gracias por puntuar";
            document.getElementById("rate-template-error").innerHTML = "";
        } else {
            document.getElementById("rate-template-success").innerHTML = "";
            document.getElementById("rate-template-error").innerHTML = "Inicia sesión o registrate para poder valorar un bloque";
        }
    }
}

export default RateTemplate;


const Label = styled.p`
    font-size: 14px;
    color: lightgray;
`