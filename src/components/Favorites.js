import React, { useContext, useEffect, useState } from "react";
import styled from '@emotion/styled'
import { DBContext } from "./Firebase/UserDAO";
import { AuthContext } from "./Firebase/AuthDAO";
import { Redirect } from 'react-router-dom';

function Favorites() {

    const { getFavorites, removeFavorite } = useContext(DBContext)
    const { authUser } = useContext(AuthContext);

    const [favorites, handleFavorites] = useState([]);

    function fetchFavorites() {
        getFavorites(authUser.uid, handleFavorites)
    }

    function removeFromFavorite(key) {
        removeFavorite(authUser.uid, handleFavorites, key)
    }

    useEffect(() => {
        fetchFavorites();
        //eslint-disable-next-line
    }, [authUser])

    function submitHtml() {
        var copyText = document.getElementById("html-output");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }

    function submitCss() {
        var copyText = document.getElementById("css-output");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }
    if(!authUser) {
        return (<Redirect to="/" />)
    } else {
        return (
            <>
                <LandingTitle>Encuentra tus bloques  <span style={{
                    color: "#34d399",
                    textAlign: "center"
                }}> favoritos</span></LandingTitle>
                <LandingSubtitle>Pincha en los botones para copiar en el portapeles el código HTML o el código CSS de tu plantilla</LandingSubtitle>
                <FavoritesWrapper>
                    {favorites != null &&
                        favorites.map((el) => {
                            return (
                                <FavoriteTemplate>
                                    <FavoriteName>{el.TemplateName}</FavoriteName>
                                    <FavoriteImage src={el.TemplateImg} />
                                    <ActionWrapper>
                                        <Button onClick={submitHtml}>Código HTML</Button>
                                        <Button onClick={submitCss}>Código CSS</Button>
                                    </ActionWrapper>
                                    <Delete onClick={() => removeFromFavorite(el.key)}>Borrar de favoritos</Delete>
                                    <ActionWrapper>
                                        <HtmlGenerated id="html-output" value={el.TemplateHtml} />
                                        <HtmlGenerated id="css-output" value={el.TemplateCss} />
                                    </ActionWrapper>
                                </FavoriteTemplate>
                            )
                        })
                    }
                </FavoritesWrapper>
            </>
        )
    }
}

export default Favorites;

const LandingTitle = styled.h1`
    margin-top: 24px;
    font-size: 50px;
    font-family: 'Texturina', serif;
    color: white;
    word-spacing: -2px;
    text-align: center;
    @media(max-width: 768px) {
        padding: 36px 8px 8px 8px;
        font-size: 33px;
        line-height: 1.3;
        word-spacing: 1px;
    }
`

const LandingSubtitle = styled.p`
    width: 650px;
    margin: 0 auto;
    text-align: center;
    font-size: 17px;
    @media(max-width: 768px) {
        padding: 8px;
        font-size: 14px;
        width: 100%;
    }
`

const FavoritesWrapper = styled.div`
    width: 50%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
    @media(max-width: 768px) {
        width: 95%;
    }
`

const FavoriteTemplate = styled.div`
    width: 100%;
    min-height: 250px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FavoriteName = styled.h3`
    font-size: 28px;
    margin: 8px auto;
    text-align: center;
    word-break: break-all;
`

const FavoriteImage = styled.img`
    width: 100%;
    max-height: 380px;
`

const ActionWrapper = styled.div`
    width: 95%;
    display: flex;
    align-items: space-evenly;
    margin: 5px auto;
    @media(max-width: 768px) {
        margin: 12px 8px;
    }
`

const Button = styled.button`
    padding: 8px 16px;
    margin: 0px 8px;
    background: #1f6952;
    color: white;
    cursor: pointer;
    transition: 0.5s;
    border: 0;
    border-radius: 3px;
    flex: 1;
    &:hover {
        transform: scale(0.95);
    }
`

const Delete = styled.button`
    padding: 8px 16px;
    background: #691f1f;
    color: white;
    cursor: pointer;
    transition: 0.5s;
    border: 0;
    border-radius: 3px;
    &:hover {
        transform: scale(0.95);
    }
`

const HtmlGenerated = styled.textarea`
    position: absolute;
    left: -1000px;
    top: -1000px;
    height: 75px;
    margin: 8px auto;
    padding: 10px;
    background-color: #181f29;
    border: 1px solid #34d399;
    color: lightgray;
    font-size: 15.5px;
    font-family: 'Space Mono', monospace;
    resize: none;
`