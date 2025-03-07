import { Route, Routes } from 'react-router'
import './App.css'
import Dashboard from './pages/Dashboard'
import GeneralLayout from './components/layout/GeneralLayout'

const App = () => {
  return (
    <Routes>
      <Route index element={<h1>Home</h1>} />
      <Route path='dashboard' element={<GeneralLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App
