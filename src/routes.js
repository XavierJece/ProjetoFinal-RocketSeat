import { Router } from 'express';

const routes = new Router();

// Router de teste
routes.get('/', (req, res) =>{
    return res.json({ message: 'Helo Word'});
})

export default routes;
