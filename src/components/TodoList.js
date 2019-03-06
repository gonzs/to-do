import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { Segment, List } from 'semantic-ui-react'

const TodoList = ({ todos, onTodoClick }) => (
  <Segment>
    <List divided relaxed>
      {todos.map((todo, index) => (
        <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
      ))}
    </List>
  </Segment>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      highPriority: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList