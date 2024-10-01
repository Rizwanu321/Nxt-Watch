import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import WatchAppContext from '../../context/WatchAppContext'

import {
  TopBar,
  LargeNavContainer,
  NavItems,
  StyledLink,
  NavItem,
  NavText,
  ContactDetails,
  ContactTitle,
  ContactIconsWrapper,
  ContactIcon,
  ContactMessage,
  SmallNavContainer,
} from './styledComponents'

class SideBarNavigation extends Component {
  renderSidebarTab = () => (
    <WatchAppContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeTab} = value
        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        const activeTabBg = isDarkTheme ? '#424242' : '#d7dfe9'

        const clickHomeTab = () => {
          changeTab('Home')
        }
        const clickTrendingTab = () => {
          changeTab('Trending')
        }
        const clickGamingTab = () => {
          changeTab('Gaming')
        }
        const clickSavedTab = () => {
          changeTab('Saved')
        }

        return (
          <TopBar>
            <LargeNavContainer bgColor={bgColor}>
              <NavItems>
                <StyledLink to="/">
                  <NavItem
                    key="home"
                    bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                    onClick={clickHomeTab}
                  >
                    <AiFillHome
                      size={25}
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Home</NavText>
                  </NavItem>
                </StyledLink>

                <StyledLink to="/trending">
                  <NavItem
                    key="trending"
                    bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                    onClick={clickTrendingTab}
                  >
                    <HiFire
                      size={25}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Trending</NavText>
                  </NavItem>
                </StyledLink>

                <StyledLink to="/gaming">
                  <NavItem
                    key="gaming"
                    bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                    onClick={clickGamingTab}
                  >
                    <SiYoutubegaming
                      size={25}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Gaming</NavText>
                  </NavItem>
                </StyledLink>

                <StyledLink to="/saved-videos">
                  <NavItem
                    key="saved"
                    bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                    onClick={clickSavedTab}
                  >
                    <CgPlayListAdd
                      size={25}
                      color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Saved Videos</NavText>
                  </NavItem>
                </StyledLink>
              </NavItems>
              <ContactDetails>
                <ContactTitle color={textColor}>CONTACT US</ContactTitle>
                <ContactIconsWrapper>
                  <ContactIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactIconsWrapper>
                <ContactMessage color={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactMessage>
              </ContactDetails>
            </LargeNavContainer>
            <SmallNavContainer bgColor={bgColor}>
              <StyledLink to="/">
                <AiFillHome
                  size={25}
                  onClick={clickHomeTab}
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                />
              </StyledLink>
              <StyledLink to="/trending">
                <HiFire
                  size={25}
                  onClick={clickTrendingTab}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                />
              </StyledLink>
              <StyledLink to="/gaming">
                <SiYoutubegaming
                  size={25}
                  onClick={clickGamingTab}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                />
              </StyledLink>
              <StyledLink to="/saved-videos">
                <CgPlayListAdd
                  size={25}
                  onClick={clickSavedTab}
                  color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                />
              </StyledLink>
            </SmallNavContainer>
          </TopBar>
        )
      }}
    </WatchAppContext.Consumer>
  )

  render() {
    return <>{this.renderSidebarTab()}</>
  }
}

export default SideBarNavigation
