import React from 'react'
import styled from 'styled-components'
import MeImage from '../../../../img/bannerImage.png'

//Styled Components
const BannerImageWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const MainImage = styled.img`
  padding: 0;
`

//React Component
const BannerImage: React.FC = () => {
  return (
    <BannerImageWrapper>
      <MainImage src={MeImage} alt="Image of me"></MainImage>
    </BannerImageWrapper>
  )
}
export default BannerImage
