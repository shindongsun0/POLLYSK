import React, { Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import DetectAge from './views/DetectAge'

export default () => (
  <Fragment>
    <App />
    <GlobalStyle />
  </Fragment>
)

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Malgun Gothic', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  html {
    display: block;
    font-size: 30px;
    user-select: none;
    padding: 2.625rem 1.21875rem;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    outline: none;
    height: 100%;
  }

  html, #app, body {
    height: 100%;
  }
`

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <DetectAge />
      </AppContainer>
    )
  }
}

const AppContainer = styled.div`
  padding: 0.5rem;
  height: 100%;
`
