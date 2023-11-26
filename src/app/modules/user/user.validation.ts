import { z } from 'zod';

// Define a Zod schema that mirrors your Mongoose schema
const UserValidationSchema = z.object({
  id: z.string(),
  password: z
    .string()
    .min(8, { message: 'Password must be minimum 8 characters' }),
  needsPasswordChange: z.boolean().optional().default(true),
  role: z.enum(['admin', 'student', 'faculty']),
  status: z.enum(['in-progress', 'blocked']).default('in-progress'),
  isDeleted: z.boolean().optional().default(false),
});

export const UserValidation = { UserValidationSchema };
