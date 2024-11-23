import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LoginForm from './components/LoginForm'
import NotesApp from './components/NotesApp'
import { AuthProvider, useAuth } from './contexts/AuthContext'

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-950 to-slate-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/" replace />
  }

  return children
}

function AppRoutes() {
  const { user } = useAuth()

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/notes" replace /> : <LandingPage />} />
      <Route path="/login" element={user ? <Navigate to="/notes" replace /> : <LoginForm />} />
      <Route
        path="/notes"
        element={
          <ProtectedRoute>
            <NotesApp />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  )
}