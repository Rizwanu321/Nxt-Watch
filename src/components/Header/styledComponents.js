import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  padding: 10px;
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const Logo = styled.img`
  height: 30px;
  width: 80px;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 100px;
  }
`

export const Actions = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  padding: 0px;
`
export const ActionItems = styled.li`
  list-style-type: none;
`
export const ThemeToggle = styled.button`
  border: none;
  background: none;
  margin-right: 10px;
`

export const LogoutTextButton = styled.button`
  margin-left: 6px;
  border: 1px solid ${props => props.color};
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-radius: 5px;
  padding: 5px 10px;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LogoutIcon = styled.button`
  border: none;
  background: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Profile = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 150px;
  width: 250px;
  background-color: ${props => props.bgColor};
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`

export const Close = styled.button`
  border: 1px solid grey;
  background-color: transparent;
  padding: 8px 12px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px 20px;
  }
`

export const Confirm = styled.button`
  align-self: flex-end;
  border: 1px solid #3b82f6;
  background-color: #3b82f6;
  color: white;
  padding: 8px 12px;
  margin: 10px;
  cursor: pointer;
  border-radius: 6px;
  font-family: Roboto;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px 20px;
  }
`

export const ModalText = styled.p`
  font-family: 'Roboto';
  margin: 10px;
  color: ${props => props.color};
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const HomeLink = styled(Link)`
  text-decoration: none;
`
