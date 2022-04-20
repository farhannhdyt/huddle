import styled from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({ layout }) => layout || 'row'};
  gap: 80px;

  img {
    width: 80%;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`