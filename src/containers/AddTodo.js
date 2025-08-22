import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Label, Form, Button, Icon, Input } from 'semantic-ui-react'
import _ from 'lodash'

let AddTodo = ({ dispatch }) => {
    const [text, setText] = useState('')
    const [highPriority, setHighPriority] = useState(false)

    return (
        <div>
            <Form
                onSubmit={e => {
                    e.preventDefault()
                    if (!text.trim()) {
                        return
                    }
                 
                    dispatch(addTodo(text, highPriority))
                    setText('')
                    setHighPriority(false)
                }}
            >
                <Input 
                    placeholder='new task...' 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <Button type="submit"><Icon name='add' /></Button>
                <br></br>
                <br></br>
                <Label color='red' key='red'>
                    {_.capitalize('High Priority')}
                </Label>
                <Input 
                    type='radio' 
                    name='highPrior' 
                    value='Yes' 
                    checked={highPriority}
                    onChange={() => setHighPriority(true)}
                />Yes
                <Input 
                    type='radio' 
                    name='highPrior' 
                    value='No' 
                    checked={!highPriority}
                    onChange={() => setHighPriority(false)}
                />No
            </Form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo