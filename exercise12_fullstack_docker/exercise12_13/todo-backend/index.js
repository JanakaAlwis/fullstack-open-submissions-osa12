const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

let todos = [
  { id: 1, task: 'Learn Docker', done: false },
  { id: 2, task: 'Write backend', done: true }
]

// GET all todos
app.get('/api/todos', (req, res) => {
  res.json(todos)
})

// POST a new todo
app.post('/api/todos', (req, res) => {
  const todo = req.body
  // Simple ID generation (increment max ID)
  const maxId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) : 0
  todo.id = maxId + 1
  todos.push(todo)
  res.status(201).json(todo)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})
