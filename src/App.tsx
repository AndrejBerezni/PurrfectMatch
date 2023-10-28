import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation.tsx'
import Favorites from './pages/Favorites/Favorites.tsx'
import Home from './pages/Home/Home.tsx'
import PetSearch from './pages/PetSearch/PetSearch.tsx'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<PetSearch />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  )
}

export default App
