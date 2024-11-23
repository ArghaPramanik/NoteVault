'use client'

import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'

export default function NoteForm({ isOpen, onClose, onSubmit, initialData, isEditing }) {
  const [title, setTitle] = useState(initialData?.title || '')
  const [content, setContent] = useState(initialData?.content || '')

  useEffect(() => {
    if (isOpen) {
      setTitle(initialData?.title || '')
      setContent(initialData?.content || '')
    }
  }, [isOpen, initialData])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ title, content })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-gray-900">
            {isEditing ? 'Edit Note' : 'Add New Note'}
          </DialogTitle>
        </DialogHeader>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Note title"
              className="w-full text-lg font-medium"
              required
            />
          </div>
          <div>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Note content"
              className="w-full min-h-[200px] text-base"
              required
            />
          </div>
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={onClose} className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Cancel
            </Button>
            <Button type="submit" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transition-all duration-200">
              {isEditing ? 'Update' : 'Add'} Note
            </Button>
          </div>
        </motion.form>
      </DialogContent>
    </Dialog>
  )
}

