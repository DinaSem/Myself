import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from "uuid";

export type filterType = 'All' | 'Active' | 'Completed'

function App() {

    let [tasks1, setTasks1] = useState<Array<TaskType>>([
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false}
        ]
    )

    let [filter, setFiler] = useState<filterType>('All')
    let durhlag = tasks1
    if (filter === 'Active') {
        durhlag = tasks1.filter(t => !t.isDone)
    }
    if (filter === 'Completed') {
        durhlag = tasks1.filter(t => t.isDone)
    }
    if (filter === 'All') {
        durhlag = tasks1
    }

    const changeFilter = (value: filterType) => {
        setFiler(value)
    }

    const removeTask = (id: string) => {
        let newTask = tasks1.filter(t => t.id != id)
        setTasks1(newTask)
    }

    const addTask = (newTitle:string) => {
        let newTask = {id: v1(), title: newTitle, isDone: false}
        setTasks1([newTask,...tasks1])
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={durhlag}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}/>
        </div>
    );
}

export default App;
