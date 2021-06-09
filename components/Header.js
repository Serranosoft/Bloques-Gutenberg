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