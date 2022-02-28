const express = require('express');
const app = express();

app.use(express.json());

let notes = [
   {
      "id": 1,
      "content": 'Nota 1',
   },
   {
      "id": 2,
      "content": 'Nota 2',
   },
   {
      "id": 3,
      "content": 'Nota 3',
   },
]

app.get('/', (req, res) => {
   res.send('<h1>Hello World</h1>');
});

app.get('/api/notes', (req, res) => {
   res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
   const id = req.params.id;
   const note = notes.find(n => n.id === +id);
   if (note) {
      res.json(note);
   }
   res.status(404).end();
});

app.delete('/api/notes/:id', (req, res) => {
   const id = Number(req.params.id);
   notes = notes.filter(n => n.id !== id);
   res.status(204).end();
});

app.post('/api/notes', (req, res) => {
   const note = req.body;
   console.log(note);
   const ids = notes.map(n => n.id);

   if (!note || !note.content) {
      res.status(400).json({
         error: 'note.content is missing'
      })
   }
   const newNote = {
      id: Math.max(...ids) + 1,
      content: note.content,
      important: typeof note.important !== 'undefined' ? note.important : false,
      date: new Date().toISOString()
   }
   notes = [...notes, newNote];
   res.status(201).json(newNote);
});

const PORT = 3001;
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});