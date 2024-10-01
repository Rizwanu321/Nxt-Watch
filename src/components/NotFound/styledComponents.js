import styled from 'styled-components'

export const StyledNotFoundContainer = styled.div`
  margin-top: 60px;
  overflow-y: auto;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  min-height: 92vh;
  background-color: ${props => props.bgColor};
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-left: 250px;
  }
`

export const NotFoundView = styled.div`
  background: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const NotFoundImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NotFoundHeading = styled.h1`
  text-align: center;
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.headingColor};
`

export const NotFoundNote = styled.p`
  color: ${props => props.noteColor};
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
`
