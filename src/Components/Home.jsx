import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeToDo, toggleComplete } from '../Redux/todoSlice';
import add from '../assets/add.png'

function Home() {
    const dispatch = useDispatch()
    const [todoListValue, setTodoListValue] = useState("")
    console.log(todoListValue);
    const todoList = useSelector((state) => state.todoReducer.todoList);


    const handleSubmit = () => {
        if (todoListValue) {
            dispatch(addTodo({ value: todoListValue, completed: false }));
            setTodoListValue('');
        }
    };

    const handleChecked = (id) => {
        dispatch(toggleComplete(id));
    };


    return (
        <div className='w-100 bg-primary d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
            <div style={{ width: "95%", height: "95%", backgroundColor: "whitesmoke" }} className='rounded-4 p-3'>
                <Row>
                    <Col sm={12}>
                        <h1 className='text-black w-100 text-center mt-3 mb-4 fw-bold'>MY TODO LIST</h1>
                    </Col>
                    <Col sm={12} className='pt-4 pb-4 w-100 d-flex justify-content-center'>
                        <TextField value={todoListValue} onChange={e => setTodoListValue(e.target.value)} id="outlined-basic" label="Add todo" variant="outlined" className='me-2' />
                        <button onClick={handleSubmit} style={{ height: "56px", width: "90px" }} className='btn btn-primary'>Submit</button>
                    </Col>
                    <Col sm={12} className='mt-2 px-4' >
                        {todoList?.length > 0 ?
                            <Row style={{ border: "1px solid black" }}>
                                {todoList.map((todo) => (
                                    <Col key={todo.id} className={`${todo.completed ? 'completed' : 'notCompleted'}`} sm={12} style={{ border: "1px solid black", padding: "2px" }}>
                                        <div className='d-flex justify-content-between ps-2'>
                                            <span className='d-flex align-items-center'>
                                                <input
                                                    className='me-3'
                                                    type="checkbox"
                                                    checked={todo.completed}
                                                    onChange={() => handleChecked(todo?.id)}
                                                />
                                                <p className='mt-2 fw-semibold text-capitalize'>{todo.value}</p>
                                            </span>
                                            <button onClick={() => dispatch(removeToDo(todo?.id))} className='btn btn-danger'>Delete</button>
                                        </div>
                                    </Col>
                                ))
                                }
                            </Row>
                            :
                            <div className='d-flex flex-column align-items-center w-100'>
                                <img width={"20% !important"} height={"50%"} src={add} alt="" />
                                <h5 className='w-100 text-center text-info'>Please Add Some Task</h5>
                            </div>
                        }
                    </Col>
                    {todoList?.length > 0 &&
                        <Col sm={12}>
                            <h6 className='mt-3 text-black'>Total complete items: {todoList.filter(todo => todo.completed).length}</h6>
                        </Col>
                    }
                </Row>
            </div>
        </div>
    )
}

export default Home
