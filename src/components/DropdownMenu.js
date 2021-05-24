import React from "react";
import styled from "@emotion/styled"
import { Link } from "react-router-dom";

function DropdownMenu() {

    return (
        <DropdownMenuWrapper>
            <LinkWrapper to="/iniciar-sesion">
                <span>Iniciar Sesión</span>
            </LinkWrapper>
            <DropdownContent>
                {/* <DropdownOption>Iniciar Sesión</DropdownOption> */}
                <DropdownOption>Cerrar Sesión</DropdownOption>
            </DropdownContent>
        </DropdownMenuWrapper>
    )
}

export default DropdownMenu;

const DropdownMenuWrapper = styled.div`
    display: inline-block;
    align-self: flex-end;
    padding: 8px 24px;
    border-radius: 15px;
    border: 1px solid #34d399;
    cursor: pointer;
    color: white;
    margin: 8px 24px;
    &:hover > div {
        display: block;
    }
`

const DropdownContent = styled.div`
    display: none;
    position: absolute;
    margin: 8px 0;
    background-color: #11171f;
    box-shadow: 0px 8px 16px 0px black;
    z-index: 1;
    & > span:hover, link:hover {
        background-color: #333333;
    }
`

const DropdownOption = styled.span`
    padding: 16px 16px;
    display: block;
`

const LinkWrapper = styled(Link)`
    color: white;
    text-decoration: none

`