import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import WatchAppContext from './context/WatchAppContext'
import VideoDetailsView from './components/VideoDetailsView'
import SaveVideos from './components/SaveVideos'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    savedVideos: [],
    isDarkTheme: false,
    activeTab: 'Home',
    likedList: [],
    dislikedList: [],
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addVideo = video => {
    this.setState(prevState => {
      const {savedVideos} = prevState
      const isVideoSaved = savedVideos.some(
        eachVideo => eachVideo.id === video.id,
      )

      if (isVideoSaved) {
        const updatedVideos = savedVideos.filter(
          eachVideo => eachVideo.id !== video.id,
        )
        return {savedVideos: updatedVideos}
      } else {
        return {savedVideos: [...savedVideos, video]}
      }
    })
  }

  addAsLikedVideos = id => {
    const {likedList, dislikedList} = this.state
    if (dislikedList.includes(id)) {
      this.setState({dislikedList: dislikedList.filter(each => each !== id)})
    }
    if (likedList.includes(id)) {
      this.setState({likedList: likedList.filter(each => each !== id)})
    } else {
      this.setState({likedList: [...likedList, id]})
    }
  }

  addAsDislikedVideos = id => {
    const {likedList, dislikedList} = this.state
    if (likedList.includes(id)) {
      this.setState({likedList: likedList.filter(each => each !== id)})
    }
    if (dislikedList.includes(id)) {
      this.setState({dislikedList: dislikedList.filter(each => each !== id)})
    } else {
      this.setState({dislikedList: [...dislikedList, id]})
    }
  }

  render() {
    const {savedVideos, isDarkTheme, activeTab, likedList, dislikedList} =
      this.state
    return (
      <WatchAppContext.Provider
        value={{
          savedVideos,
          isDarkTheme,
          activeTab,
          likedList,
          dislikedList,
          toggleTheme: this.toggleTheme,
          changeTab: this.changeTab,
          addVideo: this.addVideo,
          addAsLikedVideos: this.addAsLikedVideos,
          addAsDislikedVideos: this.addAsDislikedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailsView}
          />
          <ProtectedRoute exact path="/saved-videos" component={SaveVideos} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </WatchAppContext.Provider>
    )
  }
}

export default App
