import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation.tsx'
import Favorites from './pages/Favorites/Favorites.tsx'
import Home from './pages/Home/Home.tsx'
import PetSearch from './pages/PetSearch/PetSearch.tsx'
import { getDarkMode } from './store/darkMode/selectors.ts'

function App() {
  const isDarkMode = useSelector(getDarkMode)

  useEffect(() => {
    isDarkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [isDarkMode])

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
