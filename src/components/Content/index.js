import React from 'react'
import { StyledCard } from '../../assets/styled/Card.styled'
import { CardDesc, CardHeader } from './Content.styled'

const Content = ({ content }) => {
  return(
    <StyledCard layout={ content.id % 2 === 0 && 'row-reverse' }>
      <div>
        <CardHeader>{ content.title }</CardHeader>
        <CardDesc>{ content.desc } </CardDesc>
      </div>

      <div>
        <img src={`./images/${content.image}`} alt="Grow Together" />
      </div>
    </StyledCard>
  )
}

export default Content