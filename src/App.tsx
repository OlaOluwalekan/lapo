import { Route, Routes } from 'react-router'
import './App.css'
import Dashboard from './pages/Dashboard'
import GeneralLayout from './components/layout/GeneralLayout'
import CardRequest from './pages/CardRequest'
import CardProfile from './pages/CardProfile'
import CardRequestDetails from './pages/CardRequestDetails'

const App = () => {
  return (
    <Routes>
      <Route index element={<h1>Home</h1>} />
      <Route path='dashboard' element={<GeneralLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='card-request' element={<CardRequest />} />
        <Route path='card-request/:id' element={<CardRequestDetails />} />
        <Route path='card-profile' element={<CardProfile />} />
      </Route>
    </Routes>
  )
}

export default App
