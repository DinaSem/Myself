import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

export type filterType = 'All' | 'Active' | 'Completed'

function App() {

    let [tasks1, setTasks1] = useState<Array<TaskType>>([
            {id: 1, title: "HTML&CSS", isDone: true},
            {id: 2, title: "JS", isDone: true},
            {id: 3, title: "ReactJS", isDone: false}
        ]
    )

    let [filter, setFiler] = useState<filterType>('All')
    let durhlag = tasks1
    if (filter === 'Active') {
        durhlag = tasks1.filter(f => !f.isDone)
    }
    if (filter === 'Completed') {
        durhlag = tasks1.filter(f => f.isDone)
    }
    if (filter === 'All') {
        durhlag = tasks1
    }

    const changeFilter = (value: filterType) => {
        setFiler(value)
    }

    const removeTask = (id: number) => {
        let newTask = tasks1.filter(f => f.id != id)
        setTasks1(newTask)
    }

    const addTask = (newTitle:string) => {
        let newTask = {id: 4, title: newTitle, isDone: false}
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
