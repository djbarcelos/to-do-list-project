import { PlusCircle } from '@phosphor-icons/react'
import styles from './InputNewTask.module.css'

export function InputNewTask() {

    return (
        <div className={styles.inputNewTask}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button>
                <strong>Criar</strong>
                <PlusCircle size={20} color='#FFF' />
            </button>
        </div>
    )
}