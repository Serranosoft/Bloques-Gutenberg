import React from "react";
import styled from '@emotion/styled'


function Template({ image }) {

    return (
        <TemplateWrapper className="rotate-in-2-cw">
                <TemplateImage src={(image)} className="hvr-float-shadow"/>
        </TemplateWrapper>
    )
}

export default Template;

const TemplateWrapper = styled.div`
    width: 100%;
    cursor: pointer;
    transition: 1s;
    &:hover {
        transform: scale(0.96)
    }
`

const TemplateImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
`