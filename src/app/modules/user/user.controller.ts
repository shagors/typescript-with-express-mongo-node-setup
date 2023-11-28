import { RequestHandler } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createStudent: RequestHandler = async (req, res, next) => {
  try {
    const { password, student: studentData } = req.body;

    // data validation with Zod
    // const zodParsedData = StudentValidationSchema.parse(studentData);

    const result = await UserServices.createUserIntoDB(password, studentData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is created Successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserControllers = { createStudent };
