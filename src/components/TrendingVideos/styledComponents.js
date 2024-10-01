import styled from 'styled-components'

export const TrendingSection = styled.div`
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  background-color: ${props => props.bgColor};
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const TrendingHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-top: 20px;
  padding-bottom: 20px;
`

export const IconAndTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 80px;
  width: 80px;
  height: 80px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${props => props.iconBgColor};
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`

export const TitleText = styled.h1`
  color: ${props => props.color};
  font-family: Roboto;
  font-size: 25px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const VideoList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

export const LoaderWrapper = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ErrorView = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  background: none;
  flex-direction: column;
`

export const ErrorImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const ErrorHeading = styled.h1`
  font-size: 25px;
  text-align: center;
  font-family: Roboto;
  color: ${props => props.headingColor};
`

export const ErrorNote = styled.p`
  font-size: 18px;
  text-align: center;
  font-family: Roboto;
  color: ${props => props.noteColor};
`

export const RetryButton = styled.button`
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 3px;
  font-family: Roboto;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  color: #ffffff;
  font-size: 15px;
  background-color: #4f46e5;
  margin-bottom: 20px;
`
