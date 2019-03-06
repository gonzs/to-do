import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import { Button } from 'semantic-ui-react'

const Footer = () => (
    <Button.Group>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_HIGH_PRIORITY}>High Priority</FilterLink>
    </Button.Group>
)
export default Footer