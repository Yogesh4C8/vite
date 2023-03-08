import React from 'react'
import { cardProps } from './Card.types';
import { Styledh1, Styledh2, StyledSection, StyledSpan, Span2 } from './CardStyles'

const Card = ({name,country,date,description,temp}:cardProps) => {

  return (
    <StyledSection>
        <Styledh2>{name}, {country}. Weather</Styledh2>
        <StyledSpan>
            As of {date} pm
        </StyledSpan>

        <Styledh1>
          <Span2>{temp} <sup>0</sup></Span2>  {description.toUpperCase()}
        </Styledh1>
        <StyledSpan>{description}</StyledSpan>
    </StyledSection>
  )
}

export default Card