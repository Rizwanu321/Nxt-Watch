import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 60px;
  overflow-y: auto;
  margin-bottom: 60px;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.color};
  padding-top: 20px;
  padding-bottom: 20px;
`

export const IconContainer = styled.div`
  justify-content: center;
  height: 80px;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  width: 80px;
  border-radius: 80px;
  background-color: ${props => props.iconBgColor};
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`

export const TitleText = styled.h1`
  font-family: Roboto;
  color: ${props => props.color};
  font-size: 25px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const VideoList = styled.ul`
  list-style-type: none;
  margin: 0px;
  flex-direction: column;
  padding: 0px;
  display: flex;
  margin-top: 30px;
`

export const NoVideosContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  background: none;
  justify-content: center;
`

export const NoVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NoVideosHeading = styled.h1`
  font-size: 25px;
  text-align: center;
  color: ${props => props.headingColor};
  font-family: Roboto;
`

export const NoVideosNote = styled.p`
  font-family: Roboto;
  color: ${props => props.noteColor};
  font-size: 18px;
  text-align: center;
`
