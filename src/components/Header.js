import React from "react";
import styled from '@emotion/styled';
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";
import "../resources/Animations.css"
import logo from "../images/decoration/plugin.svg"

function Header() {

    return (
        <HeaderSection>
            <HeaderTitle to="/">Bloques gutenberg<img src={logo} /></HeaderTitle>
            <DropdownMenu />
        </HeaderSection>
    )
}

export default Header;


const HeaderSection = styled.header`
  width: 100%;
  display: flex;
  padding: 16px 32px;
  align-items: center;
  justify-content: space-between;
`

const HeaderTitle = styled(Link)`
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    font-family: 'Texturina', serif;
    & > img {
        align-self: start;
        width: 25px;
        color: white;
        margin: 0 5px;
    }
`