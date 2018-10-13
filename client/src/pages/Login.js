import React from 'react'
import styled from 'styled-components'

const CenteredDiv = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const StyledLogin = styled.div`
  padding: 1rem;
  button {
    color: white;
    padding: 0.5rem;
    border-radius: 5%;
    margin-left: auto;
    margin-right: 0.25rem;
    min-width: 45%;
  }
`

const LoginButton = styled.button`
  background-color: black;
`

const RegisterButton = styled.button`
  background-color: green;
`

const InputGroup = styled.div`
  width: 50%;
  margin: 0.5rem 0;
  input {
    padding: 0.5rem;
  }
`
const ForgotPasswordButton = styled.button`
  background-color: #fff;
  border: 0;
  color: blue !important;
`

class Login extends React.PureComponent {
  handleSignUp = data => {
    console.log(data)
  }
  handleLogin = data => {
    console.log(data)
  }

  handleForgotPassword = data => {
    console.log('we are clicking the forget password')
    console.log(data)
  }

  render() {
    const { handleSignUp, handleLogin, handleForgotPassword } = this
    return (
      <CenteredDiv>
        <h1>Help 2 Be Helped</h1>
        <StyledLogin>
          <InputGroup>
            <input placeholder="username" />
          </InputGroup>
          <InputGroup>
            <input placeholder="password" />
          </InputGroup>
          <RegisterButton onClick={handleSignUp}>Register</RegisterButton>
          <LoginButton onClick={handleLogin}>Login</LoginButton>
          <ForgotPasswordButton onClick={handleForgotPassword}>
            Forgot password?
          </ForgotPasswordButton>
        </StyledLogin>
      </CenteredDiv>
    )
  }
}

export { Login }