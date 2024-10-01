import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const VideoItem = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: none;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`

export const Thumbnail = styled.img`
  width: 100vw;
  height: 300px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`

export const VideoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
  margin-bottom: 0px;
`

export const ViewsCount = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`
