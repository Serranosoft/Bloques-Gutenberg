import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import Header from "./components/Header"
import Landing from './components/Landing'
import TemplateList from './components/TemplateList'
import { Route, BrowserRouter, Switch } from "react-router-dom";

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
                    font-family: 'Inter', sans-serif;
                    height: 100%;
                }
                body {
                    background-color: #1f2937;
                    color: white;
                }`
        }
      />
      <Header />
      <BrowserRouter>
        <Switch>
          <MainSection>
            <Route exact path="/" component={Landing} />
            <Route path="/plantillas" component={TemplateList} />
            <Route path="/personalizar" component={Landing} />
          </MainSection>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

const MainSection = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`