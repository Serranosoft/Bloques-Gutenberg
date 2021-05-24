import React from "react";
import styled from "@emotion/styled";
import { AuthContext } from './Firebase/AuthDAO';

function SignIn() {
    return (
        <Section>
            <InfoWrapper>
                <h1>Infowrapper</h1>
            </InfoWrapper>
            <SignInWrapper>
                <h1>Sign In Form</h1>
            </SignInWrapper>

        </Section>
    )
}

const Section = styled.section`
    width: 85%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
`

const InfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 2px solid yellow;
`

const SignInWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 2px solid yellow;
`

export default SignIn;