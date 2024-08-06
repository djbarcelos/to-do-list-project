
import { Header } from './components/Header';
import { InputNewTask } from './components/InputNewTask';
import { Tasks } from './components/Tasks';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <InputNewTask />
      <Tasks />
    </div>
  )
}