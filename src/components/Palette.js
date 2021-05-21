import React from "react";
import styled from "@emotion/styled"

function Palette({styling, changeStyling}) {

    function handleColor(event) {
        changeStyling({"background": event.target.value})
      }

    return (
        <>
            <form>
                <label>Color de la caja
                    <input type="color" value={styling.color} onChange={handleColor} />
                </label>
            </form>
        </>
    )
}

export default Palette