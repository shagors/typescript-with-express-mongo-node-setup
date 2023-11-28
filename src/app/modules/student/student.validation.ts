import { z } from 'zod';

const UserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20),
  middleName: z.string().optional(),
  lastName: z.string().min(1),
});

const GuardianValidationSchema = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string().min(1),
  fatherContactNo: z.string().min(1),
  motherName: z.string().min(1),
  motherOccupation: z.string().min(1),
  motherContactNo: z.string().min(1),
});

const LocalGuardianValidationSchema = z.object({
  name: z.string().min(1),
  occupation: z.string().min(1),
  contactNo: z.string().min(1),
  address: z.string().min(1),
});

const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().min(8),
    student: z.object({
      name: UserNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string().min(1),
      email: z.string().min(1).email(),
      contactNo: z.string().min(1),
      emergencyContactNo: z.string().min(1),
      bloodGroup: z
        .enum(['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'])
        .optional(),
      presentAddress: z.string().min(1),
      permanantAddress: z.string().min(1),
      guardian: GuardianValidationSchema,
      localGuardian: LocalGuardianValidationSchema,
      profileImg: z.string().optional(),
    }),
  }),
});

export const StudentValidations = { createStudentValidationSchema };
