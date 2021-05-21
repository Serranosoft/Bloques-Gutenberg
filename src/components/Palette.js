import React from "react";
import styled from "@emotion/styled"

function Palette({ styling, changeStyling }) {

    function handleBgColor(event) {
        changeStyling({ 
            ...styling,
            background: event.target.value
        })
    }

    function handleColor(event) {
        changeStyling({ 
            ...styling,
            color: event.target.value
        })
    }

    

    return (
        <>
            <form>
                <label>Color de la caja
                    <input type="color" value={styling.background} onChange={handleBgColor} />
                </label>
                <label>Color de la letra
                    <input type="color" value={styling.color} onChange={handleColor} />
                </label>
            </form>
        </>
    )
}

export default Palette