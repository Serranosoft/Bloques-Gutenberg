import '../styles/globals.css'
import "../styles/Animations.css"
import "../styles/TemplatesStyles.css"
import { AuthDAO } from '../components/Firebase/AuthDAO';
import { UserDAO } from '../components/Firebase/UserDAO';
import styled from '@emotion/styled'
import Header from "../components/Header"

function MyApp({ Component, pageProps }) {
  return (
    <AuthDAO>
      <UserDAO>
        <Header />
        <MainSection>
          <Component {...pageProps} />
        </MainSection>
      </UserDAO>
    </AuthDAO>
  )
}

export default MyApp

const MainSection = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width: 768px) {
      height: 100vh;
    }
`