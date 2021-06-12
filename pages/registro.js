import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import { AuthContext } from '../components/Firebase/AuthDAO';
import { DBContext } from "../components/Firebase/UserDAO";
import Link from "next/link";
import { useRouter } from 'next/router'
import Head from 'next/head'


function SignUp() {

    const { register } = useContext(AuthContext);
    const { createUser } = useContext(DBContext)
    const router = useRouter();

    const initialState = {
        nameInput: "",
        mailInput: "",
        passwdInput: ""
    }

    const [inputValues, setInputValues] = useState(initialState)
    const { nameInput, mailInput, passwdInput } = inputValues;

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputValues({ ...inputValues, [name]: value })
    }

    const onSubmit = event => {
        event.preventDefault();
        let user = {
            nameInput,
            mailInput
        }
        if (nameInput.length > 0) {
            register(mailInput, passwdInput)
                .then(authUser => {
                    createUser(authUser.user.uid, user)
                    router.push("/")
                })
                .then(() => {
                    setInputValues(initialState)
                })
                .catch(error => {
                    document.getElementById("error-msg").innerHTML = error
                });
        } else {
            document.getElementById("error-msg").innerHTML = "Rellena todos los campos"
        }
    }


    return (
        <>
            <Head>
                <title>Crear una cuenta - Crea una cuenta GRATIS y consigue bloques premium para SIEMPRE | Bloques Gutenberg</title>
                <meta name="description" content="Registrate en bloques-gutenberg.com para conseguir acceso ilimitado a todas las plantillas premium y poder guardar en favoritos los bloques que has creado "/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Section>
                <CTAWrapper>
                    <CTA>
                        <H1>Crea tu cuenta GRATIS</H1>
                        <H3>Y consigue 2 plantillas premium gratis</H3>
                        <Image src="/images/decoration/cta-signin2.svg" />
                    </CTA>
                    <InfoWrapper>
                        <ImageStar src="/images/decoration/star.svg" />
                        <Text>Además podrás guardar en favoritos tus bloques personalizados</Text>
                    </InfoWrapper>
                    <InfoWrapper>
                        <ImageStar src="/images/decoration/star.svg" />
                        <Text>Desbloquea plantillas premium PARA SIEMPRE</Text>
                    </InfoWrapper>
                    <InfoWrapper>
                        <ImageStar src="/images/decoration/star.svg" />
                        <Text>Desbloquea todos los tipos de personalización TAMBIÉN PARA SIEMPRE</Text>
                    </InfoWrapper>
                </CTAWrapper>
                <SignInWrapper>
                    <form>
                        <Label>Nombre <span style={{ color: "red" }}>*</span>
                            <Input
                                type="text"
                                value={nameInput}
                                name="nameInput"
                                onChange={handleChange}
                                placeholder="Manuel Scholz"
                                maxLength="30"
                                required
                            />
                        </Label>
                        <Label>Correo electrónico <span style={{ color: "red" }}>*</span>
                            <Input
                                type="text"
                                value={mailInput}
                                name="mailInput"
                                onChange={handleChange}
                                placeholder="manuel@manu-scholz.com"
                            />
                        </Label>
                        <Label>Contraseña <span style={{ color: "red" }}>*</span>
                            <Input
                                type="password"
                                value={passwdInput}
                                name="passwdInput"
                                onChange={handleChange}
                                placeholder="***********"
                            />
                        </Label>
                        <ErrorMessage id="error-msg"></ErrorMessage>
                        <Button onClick={onSubmit}>Crear Cuenta</Button>
                        <Text>¿Ya tienes una cuenta? <Link href="/iniciar-sesion"><LinkWrapper>Inicia sesión</LinkWrapper></Link></Text>
                    </form>
                </SignInWrapper>

            </Section>
        </>
    )


}

export default SignUp;

const Section = styled.section`
    width: 72%;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    align-items: center;
    padding: 20px;
    justify-content: center;
    @media(max-width: 768px) {
        width: 95%;
        grid-template-columns: 1fr;
        margin: 0 auto;
        grid-auto-flow: dense
    }
`

const CTAWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const SignInWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    /* @media(max-width: 768px) {
        grid-row: 1;
    } */
`

const CTA = styled.div`
    width: 100%;
    margin-bottom: 24px;
    text-align: center;
    @media(max-width: 768px) {
        margin-bottom: 8px;
    }
`

const H1 = styled.h1`
    font-size: 46px;
    font-weight: bold;
    @media(max-width: 768px) {
        font-size: 33px;
    }
`

const H3 = styled.h3`
    font-size: 19px;
    font-weight: 400;
    color: lightgray;
    @media(max-width: 768px) {
        font-size: 16px;
    }
`

const Image = styled.img`
    width: 240px;
    margin: 10px 0;
`

const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 90px;
    margin: 4px 0;
    align-content: flex-end;
    @media(max-width: 768px) {
        display: none;
    }
`

const ImageStar = styled.img`
    width: 30px;
    margin: 0 8px;
`

const Text = styled.p`
    font-size: 15px;
    color: #e3e3e3;
`

const Label = styled.label`
    display: block;
    color: white;
    font-size: 13px;
    margin: 24px 0;
    text-align: left;
`

const Input = styled.input`
    width: 100%;
    display: block;
    padding: 12px 16px;
    margin: 8px 0;
    color: white;
    background-color: #171e29;
    border: 3px solid #373c40;
    outline: 0;
    font-size: 14px;
    &:focus {
        border: 2px solid white;
    }
`

const Button = styled.button`
    width: 100%;
    padding: 10px 24px;
    margin: 16px auto;
    background: #1f6952;
    font-size: 17px;
    text-align: center;
    color: white;
    cursor: pointer;
    transition: 0.5s;
    border: 0;
    border-radius: 3px;
    &:hover {
        transform: scale(0.95);
    }
`


const LinkWrapper = styled.a`
    color: #2c9978;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

const ErrorMessage = styled.p`
    font-size: 13px;
    color: red;
`

