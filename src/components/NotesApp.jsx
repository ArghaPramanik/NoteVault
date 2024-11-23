'use client'

import React, { useState } from 'react'
import { PlusCircle, StickyNote, LogOut, Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import NoteForm from './NoteForm'
import NoteCard from './NoteCard'
import { useNotes } from '../hooks/useNote'
import { useAuth } from '../contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'

export default function NotesApp() {
  const { notes, addNote, updateNote, deleteNote, searchNotes } = useNotes()
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [editingNote, setEditingNote] = useState(null)

  const filteredNotes = searchNotes(searchQuery)

  const handleEdit = (note) => {
    setEditingNote(note)
    setIsFormOpen(true)
  }

  const handleUpdate = (updatedNote) => {
    if (editingNote) {
      updateNote(editingNote.id, updatedNote)
      setEditingNote(null)
    }
  }

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <header className="bg-white bg-opacity-90 backdrop-blur-lg shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <StickyNote className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">NoteVault</h1>
            </motion.div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 hidden md:inline-block">{user.email}</span>
              <Button variant="ghost" onClick={handleSignOut} className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <LogOut className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Sign Out</span>
              </Button>
              <Button onClick={() => setIsFormOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-200">
                <PlusCircle className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Add Note</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-full shadow-sm transition-all duration-200"
            />
          </div>
        </motion.div>

        {filteredNotes.length === 0 ? (
          <motion.div 
            className="text-center py-16 bg-white bg-opacity-60 rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <StickyNote className="h-20 w-20 text-indigo-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">No notes found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              {searchQuery
                ? "We couldn't find any notes matching your search"
                : "Get started by creating your first note"}
            </p>
            {!searchQuery && (
              <Button 
                onClick={() => setIsFormOpen(true)} 
                className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-200"
              >
                <PlusCircle className="h-5 w-5 mr-2" />
                Create Your First Note
              </Button>
            )}
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {filteredNotes.map((note, index) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <NoteCard
                  note={note}
                  onEdit={() => handleEdit(note)}
                  onDelete={() => deleteNote(note.id)}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        <NoteForm
          isOpen={isFormOpen}
          onClose={() => {
            setIsFormOpen(false)
            setEditingNote(null)
          }}
          onSubmit={editingNote ? handleUpdate : addNote}
          initialData={editingNote || undefined}
          isEditing={!!editingNote}
        />
      </main>
    </div>
  )
}

