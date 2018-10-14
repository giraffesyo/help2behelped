import React from 'react'
import styled from 'styled-components'

import { gray, green, purple } from '../colors'

const Box = styled.div`
  background-color: ${gray};
  flex-basis: 1;
  border-radius: 25px;
  margin: 1rem;
  padding: 1rem;
  position: relative;
`
const Description = styled.div`
  font-size: 1rem;
  padding: 0.5rem 0;
  font-weight: 700;
  text-align: center;
  color: ${green};
`
const Purple = styled.span`
  color: ${purple};
`

class Posting extends React.PureComponent {
  render() {
    const { user, skill, message } = this.props
    return (
      <Box>
        <Description>
          {user} wants to help you with{' '}
          <Purple>
            {skill} <br />
          </Purple>
          <small>{message}</small>
        </Description>
      </Box>
    )
  }
}

export { Posting }
