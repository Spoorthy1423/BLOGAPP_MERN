import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about'
import SignIn from './pages/SignIn'
import Dashboard from './pages/DashBoard'
import Projects from './pages/Projects'
import SignUp from './pages/SignUp'

export default function App() {
  return (
   // <h1 className='text-3xl text-red-500'>app</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>

    </BrowserRouter>
  )
}