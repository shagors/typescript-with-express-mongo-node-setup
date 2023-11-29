import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlwares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);
// call controller
// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getStudent);
// router.delete('/:studentId', StudentControllers.deleteStudent);
export const AcademicSemesterRoutes = router;
