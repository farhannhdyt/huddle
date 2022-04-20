import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Container } from './assets/styled/Container.styled'
import GlobalStyles, { theme } from './assets/styled/GlobalStyles'
import {
  Content,
  Footer,
  Header
} from './components'
import content from './content'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <Header />
        <Container>
          { content.map((item, index) => (
            <Content key={index} content={item} />
          )) }
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App