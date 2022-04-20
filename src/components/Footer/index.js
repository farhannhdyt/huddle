import { Button } from '../../assets/styled/Button.styled'
import { Container } from '../../assets/styled/Container.styled'
import { FooterCopyright, FooterCopyrightWrapper, MenuItem, MenuSocialItem, MenuWrapper, StyledCta, StyledFooter } from './Footer.styled'

const Footer = () => {
  return (
    <StyledFooter>
      <StyledCta>
        <h1>Ready To Build Your Community?</h1>
        <Button bg="#ff0099" color="#fff">Get Started For Free</Button>
      </StyledCta>

      <Container mFooter="0">
        <img src='./images/logo_white.svg' />

        <MenuWrapper>
          <MenuItem>
            <ul>
              <li>
                <i class="fa-solid fa-location-dot"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>
                <span>+62-333-3333-3333</span>
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>
                <span>hello@huddle.com</span>
              </li>
            </ul>
          </MenuItem>

          <MenuItem>
            <ul>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>What We Do</a></li>
              <li><a href='#'>FAQ</a></li>
            </ul>
          </MenuItem>
          <MenuItem>
            <ul>
              <li><a href='#'>Careers</a></li>
              <li><a href='#'>Blog</a></li>
              <li><a href='#'>Contact Us</a></li>
            </ul>
          </MenuItem>
          <MenuSocialItem>
            <ul>
              <li>
                <a href='#'>
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </MenuSocialItem>
        </MenuWrapper>

        <FooterCopyrightWrapper>
          <FooterCopyright>&copy; Copyright { new Date().getFullYear() } Huddle, All Rights Reserved.</FooterCopyright>
        </FooterCopyrightWrapper>
      </Container>
    </StyledFooter>
  )
}

export default Footer