import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentServices } from './student.service';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
  };
};

const getStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudent(studentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is retrieved Successfully',
    data: result,
  });
});

const getAllStudents = catchAsync(async (req, res, next) => {
  const result = await StudentServices.getAllStudents();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students are retrieved Successfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteSingleStudent(studentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is deleted Successfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getStudent,
  deleteStudent,
};
