import '../styles/globals.css'
import "../styles/Animations.css"
import "../styles/TemplatesStyles.css"
import { AuthDAO } from '../components/Firebase/AuthDAO';
import { UserDAO } from '../components/Firebase/UserDAO';
import styled from '@emotion/styled'
import Header from "../components/Header"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <AuthDAO>
      <UserDAO>
        <Header />
        <MainSection>
          <Component {...pageProps} />
        </MainSection>
        <Footer />
      </UserDAO>
    </AuthDAO>
  )
}

export default MyApp

const MainSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
`