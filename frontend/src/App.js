import Login from './pages/Login/Login'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" />
          <Route path="/logout" />
          <Route path="/login" element={<Login />} />
          <Route path="/register" />
        </Routes>
      </Router>
    </div>
  )
}

export default App
