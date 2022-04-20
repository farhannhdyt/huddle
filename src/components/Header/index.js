import { Button } from '../../assets/styled/Button.styled'
import { 
  HeaderBg, 
  HeaderContainer, 
  HeroParagraph, 
  Image, 
  Logo, 
  Nav, 
  StyledHeader, 
  StyledHero,
  NavButton
} from './Header.styled'

const Header = () => {
  return (
    <StyledHeader>
      <HeaderBg>  
        <HeaderContainer desktopPadding="40px 0" mobilePadding="40px 10px">
          <Nav>
            <Logo src='./images/logo.svg' alt="Logo"/>

            <a href="#">
              <NavButton mobilePadding="15px 40px">Try it Free</NavButton>
            </a>
          </Nav>

          <StyledHero>
            <div>
              <h1>Build The Community Your Fans Will Love</h1>

              <HeroParagraph>
                Huddle re-imagines the way we build communities. You have a voice,
                but so does your audience. Create connections with your users as
                you engage in genuine discussion.
              </HeroParagraph>

              <a href="#">
                <Button bg='#ff0099' color='#fff'>
                  Get Started For Free
                </Button>
              </a>
            </div>

            <Image src='./images/illustration-mockups.svg' alt='Hero Illustration' />
          </StyledHero>
        </HeaderContainer>
      </HeaderBg>
    </StyledHeader>
  )
}

export default Header