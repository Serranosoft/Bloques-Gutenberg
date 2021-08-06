import styled from '@emotion/styled';

const AboutMe = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 16px;
    align-items: center;
    margin: 24px auto 80px auto;
    border: 1px solid gray;
    border-radius: 15px;
    padding: 16px 24px;
    & > div {
      width: 100%;
      margin: 0 auto;
    }
    & img {
      width: 100%;
      border-radius: 50%;
      margin: 0 auto;
      text-align: center;
      @media(max-width: 768px) {
        width: 25%;
      }
      @media(max-width: 480px) {
          width: 55%;
      }
    }
    & span {
      font-size: 14px;
      color: lightgray;
      @media(max-width: 768px) {
        text-align: center;
        line-height: 1.45;
      }
    }
    @media(max-width: 768px) {
      width: 95%;
      grid-template-columns: 1fr;
      & > div {
        display: flex;
      }
    }
    @media(max-width: 480px) {
      width: 100%;
    }
    `

const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px;
    border-radius: 7px;
    box-shadow: 0 0 25px #151b24;
    @media(max-width: 768px) {
        box-shadow: none;
    }
    & > div {
        margin-bottom: 24px;
        text-align: center;
        @media(max-width: 768px) {
            margin-bottom: 8px;
        }
        & > h1 {
            font-size: 42px;
            font-weight: bold;
        }
        & > h3 {
            font-size: 18px;
            font-weight: 400;
            color: lightgray;
        }
    }
    & > form {
        p {
            font-size: 15px;
            color: #e3e3e3;
            margin: 8px 0;
        }
        label {
            display: block;
            color: white;
            font-size: 13px;
            margin: 24px 0;
            text-align: left;
        }
        input {
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
        }
        button {
            width: 100%;
            padding: 16px 24px;
            margin: 16px auto;
            background: #1f6952;
            font-size: 20px;
            text-align: center;
            color: white;
            cursor: pointer;
            transition: 0.5s;
            border: 0;
            border-radius: 30px;
            &:hover {
                transform: scale(0.95);
            }
        }
        a {
            color: #2c9978;
            text-decoration: none;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`

const WelcomeInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px;
    background-color: #151b24;
    border-radius: 7px;
    & > p {
        font-size: 28px;
        margin: 16px 0;
    }
    & > span {
        font-size: 16px;
        margin: 10px 0;
    }
    & > div {
        align-self: flex-end;
    }
`

const SuccessfulMessage = styled.span`
    display: block;
    font-size: 15px;
    color: #2d8a33;
    flex: 1;
`

const ErrorMessage = styled.span`
    display: block;
    font-size: 15px;
    color: #f00c0c;
    flex: 1;
`

export { ErrorMessage, AboutMe, FormWrapper, WelcomeInfo, SuccessfulMessage }