import React from "react";
import styled from '@emotion/styled';
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";
import "../resources/Animations.css"
import logo from "../images/decoration/plugin.svg"

function Header() {

    return (
        <HeaderSection>
            <HeaderTitle to="/"><span>Bloques gutenberg</span><img src={logo} alt="bloques gutenberg"/></HeaderTitle>
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
  @media(max-width: 768px) {
      flex-direction: column;
      padding: 10px 8px;
  }
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
    @media(max-width: 768px) {
        display: block;
        font-size: 18px;
        margin: 8px 0;
    }
`