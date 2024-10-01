import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import WatchAppContext from '../../context/WatchAppContext'

import {
  LoginContainer,
  FormContainer,
  LoginImageLogo,
  InputLoginContainer,
  LoginButton,
  ErrorSubmit,
  LabelInput,
  InputUser,
  ContainerCheckbox,
  Checkbox,
  ShowPasswordLabel,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showError: false,
  }

  onChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  OnShowPassword = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  onSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  formSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  renderUsername = color => {
    const {username} = this.state
    return (
      <>
        <LabelInput color={color} htmlFor="username">
          USERNAME
        </LabelInput>
        <InputUser
          type="text"
          id="username"
          name="username"
          onChange={this.onChangeHandler}
          placeholder="Username"
          value={username}
        />
      </>
    )
  }

  renderPassword = color => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <>
        <LabelInput color={color} htmlFor="password">
          PASSWORD
        </LabelInput>
        <InputUser
          type={inputType}
          id="password"
          name="password"
          onChange={this.onChangeHandler}
          placeholder="Password"
          value={password}
        />
        <ContainerCheckbox>
          <Checkbox
            type="checkbox"
            id="checkbox"
            onChange={this.OnShowPassword}
          />
          <ShowPasswordLabel color={color} htmlFor="checkbox">
            Show Password
          </ShowPasswordLabel>
        </ContainerCheckbox>
      </>
    )
  }

  render() {
    const {showError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <WatchAppContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const bgColor = isDarkTheme ? '#212121' : '#f9f9f9'
          const bgFormColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const color = isDarkTheme ? '#ffffff' : '#94a3b8'
          const imgUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer bgColor={bgColor}>
              <FormContainer bgColor={bgFormColor} onSubmit={this.formSubmit}>
                <LoginImageLogo src={imgUrl} alt="website logo" />
                <InputLoginContainer>
                  {this.renderUsername(color)}
                </InputLoginContainer>
                <InputLoginContainer>
                  {this.renderPassword(color)}
                </InputLoginContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showError && <ErrorSubmit>*{errorMsg}</ErrorSubmit>}
              </FormContainer>
            </LoginContainer>
          )
        }}
      </WatchAppContext.Consumer>
    )
  }
}

export default LoginForm
