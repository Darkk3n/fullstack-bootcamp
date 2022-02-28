import React, { useEffect, useState } from 'react';
import { Note } from './Note';
import { createNote, getAllNotes } from './Services/Notes/notesService';

export const App = () => {
   const [notes, setNotes] = useState([]);
   const [newNote, setNewNote] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   useEffect(() => {
      setLoading(true);
      getAllNotes()
         .then(n => {
            setNotes(n);
            setLoading(false);
         })
   }, []);

   const handleChange = (e) => setNewNote(e.target.value);

   const handleSubmit = (e) => {
      e.preventDefault();
      const note = {
         title: newNote,
         body: newNote,
         userId: 1
      }
      setError('');
      createNote(note)
         .then(newNote => {
            setNotes([...notes, newNote]);
         })
         .catch(e => {
            console.error(e);
            setError('API error');
         });
      setNewNote('');
   }

   return <>
      <div>
         <h1>Notes</h1>
         {loading ? 'Loading...' : ''}
         <ol>
            {
               notes.map(n => <Note key={n.id} {...n} />)
            }
         </ol>
         <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} value={newNote} />
            {/*Last input in a form is considered as Submit*/}
            <button>Create Note</button>
         </form>
         {error ? <span style={{ color: 'red' }}>error</span> : ''}
      </div>
   </>
};