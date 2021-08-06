import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import { AuthContext } from '../components/Firebase/AuthDAO';
import { DBContext } from "../components/Firebase/UserDAO";
import Link from "next/link";
import { useRouter } from 'next/router'
import Head from 'next/head'
import { FormWrapper, ErrorMessage, WelcomeInfo, AboutMe } from "../styles/styledComponents"

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
                <title>Crear una cuenta - Bloques Gutenberg</title>
                <meta name="description" content="Registrate en bloques-gutenberg.com para conseguir acceso ilimitado a todas las plantillas premium y poder guardar en favoritos los bloques que has creado " />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Section>
                <FormWrapper>
                    <div>
                        <h1>Crea una cuenta</h1>
                        <h3>Consigue acceso a todas las plantillas</h3>
                    </div>
                    <form>
                        <label>Nombre
                            <input
                                type="text"
                                value={nameInput}
                                name="nameInput"
                                onChange={handleChange}
                                placeholder="Manuel Scholz"
                                maxLength="30"
                                required
                            />
                        </label>
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
                        <p>Al crear una cuenta, aceptas recibir en tu correo información sobre plantillas nuevas o actualizaciones importantes (Prometo no hacer nada de spam)</p>
                        <ErrorMessage id="error-msg"></ErrorMessage>
                        <button onClick={onSubmit} className="hvr-sweep-to-right">Crear Cuenta</button>
                        <p>¿Ya tienes una cuenta? <Link href="/iniciar-sesion"><a>Inicia sesión</a></Link></p>
                    </form>
                </FormWrapper>
                <WelcomeInfo>
                    <p>Gracias por crear una cuenta 🥰</p>
                    <span>Ahora podrás disfrutar de todas las ventajas de la plataforma</span>
                    <span>Acceso ilimitado a todas las actuales y próximas plantillas</span>
                    <span>Guarda tus bloques favoritos ya personalizados</span>
                    <span>Puntúa los bloques y aparece en la lista de <Link href="/estadisticas" passHref><a>estadísticas</a></Link></span>
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

export default SignUp;

const Section = styled.section`
    width: 65%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    justify-content: center;
    @media(max-width: 768px) {
        width: 95%;
        grid-template-columns: 1fr;
        margin: 0 auto;
        grid-auto-flow: dense
    }
`


