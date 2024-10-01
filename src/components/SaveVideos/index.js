import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import SideBarNavigation from '../SideBarNavigation'
import WatchAppContext from '../../context/WatchAppContext'
import ViewVideo from '../ViewVideo'

import {
  Container,
  TitleContainer,
  IconContainer,
  TitleText,
  VideoList,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosNote,
} from './styledComponents'

const SaveVideos = () => (
  <WatchAppContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      // console.log(savedVideos)

      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
      const iconBgColor = isDarkTheme ? '#0f0f0f' : '#e2e8f0'
      const titleBg = isDarkTheme ? '#212121' : '#f1f5f9'
      return (
        <>
          <Header />
          <SideBarNavigation />
          <Container data-testid="savedVideos" bgColor={bgColor}>
            {savedVideos.length > 0 ? (
              <>
                <TitleContainer color={titleBg}>
                  <IconContainer iconBgColor={iconBgColor}>
                    <CgPlayListAdd size={35} color="#ff0000" />
                  </IconContainer>
                  <TitleText color={textColor}>Saved Videos</TitleText>
                </TitleContainer>
                <VideoList>
                  {savedVideos.map(each => (
                    <ViewVideo key={each.id} videoDetails={each} />
                  ))}
                </VideoList>
              </>
            ) : (
              <NoVideosContainer>
                <NoVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoVideosHeading headingColor={headingColor}>
                  No saved videos found
                </NoVideosHeading>
                <NoVideosNote noteColor={noteColor}>
                  You can save your videos while watching them
                </NoVideosNote>
              </NoVideosContainer>
            )}
          </Container>
        </>
      )
    }}
  </WatchAppContext.Consumer>
)

export default SaveVideos
