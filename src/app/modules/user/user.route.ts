import express from 'express';
import { UserControllers } from './user.controller';
import { StudentValidations } from '../student/student.validation';
import validateRequest from '../../middlwares/validateRequest';
import { createFacultyValidationSchema } from '../Faculty/faculty.validation';

const router = express.Router();

// call controller
router.post(
  '/create-student',
  validateRequest(StudentValidations.createStudentValidationSchema),
  UserControllers.createStudent,
);

router.post(
  '/create-faculty',
  validateRequest(createFacultyValidationSchema),
  UserControllers.createFaculty,
);

export const UserRoutes = router;
