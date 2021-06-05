import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import Header from "./components/Header"
import Landing from './components/Landing'
import TemplateList from './components/TemplateList'
import { Route, BrowserRouter, Switch } from "react-router-dom";
import PersonalizeTemplate from './components/PersonalizeTemplate'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Account from './components/Account'
import ResetPassword from './components/ResetPassword'
import Favorites from './components/Favorites'

function App() {
  return (
    <>
      <Global
        styles={css`
                *,*::after,*::before {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                
                html {
                    font-family: 'Open Sans', sans-serif;
                    height: 100%;
                }
                body {
                    background-color: #1f2937;
                    color: white;
                }`
        }
      />
      <BrowserRouter>
      <Header />
        <Switch>
          <MainSection>
            <Route exact path="/" component={Landing} />
            <Route path="/plantillas" component={TemplateList} />
            <Route path="/personalizar" component={PersonalizeTemplate} />
            <Route path="/iniciar-sesion" component={SignIn} />
            <Route path="/registro" component={SignUp} />
            <Route exact path="/cuenta" component={Account} />
            <Route path="/recuperar-contraseña" component={ResetPassword} />
            <Route exact path="/cuenta/favoritos" component={Favorites} />
          </MainSection>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

const MainSection = styled.section`
    width: 100%;
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width: 768px) {
      height: 100vh;
    }
`