import express from 'express';
import { UserControllers } from './user.controller';
import { StudentValidations } from '../student/student.validation';
import validateRequest from '../../middlwares/validateRequest';

const router = express.Router();

// call controller
router.post(
  '/create-student',
  validateRequest(StudentValidations.createStudentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
