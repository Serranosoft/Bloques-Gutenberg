import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import { AuthContext } from '../components/Firebase/AuthDAO';
import Link from "next/link"
import { useRouter } from 'next/router'
import Head from 'next/head'
import {ErrorMessage, AboutMe, FormWrapper, WelcomeInfo} from "../styles/styledComponents"

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
        <>
            <Head>
                <title>Iniciar sesión - Bloques Gutenberg</title>
                <meta name="description" content="Inicia sesión en tu cuenta para poder guardar tus bloques gutenberg favoritos, acceso a tus datos y poder usar plantillas premium" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Section>
                <FormWrapper>
                    <div>
                        <h1>Inicia Sesión</h1>
                        <h3>Y accede a todas las funciones extra</h3>
                    </div>
                    <form>
                        <label>Correo electrónico
                            <input
                                type="text"
                                value={mailInput}
                                name="mailInput"
                                onChange={handleChange}
                                placeholder="manuel@manu-scholz.com"
                            />
                        </label>
                        <label>Contraseña
                            <input
                                type="password"
                                value={passwdInput}
                                name="passwdInput"
                                onChange={handleChange}
                                placeholder="***********"
                            />
                        </label>
                        <ErrorMessage id="error-msg"></ErrorMessage>
                        <button onClick={onSubmit} className="hvr-sweep-to-right">Iniciar sesión</button>
                        <p>¿Te has olvidado la contraseña? <Link href="/recuperar-contrasena"><a>Recupera tu contraseña</a></Link></p>
                        <p>¿No tienes una cuenta? <Link href="/registro"><a>Registrate</a></Link></p>
                    </form>
                </FormWrapper>
                <WelcomeInfo>
                    <p>Bienvenido/a de nuevo</p>
                    <span>Estoy muy contento de volverte a ver</span>
                    <span>Te deseo mucha suerte diseñando los bloques para tu web o nicho</span>
                    <span>Si tienes alguna duda puedes preguntarme por Twitter 👍</span>
                    <AboutMe>
                        <div>
                            <img src="/images/decoration/avatar.jpg" />
                        </div>
                        <div>
                            <span>Hola, soy Manuel Scholz, fundador de Bloques Gutenberg, puedes seguir el progreso de la construcción de esta herramienta en <a href="https://twitter.com/ImScholz" target="_blank" style={{ color: "#34d399", textDecoration: "underline" }}>mi Twitter</a></span>
                        </div>
                    </AboutMe>
                </WelcomeInfo>

            </Section>
        </>
    )


}

export default SignIn;

const Section = styled.section`
    width: 65%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    @media(max-width: 768px) {
        width: 95%;
        grid-template-columns: 1fr;
        margin: 0 auto;
        grid-auto-flow: dense
    }
`