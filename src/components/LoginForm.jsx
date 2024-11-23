'use client'

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { StickyNote, LogIn } from 'lucide-react'

export default function LoginForm() {
  const { user, loading, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (user) {
      navigate('/notes')
    }
  }, [user, navigate])

  const handleSignIn = async () => {
    try {
      await signInWithGoogle()
    } catch (error) {
      console.error('Error signing in:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-teal-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md overflow-hidden bg-white bg-opacity-70 backdrop-blur-md shadow-xl">
          <CardHeader className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
            >
              <StickyNote className="w-16 h-16 mx-auto mb-4 text-teal-600" />
            </motion.div>
            <CardTitle className="text-3xl font-bold mb-2 text-gray-800">Welcome to NoteVault</CardTitle>
            <CardDescription className="text-gray-600">Sign in to access your notes</CardDescription>
          </CardHeader>
          <CardContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button
                onClick={handleSignIn}
                variant="outline"
                className="w-full py-6 text-lg font-semibold bg-white text-teal-600 hover:bg-teal-50 border-teal-200 hover:border-teal-300 transition-colors duration-300 flex items-center justify-center gap-3 shadow-md"
              >
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-6 h-6"
                />
                <span>Continue with Google</span>
              </Button>
            </motion.div>
            <p className="mt-4 text-center text-gray-600 text-sm">
              By signing in, you agree to our Terms of Service and Privacy Policy.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

