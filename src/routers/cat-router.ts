import express, { Request, Response } from 'express';
import * as catService from '../services/cat-service';

const catRouter = express.Router();

/*
 * A router has methods to handle specific http methods
 * Additionally, we could handle all of them using 'all'
 * Http Methods
 * ----
 * GET, POST, PATCH, PUT, DELETE
 */

// Handle the creation of a new cat
// We want to deal strictly with the request/response objects here
// and delegate the internal logic to a 'service'
catRouter.post('', (request: Request, response: Response) => {
    console.log('Handling post to cats');
    const cat = catService.createCat(request.body);
    if (cat) {
        response.status(201).json(cat);
    } else {
        response.sendStatus(500);
    }
});

export default catRouter;