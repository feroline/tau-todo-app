import { useState } from "react";

export default function Add() {

    const [data, setData] = useState({
        add_todo: ''
    })

    const onChange = (evento) => {
        const key = evento.target.name;
        const value = evento.target.value;
        setData(oldData => ({ ...oldData, [key]: value }))
    }

    return (
        <input data-testid="todo-input" value={data.add_todo} onChange={onChange} name="add_todo" />
    )
}