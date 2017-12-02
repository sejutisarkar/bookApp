import React from 'react';;
import Proptypes from 'prop-types'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show: {' '}
    <FilterLink filter='SHOW_ALL'>All</FilterLink>
    <hr/>
    <FilterLink filter='SHOW_ACTIVE'>Show Active</FilterLink>
    <hr/>
    <FilterLink filter='SHOW_COMPLETED'>Show COmpleted</FilterLink>
    <hr/>
  </p>
)

export default Footer
