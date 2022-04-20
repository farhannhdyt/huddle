import styled from 'styled-components'

export const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  padding: 0 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${({ mFooter }) => mFooter || '200px'};
`