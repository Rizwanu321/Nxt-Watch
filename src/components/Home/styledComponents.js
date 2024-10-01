import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.bgColor};
  margin-top: 60px;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-left: 250px;
  }
`

export const PromoContainer = styled.div`
  width: 100%;
  height: 200px;
  padding: 20px;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
`

export const PromoLeftSection = styled.div`
  width: 50%;
`

export const PromoRightSection = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const PromoImage = styled.img`
  height: 30px;
  width: 80px;
`

export const PromoButton = styled.button`
  color: #000000;
  background: none;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #000000;
  padding-left: 10px;
  padding-right: 10px;
`

export const PromoText = styled.p`
  font-family: 'Roboto';
  color: #000000;
  font-size: 15px;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`

export const PromoCloseButton = styled.button`
  height: 25px;
  border: none;
  background: none;
`

export const FilterContainer = styled.div`
  display: flex;
  height: 40px;
  border: 1px solid #909090;
  border-radius: 3px;
  margin: 20px;
  width: 60%;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`

export const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  width: 70px;
  border: none;
  cursor: 'pointer';
`

export const FilterInput = styled.input`
  background: none;
  padding: 5px;
  border: none;
  outline: none;
  width: 100%;
  color: ${props => props.color};
  font-family: Roboto;
`

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
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
export const VideoListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style-type: none;
  padding: 0;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

export const NoVideosContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
`

export const NoResultsImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NoResultsTitle = styled.h1`
  color: ${props => props.color};
  font-family: Roboto;
  font-size: 25px;
`

export const NoResultsMessage = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => props.color};
`
