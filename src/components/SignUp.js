import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import { AuthContext } from './Firebase/AuthDAO';
import CTASignIn from "../images/decoration/cta-signin2.svg"
import star from "../images/decoration/star.svg"
import { Link } from "react-router-dom";
import { DBContext } from "./Firebase/UserDAO";
import { useHistory } from 'react-router-dom';


function SignUp() {

    const { register } = useContext(AuthContext);
    const { createUser } = useContext(DBContext)
    const history = useHistory();

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
        if(nameInput.length > 0) {
            register(mailInput, passwdInput)
                .then(authUser => {
                    createUser(authUser.user.uid, user)
                    history.push("/")
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
        <Section>
            <CTAWrapper>
                <CTA>
                    <H1>Crea tu cuenta GRATIS</H1>
                    <H3>Y consigue 2 plantillas premium gratis</H3>
                    <Image src={CTASignIn} />
                </CTA>
                <InfoWrapper>
                    <ImageStar src={star} />
                    <Text>Además podrás guardar en favoritos tus bloques personalizados</Text>
                </InfoWrapper>
                <InfoWrapper>
                    <ImageStar src={star} />
                    <Text>Desbloquea plantillas premium PARA SIEMPRE</Text>
                </InfoWrapper>
                <InfoWrapper>
                    <ImageStar src={star} />
                    <Text>Desbloquea todos los tipos de personalización TAMBIÉN PARA SIEMPRE</Text>
                </InfoWrapper>
            </CTAWrapper>
            <SignInWrapper>
                <form>
                    <Label>Nombre <span style={{ color: "red" }}>*</span>
                        <Input
                            type="text"
                            value={inputValues.nameInput}
                            name="nameInput"
                            onChange={handleChange}
                            placeholder="Manuel Scholz"
                            required
                        />
                    </Label>
                    <Label>Correo electrónico <span style={{ color: "red" }}>*</span>
                        <Input
                            type="text"
                            value={inputValues.mailInput}
                            name="mailInput"
                            onChange={handleChange}
                            placeholder="manuel@manu-scholz.com"
                        />
                    </Label>
                    <Label>Contraseña <span style={{ color: "red" }}>*</span>
                        <Input
                            type="password"
                            value={inputValues.passwdInput}
                            name="passwdInput"
                            onChange={handleChange}
                            placeholder="***********"
                        />
                    </Label>
                    <ErrorMessage id="error-msg"></ErrorMessage>
                    <Button onClick={onSubmit}>Crear Cuenta</Button>
                    <Text>¿Ya tienes una cuenta? <LinkWrapper to="/iniciar-sesion">Inicia sesión</LinkWrapper></Text>
                </form>
            </SignInWrapper>

        </Section>
    )


}

export default SignUp;

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

const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 90px;
    margin: 4px 0;
    align-content: flex-end;
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


const LinkWrapper = styled(Link)`
    color: #2c9978;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

const ErrorMessage = styled.p`
    font-size: 13px;
    color: red;
`

