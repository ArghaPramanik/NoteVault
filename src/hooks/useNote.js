import { useState, useEffect } from 'react';
import { 
  collection,
  query,
  orderBy,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  where
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';

export function useNotes() {
  const [notes, setNotes] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setNotes([]);
      return;
    }

    const q = query(
      collection(db, 'notes'),
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const notesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setNotes(notesData);
    });

    return () => unsubscribe();
  }, [user]);

  const addNote = async (note) => {
    if (!user) return;

    await addDoc(collection(db, 'notes'), {
      ...note,
      userId: user.uid,
      createdAt: new Date().toISOString()
    });
  };

  const updateNote = async (id, updatedNote) => {
    if (!user) return;

    const noteRef = doc(db, 'notes', id);
    await updateDoc(noteRef, updatedNote);
  };

  const deleteNote = async (id) => {
    if (!user) return;

    const noteRef = doc(db, 'notes', id);
    await deleteDoc(noteRef);
  };

  const searchNotes = (query) => {
    if (!query) return notes;
    
    const lowercaseQuery = query.toLowerCase();
    return notes.filter(
      (note) =>
        note.title.toLowerCase().includes(lowercaseQuery) ||
        note.content.toLowerCase().includes(lowercaseQuery)
    );
  };

  return {
    notes,
    addNote,
    updateNote,
    deleteNote,
    searchNotes,
  };
}