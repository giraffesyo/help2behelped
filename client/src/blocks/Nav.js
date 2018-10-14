import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  FaCog,
  FaGlobeAmericas,
  FaSearch,
  FaHandHoldingHeart
} from 'react-icons/fa'

const NavBar = styled.nav`
  background: #323232;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`

const Option = styled.div`
  flex-basis: 0.25;
  color: white;
  font-size: 2rem;
  padding: 0.25rem;
`

class Nav extends React.PureComponent {
  render() {
    return (
      <NavBar>
        <Link to="/home">
          <Option>
            <FaGlobeAmericas />
          </Option>
        </Link>
        <Option>
          <FaSearch />
        </Option>
        <Option>
          <FaHandHoldingHeart />
        </Option>
        <Option>
          <FaCog />
        </Option>
      </NavBar>
    )
  }
}

export { Nav }
