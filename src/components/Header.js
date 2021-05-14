import React from "react";
import styled from '@emotion/styled';
import DropdownMenu from "./DropdownMenu";


function Header() {

    return (
        <HeaderSection>
            {/* <UserActions>
                <Button>Iniciar sesión</Button>
                <Button>Registrar-se</Button>
            </UserActions> */}
            <DropdownMenu />
        </HeaderSection>
    )
}

export default Header;


const HeaderSection = styled.header`
  width: 100%;
  display: flex;
  padding: 16px;
  justify-content: end;
`

const UserActions = styled.div`
    display: flex;
    width: 25%;
    align-items: center;
    justify-content: space-around;
`

const Button = styled.button`
    padding: 12px 24px;
    background-color: #34d399;
    outline: 0;
    border: 0;
    border-radius: 15px;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
`