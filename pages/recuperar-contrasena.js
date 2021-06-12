import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import { AuthContext } from '../components/Firebase/AuthDAO';
import { useRouter } from 'next/router'
import Head from 'next/head'

function ResetPassword() {

    const router = useRouter();

    const initialState = {
        emailInput: ""
    }

    const [inputValues, setInputValues] = useState(initialState)
    const { resetPassword } = useContext(AuthContext);
    const { mailInput } = inputValues;

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputValues({ ...inputValues, [name]: value })
    }

    const onSubmit = event => {
        event.preventDefault();
        resetPassword(mailInput)
            .then(authUser => {
                router.push("/iniciar-sesion")
            })
            .catch(error => {
                console.log(error);
                document.getElementById("error-msg").innerHTML = error
            });

    }


    return (
        <>
            <Head>
                <title>Recupera tu contraseña - Recupera la contraseña de tu cuenta de la forma mas segura | Bloques Gutenberg</title>
                <meta name="description" content="Recupera la contraseña de tu cuenta de la forma mas segura en bloques-gutenberg.com" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Section>
                <CTAWrapper>
                    <CTA>
                        <H1>Recupera tu contraseña</H1>
                        <H3>¡Te enviaré un correo electrónico con la confirmación!</H3>
                        <Image src="/images/decoration/cta-signin2.svg" />
                    </CTA>
                </CTAWrapper>
                <SignInWrapper>
                    <form>
                        <Label>Correo electrónico <span style={{ color: "red" }}>*</span>
                            <Input
                                type="email"
                                value={mailInput}
                                name="mailInput"
                                onChange={handleChange}
                                placeholder="manuel@manu-scholz.com"
                            />
                        </Label>

                        <ErrorMessage id="error-msg"></ErrorMessage>
                        <Button onClick={onSubmit}>Recuperar contraseña</Button>
                    </form>
                </SignInWrapper>

            </Section>
        </>
    )
}


export default ResetPassword;


const Section = styled.section`
    width: 72%;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    align-items: center;
    padding: 20px;
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

const ErrorMessage = styled.p`
    font-size: 13px;
    color: red;
`
