import React, { useState, useEffect, useContext } from "react";
import styled from "@emotion/styled"
import { DBContext } from "../components/Firebase/UserDAO.js";
import StarRatingComponent from 'react-star-rating-component';

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
            <ErrorMessage id="error-msg"></ErrorMessage>
        </div>
    )

    
    function rateOnClick(nextValue, prevValue, name) {
        if(authUser !== null) {
            setTemplateRating(template.id, authUser.uid, nextValue, getTotalRating)
            rateTemplate(nextValue)
            document.getElementById("error-msg").innerHtml= "";
        } else {
            document.getElementById("error-msg").innerHTML = "Registrate para poder valorar un bloque";
        }
    }
}

export default RateTemplate;


const Label = styled.p`
    font-size: 14px;
    color: lightgray;
`

const ErrorMessage = styled.span`
    display: block;
    font-size: 13px;
    color: red;
    flex: 1;
`