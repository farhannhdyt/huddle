import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: #00252E;
  padding-bottom: 50px;
`

export const StyledCta = styled.div`
  width: 45%;
  margin: 0 auto;
  padding: 50px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  text-align: center;
  transform: translateY(-6em);

  h1 {
    font-size: 25px;
    margin-bottom: 20px;
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    width: 90%;
    padding: 50px 5px;

    h1 {
      font-size: 20px;
    }

    button {
      font-size: 15px;
      margin-top: 10px;
    }
  }
`

export const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 40% repeat(3, 1fr);
  gap: 30px;
  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const MenuItem = styled.div`
  span, p {
    color: #fff;
    opacity: 0.6;
    font-size: 16px;
  }

  li:first-child {
    display: flex;
  }

  li {
    list-style: none;
    margin: 20px 0;
  }

  i {
    margin-right: 15px;
    color: #fff;
  }

  a {
    color: #fff;
    opacity: 0.6;
    text-decoration: none;
    font-size: 16px;
    transition: 0.2s;
  }

  a:hover {
    opacity: 1;
  }
`

export const MenuSocialItem = styled.div`
  ul {
    display: flex;
  }

  li {
    list-style: none;
    margin: 0 10px;
  }
  
  a {
    color: #fff;
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, 0.6);
    padding: 8px 15px;
    border-radius: 50px;
  }

  i {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    ul {
      justify-content: center;
    }
  }
`

export const FooterCopyrightWrapper = styled.div`
  text-align: right;
  padding-top: 30px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    text-align: center;
  }
`

export const FooterCopyright = styled.p`
  display: inline-block;
  color: #fff;
  opacity: 0.6;
  font-size: 15px;
  margin-top: 20px;
  text-align: right;
`