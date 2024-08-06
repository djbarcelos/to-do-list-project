import { PlusCircle } from '@phosphor-icons/react'
import styles from './InputNewTask.module.css'
import { useState } from 'react'

export function InputNewTask({ sendTaskList }) {

    const [task, setNewTask] = useState('');

    const isNewTaskEmpty = task.length === 0;


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
        setNewTask('');
    }

    return (
        <div className={styles.inputNewTask}>
            <input
                type="text"
                placeholder='Adicione uma nova tarefa'
                onChange={handleNewTaskChange}
                value={task}
            />
            <button onClick={hancleCreateNewTask} disabled={isNewTaskEmpty}>
                <strong>Criar</strong>
                <PlusCircle size={20} color='#FFF' />
            </button>
        </div>
    )
}