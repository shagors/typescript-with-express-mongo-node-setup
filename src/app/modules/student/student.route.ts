import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// call controller
router.post('/create-student', StudentControllers.createStudent);
router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getStudent);
router.delete('/:studentId', StudentControllers.deleteStudent);
export const StudentRoutes = router;
