import { Trash } from '@phosphor-icons/react';
import styles from './Tasks.module.css';

import iconClipboard from '../assets/clipboard.svg';

const tasks = [];

const contentEmpty = () => {
    return (
        <main className={styles.emptyContent}>
            <div className={styles.iconTask}>
                <img src={iconClipboard} alt="icon-clipboard" />
            </div>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </main>
    );
}

const content = () => {
    return (
        <main>
            {
                tasks.map(task => {
                    return (
                        <div key={task.id} className={styles.contentTask}>
                            <label className={styles.customCheckbox}>
                                <input type="checkbox" />
                                <span className={styles.checkmark}></span>
                            </label>
                            <span className={styles.descriptionTask}>{task.description}</span>
                            <button title='Remover tarefa'>
                                <Trash size={18} />
                            </button>
                        </div>
                    )
                })
            }
        </main>
    );
}

export function Tasks() {
    return (
        <article className={styles.tasks}>
            <header>
                <div className={styles.countTasks}>
                    <strong>Tarefas criadas</strong>
                    <span>0</span>
                </div>
                <div className={styles.countCompletedTasks}>
                    <strong>Concluídas</strong>
                    <span>0</span>
                </div>
            </header>

            {tasks.length ? content() : contentEmpty()}

        </article>
    )
}