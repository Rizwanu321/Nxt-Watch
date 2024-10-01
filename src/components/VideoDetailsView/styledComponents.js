import styled from 'styled-components'

export const VideoDetailContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
export const VideoContainer = styled.div`
  padding: 20px;
`

export const Title = styled.p`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.color};
`

export const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

export const PlayVideoStatus = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => props.color};
`

export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`

export const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const SocialButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border: none;
  background: none;
  cursor: pointer;
  color: ${props => (props.value === true ? '#2563eb' : '#64748b')};
`

export const ButtonLabel = styled.button`
  background-color: transparant;
  border: none;
  cursor: pointer;
  color: ${props => (props.value === true ? '#2563eb' : '#64748b')};
  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const Divider = styled.hr`
  border: 1px solid #909090;
`

export const ChannelWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`

export const ChannelLogo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 20px;
`

export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelTitle = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.color};
  margin: 0px;
`

export const Subscribers = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => props.color};
`

export const Description = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.color};
`

export const ButtonWrapper = styled.div`
  display: flex;
  background: none;
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
