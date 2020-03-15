import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

// Router de teste
routes.get('/', (req, res) => {
    return res.json({ message: 'Helo Word' });
});
routes.post('/sessions', SessionController.store);

routes.use(authMiddlewares);

routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.update);

export default routes;
