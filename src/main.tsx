import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TodoContainer from './components/todo-main-container/TodoMainContainer'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoContainer />
  </StrictMode>,
)
