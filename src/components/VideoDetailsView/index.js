import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiDislike, BiLike, BiListPlus} from 'react-icons/bi'
import Header from '../Header'
import SideBarNavigation from '../SideBarNavigation'
import WatchAppContext from '../../context/WatchAppContext'

import {
  VideoDetailContainer,
  LoaderContainer,
  VideoContainer,
  Title,
  StatusContainer,
  PlayVideoStatus,
  Dot,
  SocialButtonsContainer,
  SocialButton,
  ButtonLabel,
  Divider,
  ChannelLogo,
  ChannelWrapper,
  ChannelDetails,
  ChannelTitle,
  Subscribers,
  Description,
  ButtonWrapper,
  ErrorView,
  ErrorImage,
  ErrorHeading,
  ErrorNote,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetailView extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: [],
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  formattedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
  })

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = this.formattedData(data)
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideoDetailsView = () => {
    const {videoDetails, isLiked, isDisLiked} = this.state
    const {
      id,
      description,
      videoUrl,
      title,
      viewCount,
      publishedAt,
      profileImageUrl,
      name,
      subscriberCount,
    } = videoDetails

    return (
      <WatchAppContext.Consumer>
        {value => {
          const {
            isDarkTheme,
            addVideo,
            savedVideos,
            likedList,
            dislikedList,
            addAsLikedVideos,
            addAsDislikedVideos,
          } = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#64748b' : '#231f20'
          let isSaved
          const index = savedVideos.findIndex(
            eachVideo => eachVideo.id === videoDetails.id,
          )
          if (index === -1) {
            isSaved = false
          } else {
            isSaved = true
          }

          const onClickSave = () => {
            addVideo(videoDetails)
          }

          const clickLiked = () => {
            addAsLikedVideos(id)
            this.setState(prevState => ({
              isLiked: !prevState.isLiked,
              isDisLiked: false,
            }))
          }

          const clickDisLiked = () => {
            addAsDislikedVideos(id)
            this.setState(prevState => ({
              isDisLiked: !prevState.isDisLiked,
              isLiked: false,
            }))
          }

          const publishedTimeToNow = formatDistanceToNow(
            new Date(publishedAt),
            {addSuffix: true},
          )
            .replace('over ', '')
            .replace('almost ', '')

          return (
            <VideoDetailContainer
              data-testid="videoItemDetails"
              bgColor={bgColor}
            >
              <VideoContainer>
                <ReactPlayer url={videoUrl} controls width="100%" />
                <Title color={textColor}>{title}</Title>
                <StatusContainer>
                  <PlayVideoStatus color={textColor}>
                    {viewCount} views
                    <Dot> &#8226; </Dot>
                    {publishedTimeToNow}
                  </PlayVideoStatus>
                  <SocialButtonsContainer>
                    <ButtonWrapper>
                      <SocialButton
                        color={isLiked}
                        onClick={clickLiked}
                        value={likedList.includes(id)}
                      >
                        <BiLike size={25} />
                        <ButtonLabel
                          type="button"
                          value={likedList.includes(id)}
                        >
                          Like
                        </ButtonLabel>
                      </SocialButton>
                    </ButtonWrapper>
                    <ButtonWrapper>
                      <SocialButton
                        color={isDisLiked}
                        onClick={clickDisLiked}
                        value={dislikedList.includes(id)}
                      >
                        <BiDislike size={25} />
                        <ButtonLabel
                          type="button"
                          value={dislikedList.includes(id)}
                        >
                          Dislike
                        </ButtonLabel>
                      </SocialButton>
                    </ButtonWrapper>
                    <ButtonWrapper>
                      <SocialButton
                        color={isSaved}
                        onClick={onClickSave}
                        value={isSaved}
                      >
                        <BiListPlus size={25} />
                        <ButtonLabel type="button" value={isSaved}>
                          {isSaved ? 'Saved' : 'Save'}
                        </ButtonLabel>
                      </SocialButton>
                    </ButtonWrapper>
                  </SocialButtonsContainer>
                </StatusContainer>
                <Divider />
                <ChannelWrapper>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  <ChannelDetails>
                    <ChannelTitle color={textColor}>{name}</ChannelTitle>
                    <Subscribers color={textColor}>
                      {subscriberCount} Subscribers
                    </Subscribers>
                    <Description color={textColor}>{description}</Description>
                  </ChannelDetails>
                </ChannelWrapper>
              </VideoContainer>
            </VideoDetailContainer>
          )
        }}
      </WatchAppContext.Consumer>
    )
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  renderFailureSectionView = () => (
    <WatchAppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        const headingColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        const noteColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        return (
          <ErrorView>
            <ErrorImage src={failureImageUrl} alt="failure view" />
            <ErrorHeading headingColor={headingColor}>
              Oops! Something Went Wrong
            </ErrorHeading>
            <ErrorNote noteColor={noteColor}>
              We are having some trouble to complete your request. Please try
              again.
            </ErrorNote>
            <RetryButton type="button" onClick={this.onRetry}>
              Retry
            </RetryButton>
          </ErrorView>
        )
      }}
    </WatchAppContext.Consumer>
  )

  renderVideoDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoDetailsView()
      case apiStatusConstants.failure:
        return this.renderFailureSectionView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <SideBarNavigation />
        {this.renderVideoDetails()}
      </>
    )
  }
}

export default VideoDetailView
