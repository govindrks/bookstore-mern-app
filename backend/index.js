import express, { request } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY Cross-origin resource sharing
// Option 1: Allow All Origin with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowdHeaders: ['Content-Type'],
//     })
// )

// there are 2 parameter to get request one is for row and another
// is to get request
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome To MERN Stack Tutorial')
});

app.use('/books', booksRoute);


mongoose
 .connect(mongoDBURL)
 .then(() => {
  console.log('App connected to database');
  app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});
 })
 .catch((error) => {
 console.log(error);
 })