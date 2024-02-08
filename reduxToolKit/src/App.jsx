
import './App.css'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'

function App() {
 

  return (
    <>
      <h1 className='text-white text-3xl'>Learn about Redux toolkit</h1>
      <AddTodos/>
      <Todos/>
    </>
  )
}

export default App
