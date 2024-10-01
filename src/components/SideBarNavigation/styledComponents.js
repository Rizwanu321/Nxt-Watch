import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const TopBar = styled.div`
  display: flex;
`

export const LargeNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 92%;
  width: 250px;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  position: fixed;
  top: 60px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  flex-grow: 1;
  padding: 0;
  margin-top: 0;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const NavItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
`

export const NavText = styled.p`
  font-family: 'Roboto';
  margin-left: 15px;
  font-size: 18px;
  color: ${props => props.color};
`

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

export const ContactTitle = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 25px;
  color: ${props => props.color};
`

export const ContactIconsWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ContactIcon = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin-right: 10px;
`

export const ContactMessage = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.color};
`

export const SmallNavContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  background-color: ${props => props.bgColor};
  position: fixed;
  bottom: 0;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
