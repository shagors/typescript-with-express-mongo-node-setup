import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

// call controller
router.post('/create-student', UserControllers.createStudent);

export const UserRoutes = router;
