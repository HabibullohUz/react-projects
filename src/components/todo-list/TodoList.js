import React, { useRef, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'

function TodoList() {
  const [todoList, setTodoList] = useState([])

  const addTodo = (event) => {
    event.preventDefault()
    console.log(event)
  }

  function handleChange(event) {
    const value = event.target.value
    console.log(value)
    const name = event.target.name
    setTodoList(...todoList, { title: name })

    console.log(todoList);
  }


  return (
    <div className='todoList__wrapper'>

      <div className="todo__list">
        <h1>Todo List</h1>
        <Card className='card'>
          <Form
            onSubmit={addTodo}
            className="form"
          >

            <Form.Control
              className='form__input'
              placeholder='write somthing todo'
              value={todoList.name}
              name='value'
              onChange={handleChange}
            >
            </Form.Control>
            <Button
              className='form__btn'
              onClick={addTodo}
            >Add</Button>
          </Form>
        </Card>
        <div className="line"></div>

        <div className="list__wrapper">
          {/* <div
            className='list__text'
            ref={todoList__Dom}
          >

          </div> */}
          <ul>
            {/* {todoList.map((todo) => (
              <li>{todo}</li>
            ))} */}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default TodoList