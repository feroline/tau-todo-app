import { useState } from "react";

export default function Add() {

    const [data, setData] = useState({
        addTodo: ''
    });

    const onChange = (evento) => {
        const key = evento.target.name;
        const value = evento.target.value;
        setData(oldData => ({...oldData, [key]:value }))
    }

    return (
        <input data-testid="todo-input" value={data.addTodo} onChange={onChange} name="add-todo" />
    )
}