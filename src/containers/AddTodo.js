import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Label, Form, Button, Icon, Input } from 'semantic-ui-react'
import _ from 'lodash'

let AddTodo = ({ dispatch }) => {
    let text
    let highPriority

    return (
        <div>
            <Form
                onSubmit={e => {
                    e.preventDefault()
                    if (!text.inputRef.value.trim()) {
                        return
                    }
                 
                    dispatch(addTodo(text.inputRef.value, highPriority.inputRef.checked))
                    text.inputRef.value = ''
                    highPriority.inputRef.checked = false
                }}
            >
                <Input placeholder='new task...' ref={node => { text = node }} />
                <Button type="submit"><Icon name='add' /></Button>
                <br></br>
                <br></br>
                <Label color='red' key='red'>
                    {_.capitalize('High Priority')}
                </Label>
                <Input type='radio' name='highPrior' value='Yes' ref={node => { highPriority = node }}/>Yes
                <Input type='radio' name='highPrior' value='No' defaultChecked/>No
            </Form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo