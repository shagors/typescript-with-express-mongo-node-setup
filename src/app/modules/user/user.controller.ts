import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    // data validation with Zod
    // const zodParsedData = StudentValidationSchema.parse(studentData);

    const result = await UserServices.createUserIntoDB(password, studentData);

    res.status(200).json({
      success: true,
      message: 'Student is created Successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserControllers = { createStudent };
