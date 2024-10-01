import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const StyledItemLink = styled(Link)`
  text-decoration: none;
`

export const ListItem = styled.li`
  background: none;
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    padding-left: 40px;
    flex-direction: row;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

export const VideoDetails = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ContentSection = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

export const Title = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.color};
`

export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 13px;
  color: ${props => props.color};
`

export const ViewsAndDate = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => props.color};
`

export const Dot = styled.span`
  width: 20px;
  height: 20px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 50%;
`
