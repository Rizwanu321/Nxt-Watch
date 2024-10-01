import WatchAppContext from '../../context/WatchAppContext'

import {
  StyledLink,
  VideoItem,
  Thumbnail,
  VideoContent,
  VideoTitle,
  ViewsCount,
} from './styledComponents'

const GamingVideoCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <WatchAppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <StyledLink to={`/videos/${id}`} className="link">
            <VideoItem>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoContent>
                <VideoTitle color={textColor}>{title}</VideoTitle>
                <ViewsCount color={textColor}>
                  {viewCount} Watching Worldwide
                </ViewsCount>
              </VideoContent>
            </VideoItem>
          </StyledLink>
        )
      }}
    </WatchAppContext.Consumer>
  )
}

export default GamingVideoCard
