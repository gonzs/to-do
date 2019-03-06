import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
    let text
    let priority1
    let priority2
    let priority3
    let priority

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!text.value.trim()) {
                        return
                    }

                    console.log(priority1)
                    console.log(priority2)
                    console.log(priority3)
                    console.log(priority)

                    if (priority1.checked) {
                        priority = priority1
                    } else {
                        if (priority2.checked) {
                            priority = priority2
                        } else {
                            priority = priority3
                        }
                    }

                    dispatch(addTodo(text.value, priority.value))
                    text.value = ''
                }}
            >
                <input
                    ref={node => {
                        text = node
                    }}
                />
                <input type="radio" name="priority" value="high"
                    ref={node => {
                        priority1 = node
                    }}
                />High
                <input type="radio" name="priority" value="medium"
                    ref={node => {
                        priority2 = node
                    }}
                />Medium
                <input type="radio" name="priority" value="low"
                    ref={node => {
                        priority3 = node
                    }}
                />Low
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}
AddTodo = connect()(AddTodo)

export default AddTodo