import { z } from 'zod';

// Define a Zod schema that mirrors your Mongoose schema
const UserValidationSchema = z.object({
  password: z
    .string({ invalid_type_error: 'Password must be string' })
    .min(8, { message: 'Password must be minimum 8 characters' })
    .optional(),
});

export const UserValidation = { UserValidationSchema };
