import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header'
import SideBarNavigation from '../SideBarNavigation'
import WatchAppContext from '../../context/WatchAppContext'
import VideoCard from '../VideoCard'

import {
  MainContainer,
  PromoContainer,
  PromoImage,
  PromoText,
  PromoButton,
  PromoLeftSection,
  PromoRightSection,
  PromoCloseButton,
  FilterContainer,
  FilterInput,
  FilterButton,
  SpinnerContainer,
  ErrorView,
  ErrorImage,
  ErrorHeading,
  ErrorNote,
  RetryButton,
  VideoListContainer,
  NoResultsImage,
  NoResultsMessage,
  NoResultsTitle,
  NoVideosContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videos: [],
    searchInput: '',
    showBanner: true,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResults = () => {
    this.getVideos()
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderLoadingSectionView = () => (
    <SpinnerContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </SpinnerContainer>
  )

  renderVideosSectionView = () => {
    const {videos} = this.state
    return (
      <WatchAppContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
          const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
          return (
            <>
              {videos.length !== 0 ? (
                <VideoListContainer>
                  {videos.map(each => (
                    <VideoCard video={each} key={each.id} />
                  ))}
                </VideoListContainer>
              ) : (
                <NoVideosContainer>
                  <NoResultsImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos"
                  />
                  <NoResultsTitle color={headingColor}>
                    No Search results found
                  </NoResultsTitle>
                  <NoResultsMessage color={noteColor}>
                    Try different key words or remove search filter
                  </NoResultsMessage>
                  <RetryButton type="button" onClick={this.onRetry}>
                    Retry
                  </RetryButton>
                </NoVideosContainer>
              )}
            </>
          )
        }}
      </WatchAppContext.Consumer>
    )
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
              We are having some trouble to complete your request. <br /> Please
              try again later.
            </ErrorNote>
            <RetryButton type="button" onClick={this.onRetry}>
              Retry
            </RetryButton>
          </ErrorView>
        )
      }}
    </WatchAppContext.Consumer>
  )

  renderHomeSections = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosSectionView()
      case apiStatusConstants.failure:
        return this.renderFailureSectionView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingSectionView()
      default:
        return null
    }
  }

  render() {
    const {searchInput, showBanner} = this.state
    return (
      <WatchAppContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <>
              <Header />
              <SideBarNavigation />
              <MainContainer data-testid="home" bgColor={bgColor}>
                {showBanner && (
                  <PromoContainer data-testid="banner">
                    <PromoLeftSection>
                      <PromoImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <PromoText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </PromoText>
                      <PromoButton type="button">GET IT NOW</PromoButton>
                    </PromoLeftSection>
                    <PromoRightSection>
                      <PromoCloseButton
                        type="button"
                        data-testid="close"
                        onClick={this.closeBanner}
                      >
                        <AiOutlineClose size={25} />
                      </PromoCloseButton>
                    </PromoRightSection>
                  </PromoContainer>
                )}
                <FilterContainer>
                  <FilterInput
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={this.onChangeInput}
                    color={textColor}
                  />
                  <FilterButton
                    type="button"
                    data-testid="searchButton"
                    onClick={this.getSearchResults}
                  >
                    <AiOutlineSearch size={20} />
                  </FilterButton>
                </FilterContainer>
                {this.renderHomeSections()}
              </MainContainer>
            </>
          )
        }}
      </WatchAppContext.Consumer>
    )
  }
}

export default Home
