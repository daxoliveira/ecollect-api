import express from 'express';

const app = express();

// Route: the entire URL of your request
// Resource: Which entity of your application will be accessed

// Create - POST: create new data in the back-end
// Read - GET: request one or more pieces of data in the back-end
// Update - PUT: update existing data in the back-end
// Delete - DELETE: remove existing data in the back-end

// POST http://localhost:3333/users = Create a user
// GET http://localhost:3333/users = List users
// GET http://localhost:3333/users/5 = Request user's data with Id 5

// Request Params: placed after the resource to identify a specific part of it

const users = [
  'Facebook',
  'Amazon',
  'Apple',
  'Netflix',
  'Google'
]

app.get('/users', (request, response) => {
  console.log('Listing users')

  return response.json(users)
})

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);

  const user = users[id]

  return response.json(user)
})

app.post('/users', (request, response) => {
  const user = {
    name: 'Dax',
    email: 'dax.oliveira.br@gmail.com'
  }

  return response.json(user)
})

app.listen(3333);