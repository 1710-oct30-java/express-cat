import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import catRouter from './routers/cat-router';

// Creating an instance of an express App by calling the express method
const app = express();
const port = 3000;

// Middleware
// When requests are received by Express they pass through layers of middleware
// Essentially, express has an array of middleware functions
// When a request is received it creates the 'request' and 'response' objects
// then calls the first middleware function with the following parameters
// (request, response, next) 
// next is the next middleware function

// This middleware will convert a request body of type application/json to
// a javascript object and define that at request.body
app.use(bodyParser.json());

// registering middleware
// app.use(/* middleware function */)
// If we want typing: npm install --only-dev @types/express
app.use((request: Request, response: Response, next) => {
    console.log('Request received for ' + request.url);
    next();
});

//another middleware
app.use((request: Request, response: Response, next) => {
    // response.json({message: 'Hello from middleware 2'});
    next();
});

// Routers - We will register two routers with the routes: 'cats' and 'food'
// We need to remember to register the routes here
app.use('/cats', catRouter);

// Starting the server on port 3000
app.listen(3000, () => {
    console.log(`App started on port ${port}`);
});
