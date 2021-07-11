import React, { useContext } from "react";
import styled from "@emotion/styled"
import Link from "next/link";
import { AuthContext } from './Firebase/AuthDAO';
import { DBContext } from "./Firebase/UserDAO";
import { useRouter } from 'next/router'

function DropdownMenu() {
    const { authUser, signOut } = useContext(AuthContext);
    const { userName } = useContext(DBContext)
    const router = useRouter();

    function closeSession() {
        signOut();
        router.push("/")
    }

    return (
        <div>
            {!authUser && authUser !== "" ?
                <>
                    <Link href="/registro" passHref>
                        <a>
                            <DropdownMenuWrapper>
                                <span>Registro</span>
                            </DropdownMenuWrapper>
                        </a>
                    </Link>
                    <Link href="/iniciar-sesion">
                        <a>
                            <DropdownMenuWrapper>
                                <span>Iniciar Sesión</span>
                            </DropdownMenuWrapper>
                        </a>
                    </Link>
                </>
                :
                <DropdownMenuWrapper logged>
                    <Link href="/cuenta" passHref>
                        <a>
                            <div>
                                <span>{userName !== "" ? userName : "Cargando..."}</span>
                            </div>
                        </a>
                    </Link>
                    <DropdownContent>
                        <DropdownOption onClick={closeSession}>Cerrar Sesión</DropdownOption>
                    </DropdownContent>
                </DropdownMenuWrapper>
            }
        </div>
    )
}

export default DropdownMenu;


const DropdownMenuWrapper = styled.div`
    display: inline-block;
    padding: ${props =>
        props.logged ? '0px' : '8px 24px'};
    color: white;
    border-radius: 15px;
    border: 1px solid #34d399;
    cursor: pointer;
    margin: 8px 18px;
    transition: .7s;
    & > a {
        padding: ${props =>
            props.logged ? '8px 24px' : '0px'};
        display: block;
        color: white;
        text-decoration: none;
    } 
    &:hover {
        transform: scale(0.95);   
    }
    &:hover > div {
        display: block;
    }
`

const DropdownContent = styled.div`
    display: none;
    position: absolute;
    margin: 0px 0;
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