'use client'

import React from 'react'
import { Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function NoteCard({ note, onEdit, onDelete }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="bg-white bg-opacity-80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 ease-in-out rounded-xl overflow-hidden border-none">
        <CardHeader className="pb-2 bg-gradient-to-r from-indigo-100 to-purple-100">
          <CardTitle className="text-xl font-semibold text-gray-800 line-clamp-1">{note.title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-gray-600 line-clamp-3">{note.content}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center pt-4 bg-gradient-to-r from-indigo-50 to-purple-50">
          <time className="text-xs text-gray-400">
            {new Date(note.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
          <div className="flex gap-2">
            <Button
              onClick={onEdit}
              variant="ghost"
              size="sm"
              className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-100 transition-colors duration-200"
            >
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Edit note</span>
            </Button>
            <Button
              onClick={onDelete}
              variant="ghost"
              size="sm"
              className="text-red-600 hover:text-red-700 hover:bg-red-100 transition-colors duration-200"
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Delete note</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

