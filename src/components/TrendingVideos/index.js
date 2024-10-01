import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideBarNavigation from '../SideBarNavigation'
import WatchAppContext from '../../context/WatchAppContext'
import ViewVideo from '../ViewVideo'

import {
  TrendingSection,
  IconAndTitleContainer,
  TitleText,
  VideoList,
  TrendingHeader,
  LoaderWrapper,
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

class TrendingVideos extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderWrapper data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderWrapper>
  )

  renderVideosView = () => {
    const {trendingVideos} = this.state
    return (
      <WatchAppContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const iconBgColor = isDarkTheme ? '#0f0f0f' : '#e2e8f0'
          const titleBg = isDarkTheme ? '#212121' : '#f1f5f9'
          return (
            <>
              <TrendingHeader bgColor={titleBg}>
                <IconAndTitleContainer iconBgColor={iconBgColor}>
                  <HiFire size={35} color="#ff0000" />
                </IconAndTitleContainer>
                <TitleText color={textColor}>Trending</TitleText>
              </TrendingHeader>
              <VideoList>
                {trendingVideos.map(each => (
                  <ViewVideo key={each.id} videoDetails={each} />
                ))}
              </VideoList>
            </>
          )
        }}
      </WatchAppContext.Consumer>
    )
  }

  onRetry = () => {
    this.getVideos()
  }

  renderFailureView = () => {
    return (
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
                We are having some trouble to complete your request. <br />{' '}
                Please try again later.
              </ErrorNote>
              <RetryButton type="button" onClick={this.onRetry}>
                Retry
              </RetryButton>
            </ErrorView>
          )
        }}
      </WatchAppContext.Consumer>
    )
  }

  renderTrendingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <WatchAppContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <div>
              <Header />
              <SideBarNavigation />
              <TrendingSection data-testid="trending" bgColor={bgColor}>
                {this.renderTrendingVideos()}
              </TrendingSection>
            </div>
          )
        }}
      </WatchAppContext.Consumer>
    )
  }
}

export default TrendingVideos
