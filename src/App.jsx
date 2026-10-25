import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import House from './pages/House.jsx'
import Spaces from './pages/Spaces.jsx'
import Menus from './pages/Menus.jsx'
import Visit from './pages/Visit.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/the-house" element={<House />} />
        <Route path="/spaces" element={<Spaces />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
