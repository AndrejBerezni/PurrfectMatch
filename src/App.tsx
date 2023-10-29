import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import SignInForm from './components/Forms/SignInForm/SignInForm.tsx'
import SignUpForm from './components/Forms/SignUpForm/SignUpForm.tsx'
import Navigation from './components/Navigation/Navigation.tsx'
import Favorites from './pages/Favorites/Favorites.tsx'
import Home from './pages/Home/Home.tsx'
import PetSearch from './pages/PetSearch/PetSearch.tsx'
import { getAuthStatus } from './store/authentication/selectors.ts'
import { getDarkMode } from './store/darkMode/selectors.ts'

function App() {
  const isDarkMode = useSelector(getDarkMode)
  const isAuth = useSelector(getAuthStatus)

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
        <Route
          path="/search"
          element={isAuth ? <PetSearch /> : <Navigate to="/" />}
        />
        <Route
          path="/favorites"
          element={isAuth ? <Favorites /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <SignInForm />
      <SignUpForm />
    </>
  )
}

export default App
