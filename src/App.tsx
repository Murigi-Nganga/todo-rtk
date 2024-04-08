import { Routes, Route } from 'react-router-dom'
import TodoPage from './pages/TodoPage'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<TodoPage />} />
      </Routes>
    </div>
  )
}

export default App
