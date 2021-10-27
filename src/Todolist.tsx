import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {filterType} from "./App";
import Button from "./components/Button";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    changeFilter: (value: filterType) => void
    addTask: (newTitle: string) => void
}

export function Todolist(props: PropsType) {

    const callBackHandlerFilters = (value: filterType) => {
        props.changeFilter(value)
    }
    let [newTitle, setnewTitle] = useState('')
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setnewTitle(event.currentTarget.value)
    }
    const onClickHandlerAddTask = () => {
        props.addTask(newTitle)
        setnewTitle('')
    }
    const onKeyPressHadler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.addTask(newTitle)
            setnewTitle('')
        }
    }

    const onClickHandlerChengeFilter = (value: filterType)=>{
        props.changeFilter(value)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTitle} onChange={onChangeHandler} onKeyPress={onKeyPressHadler}/>
            <button onClick={onClickHandlerAddTask}>+</button>
        </div>
        <ul>
            {props.tasks.map((t) => {
                const onClickHandlerRemoveTask = () => {
                    props.removeTask(t.id)
                }
                return (
                    <li>
                        <button onClick={onClickHandlerRemoveTask}>х</button>
                        <input type="checkbox"
                               checked={t.isDone}/>
                        <span>{t.title}</span>
                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick={() => onClickHandlerChengeFilter('All')}>All</button>
            <button onClick={() => onClickHandlerChengeFilter('Active')}>Active</button>
            <button onClick={() => onClickHandlerChengeFilter('Completed')}>Completed</button>
            <Button callBack={() => callBackHandlerFilters('All')}/>
        </div>
    </div>
}
