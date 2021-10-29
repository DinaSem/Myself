import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {filterType} from "./App";
import Button from "./components/Button";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (TaskId:string) => void
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



    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTitle} onChange={onChangeHandler} onKeyPress={onKeyPressHadler}/>
            <button onClick={onClickHandlerAddTask}>+</button>
        </div>
        <ul>
            {props.tasks.map((t) => {
                const onClickHandlerRemoveTask = (TaskId:string) => {
                    props.removeTask(TaskId)
                }
                return (
                    <li>
                        <Button callBack={()=>onClickHandlerRemoveTask(t.id)} name={'X'}/>
                        <input type="checkbox"
                               checked={t.isDone}/>
                        <span>{t.title}</span>
                    </li>
                )
            })}
        </ul>
        <div>
            <Button callBack={() => callBackHandlerFilters('All')} name={'All'}/>
            <Button callBack={() => callBackHandlerFilters('Active')}name={'Active'}/>
            <Button callBack={() => callBackHandlerFilters('Completed')}name={'Completed'}/>
        </div>
    </div>
}
