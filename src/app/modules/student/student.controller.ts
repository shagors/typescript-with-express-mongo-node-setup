import { StudentServices } from './student.service';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const getStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudent(studentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is retrieved Successfully',
    data: result,
  });
});

const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudents();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students are retrieved Successfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
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
