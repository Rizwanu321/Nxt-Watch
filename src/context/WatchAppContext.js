import React from 'react'

const WatchAppContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  likedList: [],
  dislikedList: [],
  addAsLikedVideos: () => {},
  addAsDislikedVideos: () => {},
  toggleTheme: () => {},
  addVideo: () => {},
  changeTab: () => {},
})

export default WatchAppContext
