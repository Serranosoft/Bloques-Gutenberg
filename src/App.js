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
      <AppSection>
        <Header />
        <BrowserRouter>
          <Switch>
            <MainSection>
              <Route exact path="/" component={Landing} />
              <Route path="/plantillas" component={TemplateList} />
            </MainSection>
          </Switch>
        </BrowserRouter>
      </AppSection>
    </>
  );
}

export default App;

const AppSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const MainSection = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`