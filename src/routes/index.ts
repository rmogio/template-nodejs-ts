import express, { Router } from 'express';

const routes = Router();
routes.use(express.json());

// routes.use('/rota', router);

export default routes;
