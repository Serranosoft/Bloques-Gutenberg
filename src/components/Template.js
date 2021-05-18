import React from "react";
import styled from '@emotion/styled'

function Template({image, htmlCode, cssCode}) {
    return (
        <TemplateWrapper>
            <TemplateImage src={(image)}/>
        </TemplateWrapper>
    )
}

export default Template;

const TemplateWrapper = styled.div`
    width: 100%;
    cursor: pointer;
    transition: 1s;
    &:hover {
        transform: scale(1.1);
    }
`

const TemplateImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
`