import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import { AuthContext } from '../components/Firebase/AuthDAO';
import Link from "next/link"
import { useRouter } from 'next/router'


function SignIn() {

    const { login } = useContext(AuthContext);
    const router = useRouter();

    const initialState = {
        mailInput: "",
        passwdInput: ""
    }

    const [inputValues, setInputValues] = useState(initialState)
    const { mailInput, passwdInput } = inputValues;

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputValues({ ...inputValues, [name]: value })
    }

    const onSubmit = event => {
        event.preventDefault();
        login(mailInput, passwdInput)
            .then(authUser => {
                setInputValues(initialState)
                router.push("/")
            })
            .catch(error => {
                console.log(error);
                document.getElementById("error-msg").innerHTML = error
            });
    }

    return (
        <Section>
            <CTAWrapper>
                <CTA>
                    <H1>Inicia Sesión</H1>
                    <H3>Y accede a todas las funciones extra</H3>
                    <Image src="/images/decoration/cta-signin2.svg" />
                </CTA>
                <InfoWrapper>
                    <ImageStar src="/images/decoration/star.svg" />
                    <Text>Además podrás guardar en favoritos tus bloques personalizados</Text>
                </InfoWrapper>
                <InfoWrapper>
                    <ImageStar src="/images/decoration/star.svg" />
                    <Text>Utiliza las plantillas premium</Text>
                </InfoWrapper>
                <InfoWrapper>
                    <ImageStar src="/images/decoration/star.svg" />
                    <Text>Utiliza todos los tipos de personalización</Text>
                </InfoWrapper>
            </CTAWrapper>
            <SignInWrapper>
                <form>
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
                    <Button onClick={onSubmit}>Iniciar sesión</Button>
                    <Text>¿Te has olvidado la contraseña? <Link href="/recuperar-contrasena"><LinkWrapper>Recupera tu contraseña</LinkWrapper></Link></Text>
                    <Text>¿No tienes una cuenta? <Link href="/registro"><LinkWrapper>Registrate</LinkWrapper></Link></Text>
                </form>
            </SignInWrapper>

        </Section>
    )


}

export default SignIn;

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
`

const H3 = styled.h3`
    font-size: 19px;
    font-weight: 400;
    color: lightgray;
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
    margin: 8px 0;
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

