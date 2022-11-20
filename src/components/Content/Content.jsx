import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    position: absolute;
    top: 10rem;
    width: 50%;
`;

const StyledInput = styled.form`
    background-color: #24273c;
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    .form-check-input {
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
    }

    input[type="text"] {
        color: #9b9fb5;
    }

    input[type="text"]:focus {
        outline: none;
        color: #9b9fb5;
    }
`

const StyledDiv2 = styled.div`
    background-color: #24273c;
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    color: #9b9fb5;
    border-bottom: 1px solid #9b9fb5;

    li {
        list-style: none;
    }

    .form-check-input {
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
    }
`;

const StyledFooter = styled.div`
    background-color: #24273c;
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #9b9fb5;

    button {
        color: #fff;
    }
`;

let todoArray = [];

const ContentComp = ({ ...props }) => {
    const [todo, setTodo] = useState("");

    const handleInputChange = (e) => {
        setTodo(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (todo !== "") {
            todoArray.push({
                id: todoArray.length + 1,
                props: {
                    text: todo.trim(),
                    active: false,
                    completed: false,
                }
            })
        }

        setTodo("");
    }

    console.log(todoArray)

    return (
        <StyledDiv >
            <StyledInput className='d-flex justify-content-center' onSubmit={handleOnSubmit} >
                <input type="checkbox" name="checkTodo" className='form-check-input me-2 ms-2' id="todo-list" defaultChecked={false} />
                <input className='w-100 bg-transparent border-0 ms-2' onChange={(e) => handleInputChange(e)} value={todo} type="text" placeholder='Create a new todo...'/>
            </StyledInput>
            {todoArray?.map(item => {
                return item !== "" ? (
                    <StyledDiv2>
                        <input className='form-check-input me-3 ms-2' type="checkbox" />
                        <span key={item.id}>{item.props.text}</span>
                    </StyledDiv2>
                ) : []
            })}
            <StyledFooter>
                <span>{todoArray.length} items left</span>
                <div>
                    <button className='bg-transparent border-0'>All</button>
                    <button className='bg-transparent border-0'>Active</button>
                    <button className='bg-transparent border-0'>Completed</button>
                </div>
                <button className='bg-transparent border-0'>Clear Complete</button>
            </StyledFooter>
        </StyledDiv>
    )
};

export default ContentComp;