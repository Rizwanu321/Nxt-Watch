import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Linkvideo = styled(Link)`
  text-decoration: none;
`
export const CardItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const AvatarImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 20px;
`

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`

export const VideoTitle = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.color};
`

export const ChannelTitle = styled.p`
  font-family: Roboto;
  font-size: 13px;
  color: ${props => props.color};
`

export const StatsAndTime = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => props.color};
`

export const SeparatorDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
