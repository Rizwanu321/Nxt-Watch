import {withRouter} from 'react-router-dom'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FiLogOut} from 'react-icons/fi'
import {FaBars} from 'react-icons/fa'
import WatchAppContext from '../../context/WatchAppContext'

import {
  HomeLink,
  Navbar,
  Logo,
  Actions,
  ActionItems,
  ThemeToggle,
  LogoutTextButton,
  LogoutIcon,
  Profile,
  Modal,
  Close,
  Confirm,
  ModalText,
  ButtonGroup,
} from './styledComponents'

const Header = props => (
  <WatchAppContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const color = isDarkTheme ? '#ffffff' : '#00306e'

      const onChangeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <Navbar bgColor={bgColor}>
          <HomeLink to="/">
            <Logo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </HomeLink>
          <Actions>
            <ActionItems key="theme">
              <ThemeToggle
                type="button"
                data-testid="theme"
                onClick={onChangeTheme}
              >
                {isDarkTheme ? (
                  <BsBrightnessHigh color="#ffffff" size={25} />
                ) : (
                  <BsMoon size={25} />
                )}
              </ThemeToggle>
            </ActionItems>
            <ActionItems key="profile">
              <Profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ActionItems>
            <ActionItems key="logout">
              <Popup
                modal
                trigger={
                  <LogoutTextButton
                    type="button"
                    bgColor={bgColor}
                    color={color}
                  >
                    Logout
                  </LogoutTextButton>
                }
              >
                {close => (
                  <Modal bgColor={bgColor}>
                    <ModalText color={color}>
                      Are you sure, you want to logout?
                    </ModalText>
                    <ButtonGroup>
                      <Close
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </Close>
                      <Confirm type="button" onClick={onClickLogout}>
                        Confirm
                      </Confirm>
                    </ButtonGroup>
                  </Modal>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <LogoutIcon type="button">
                    <FiLogOut size={25} color={color} />
                  </LogoutIcon>
                }
                className="popup-content"
              >
                {close => (
                  <Modal bgColor={bgColor}>
                    <ModalText color={color}>
                      Are you sure, you want to logout?
                    </ModalText>
                    <ButtonGroup>
                      <Close
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </Close>
                      <Confirm type="button" onClick={onClickLogout}>
                        Confirm
                      </Confirm>
                    </ButtonGroup>
                  </Modal>
                )}
              </Popup>
            </ActionItems>
          </Actions>
        </Navbar>
      )
    }}
  </WatchAppContext.Consumer>
)

export default withRouter(Header)
