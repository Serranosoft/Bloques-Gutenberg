import React from "react";
import styled from '@emotion/styled'
import { DBContext } from "./Firebase/UserDAO";
import { useHistory } from 'react-router-dom';

function Favorites() {

    function fetchFavorites() {
        
    }


    return (
        <>
        <LandingTitle>Encuentra tus bloques  <span style={{
                color: "#34d399",
                textAlign: "center"
            }}> favoritos</span></LandingTitle>
            <h1>AJAJAJAJJAJAJAAJ</h1>
            <FavoritesWrapper>
                <FavoriteTemplate>
                    <h3>Nombre</h3>
                </FavoriteTemplate>
                <FavoriteTemplate>
                    <h3>Nombre</h3>
                </FavoriteTemplate>
                <FavoriteTemplate>
                    <h3>Nombre</h3>
                </FavoriteTemplate>
                <FavoriteTemplate>
                    <h3>Nombre</h3>
                </FavoriteTemplate>
            </FavoritesWrapper>
        </>
    )
}

export default Favorites;

const LandingTitle = styled.h1`
    margin-top: 24px;
    font-size: 50px;
    font-family: 'Texturina', serif;
    color: white;
    word-spacing: -2px;
`

const FavoritesWrapper = styled.div`
    width: 85%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    justify-content: center;
    border: 1px solid yellow;
    margin: 24px auto;
`

const FavoriteTemplate = styled.div`
    width: 100%;
    min-height: 250px;
    border: 1px solid #171e29;
`