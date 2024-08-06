import { PlusCircle } from '@phosphor-icons/react'
import styles from './InputNewTask.module.css'
import { useState } from 'react'

export function InputNewTask({ sendTaskList }) {

    const [task, setNewTask] = useState('');

    function handleNewTaskChange() {
        setNewTask(event.target.value)
    }

    function hancleCreateNewTask() {
        const newTask = {
            id: Date.now().toString(36),
            description: task,
            isCompleted: false,
        }

        sendTaskList(newTask);
    }

    return (
        <div className={styles.inputNewTask}>
            <input
                type="text"
                name='task'
                placeholder='Adicione uma nova tarefa'
                onChange={handleNewTaskChange}
            />
            <button onClick={hancleCreateNewTask}>
                <strong>Criar</strong>
                <PlusCircle size={20} color='#FFF' />
            </button>
        </div>
    )
}