import React from "react";
import styled from '@emotion/styled';
import DropdownMenu from "./DropdownMenu";


function Header() {

    return (
        <HeaderSection>
            <DropdownMenu />
        </HeaderSection>
    )
}

export default Header;


const HeaderSection = styled.header`
  width: 100%;
  display: flex;
  padding: 16px 32px;
  justify-content: end;
`