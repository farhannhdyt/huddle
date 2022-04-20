import styled from 'styled-components'
import { Container } from '../../assets/styled/Container.styled'
import { Button } from '../../assets/styled/Button.styled'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
`

export const HeaderContainer = styled(Container)`
  padding: ${({ desktopPadding }) => desktopPadding};

  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    padding: ${({ mobilePadding }) => mobilePadding};
  }
`

export const HeaderBg = styled.div`
  background-image: url(./images/bg-hero-desktop.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    background-image: url(./images/bg-hero-mobile.svg)
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  @media(max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    width: 180px;
    height: 30px;
  }
`

export const NavButton = styled(Button)`
  @media(max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    padding: ${({ mobilePadding }) => mobilePadding};
  }
`

export const StyledHero = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  margin-top: 80px;
  margin-bottom: 20px;
  align-items: center;

  @media(max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    grid-template-columns: 1fr;
    text-align: center;
    row-gap: 50px;
  }
`

export const HeroParagraph = styled.p`
  margin: 30px 0;
  font-size: 18px;
`

export const Image = styled.img`
  width: 600px;
  justify-self: end;
`