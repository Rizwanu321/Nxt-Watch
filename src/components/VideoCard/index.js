import {formatDistanceToNow} from 'date-fns'

import WatchAppContext from '../../context/WatchAppContext'

import {
  CardItem,
  ThumbnailImage,
  DetailsContainer,
  AvatarImage,
  SectionContent,
  VideoTitle,
  ChannelTitle,
  StatsAndTime,
  SeparatorDot,
  Linkvideo,
} from './styledComponents'

const VideoCard = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video

  const publishedTimeToNow = formatDistanceToNow(new Date(publishedAt))

  return (
    <WatchAppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <Linkvideo to={`/videos/${id}`}>
            <CardItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <DetailsContainer>
                <AvatarImage src={profileImageUrl} alt="channel logo" />
                <SectionContent>
                  <VideoTitle color={textColor}>{title}</VideoTitle>
                  <ChannelTitle color={textColor}>{name}</ChannelTitle>
                  <StatsAndTime color={textColor}>
                    {viewCount} views<SeparatorDot> &#8226; </SeparatorDot>{' '}
                    {publishedTimeToNow}
                  </StatsAndTime>
                </SectionContent>
              </DetailsContainer>
            </CardItem>
          </Linkvideo>
        )
      }}
    </WatchAppContext.Consumer>
  )
}

export default VideoCard
