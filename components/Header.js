import React from "react";
import styled from '@emotion/styled';
import DropdownMenu from "./DropdownMenu";

import Link from "next/link";

function Header() {

    return (
        <HeaderSection>
            <Link href="/">
                <a>
                    <HeaderTitle>
                        <span>Bloques gutenberg</span>
                        <img src="/images/decoration/plugin.svg" alt="bloques gutenberg" />
                    </HeaderTitle>
                </a>
            </Link>
            <Menu>
                <DropdownMenuWrapper>
                    <Link href="/blog">Blog »</Link>
                    <DropdownContent>
                        <Link href="/blog/crear-bloque-para-wordpress"><DropdownOption>¿Como crear una caja o tabla en bloques gutenberg?</DropdownOption></Link>
                    </DropdownContent>
                </DropdownMenuWrapper>
            </Menu>
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
  & > a {
      text-decoration: none;
  }
`

const HeaderTitle = styled.div`
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

const Menu = styled.div`
    display: flex;
    justify-self: flex-end;
`

const DropdownMenuWrapper = styled.div`
    display: inline-block;
    cursor: pointer;
    color: white;
    & > a {
        color: white;
        text-decoration: none;
        padding: 8px 24px;
    }
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