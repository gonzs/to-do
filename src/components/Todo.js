import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'

const Todo = ({ onClick, completed, text, highPriority }) => (
    <List.Item
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        <List.Icon name={highPriority ? 'bell' : 'none'}
            size='large'
            verticalAlign='middle' />
        <List.Content><List.Header>{text}</List.Header></List.Content>
    </List.Item>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    highPriority: PropTypes.bool.isRequired
}

export default Todo