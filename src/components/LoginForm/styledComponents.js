import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 25px;
  border-radius: 8px;
  background-color: ${props => props.bgColor};
  width: 95%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const LoginImageLogo = styled.img`
  align-self: center;
  width: 180px;
  margin-bottom: 15px;
`

export const InputLoginContainer = styled.div`
  margin-top: 15px;
  width: 100%;
`

export const LoginButton = styled.button`
  border: none;
  border-radius: 5px;
  width: 100%;
  background-color: #3b82f6;
  font-family: 'Roboto';
  color: #ffffff;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 15px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ErrorSubmit = styled.p`
  font-family: 'Roboto';
  color: #ff0b37;
  font-size: 12px;
`

export const LabelInput = styled.label`
  font-size: 12px;
  color: ${props => props.color};
  font-family: 'Roboto';
  font-weight: bold;
`

export const InputUser = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  padding: 8px;
  width: 100%;
  color: #475569;
  border-radius: 4px;
  margin-top: 5px;
  outline: none;
  border: 1px solid #cbd5e1;
  background-color: transparent;
`
export const ContainerCheckbox = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Checkbox = styled.input`
  margin-right: 5px;
  width: 15px;
  height: 15px;
`
export const ShowPasswordLabel = styled.label`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
`
