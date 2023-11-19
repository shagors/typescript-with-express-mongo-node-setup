import Joi from 'joi';

const nameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .max(20)
    .pattern(/^[A-Z][a-z]*$/)
    .messages({
      'string.base': 'First Name must be a string',
      'string.empty': 'First Name is required',
      'string.max': 'First Name can not be more than 20 characters',
      'string.pattern.base':
        'First Name must start with a capital letter and contain only alphabetic characters',
      'any.required': 'First Name is required',
    }),
  middleName: Joi.string().trim(),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[A-Za-z]+$/)
    .messages({
      'string.base': 'Last Name must be a string',
      'string.empty': 'Last Name is required',
      'string.pattern.base':
        'Last Name must contain only alphabetic characters',
      'any.required': 'Last Name is required',
    }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required().messages({
    'string.base': 'Father Name must be a string',
    'string.empty': 'Father Name is required',
    'any.required': 'Father Name is required',
  }),
  fatherOccupation: Joi.string().trim().required().messages({
    'string.base': 'Father Occupation must be a string',
    'string.empty': 'Father Occupation is required',
    'any.required': 'Father Occupation is required',
  }),
  fatherContactNo: Joi.string().trim().required().messages({
    'string.base': 'Father Contact No must be a string',
    'string.empty': 'Father Contact No is required',
    'any.required': 'Father Contact No is required',
  }),
  motherName: Joi.string().trim().required().messages({
    'string.base': 'Mother Name must be a string',
    'string.empty': 'Mother Name is required',
    'any.required': 'Mother Name is required',
  }),
  motherOccupation: Joi.string().trim().required().messages({
    'string.base': 'Mother Occupation must be a string',
    'string.empty': 'Mother Occupation is required',
    'any.required': 'Mother Occupation is required',
  }),
  motherContactNo: Joi.string().trim().required().messages({
    'string.base': 'Mother Contact No must be a string',
    'string.empty': 'Mother Contact No is required',
    'any.required': 'Mother Contact No is required',
  }),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.base': 'Local Guardian Name must be a string',
    'string.empty': 'Local Guardian Name is required',
    'any.required': 'Local Guardian Name is required',
  }),
  occupation: Joi.string().trim().required().messages({
    'string.base': 'Local Guardian Occupation must be a string',
    'string.empty': 'Local Guardian Occupation is required',
    'any.required': 'Local Guardian Occupation is required',
  }),
  contactNo: Joi.string().trim().required().messages({
    'string.base': 'Local Guardian Contact No must be a string',
    'string.empty': 'Local Guardian Contact No is required',
    'any.required': 'Local Guardian Contact No is required',
  }),
  address: Joi.string().trim().required().messages({
    'string.base': 'Local Guardian Address must be a string',
    'string.empty': 'Local Guardian Address is required',
    'any.required': 'Local Guardian Address is required',
  }),
});

const studentJoiValidationSchema = Joi.object({
  id: Joi.string().trim().required().messages({
    'string.base': 'Student ID must be a string',
    'string.empty': 'Student ID is required',
    'any.required': 'Student ID is required',
  }),
  name: nameValidationSchema.required().messages({
    'object.base': 'Student Name must be an object',
    'object.empty': 'Student Name is required',
    'any.required': 'Student Name is required',
  }),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'string.base': 'Gender must be a string',
    'string.empty': 'Gender is required',
    'any.only': 'Gender must be one of: male, female, other',
    'any.required': 'Gender is required',
  }),
  dateOfBirth: Joi.string().trim().required().messages({
    'string.base': 'Date of Birth must be a string',
    'string.empty': 'Date of Birth is required',
    'any.required': 'Date of Birth is required',
  }),
  email: Joi.string().trim().email().required().messages({
    'string.base': 'Email must be a string',
    'string.empty': 'Email is required',
    'string.email': 'Email must be a valid email format',
    'any.required': 'Email is required',
  }),
  contactNo: Joi.string().trim().required().messages({
    'string.base': 'Contact No must be a string',
    'string.empty': 'Contact No is required',
    'any.required': 'Contact No is required',
  }),
  emergencyContactNo: Joi.string().trim().required().messages({
    'string.base': 'Emergency Contact No must be a string',
    'string.empty': 'Emergency Contact No is required',
    'any.required': 'Emergency Contact No is required',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-')
    .messages({
      'string.base': 'Blood Group must be a string',
      'any.only':
        'Blood Group must be one of: A+, B+, AB+, O+, A-, B-, AB-, O-',
    }),
  presentAddress: Joi.string().trim().required().messages({
    'string.base': 'Present Address must be a string',
    'string.empty': 'Present Address is required',
    'any.required': 'Present Address is required',
  }),
  permanantAddress: Joi.string().trim().required().messages({
    'string.base': 'Permanent Address must be a string',
    'string.empty': 'Permanent Address is required',
    'any.required': 'Permanent Address is required',
  }),
  guardian: guardianValidationSchema.required().messages({
    'object.base': 'Guardian details must be an object',
    'object.empty': 'Guardian details are required',
    'any.required': 'Guardian details are required',
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    'object.base': 'Local Guardian details must be an object',
    'object.empty': 'Local Guardian details are required',
    'any.required': 'Local Guardian details are required',
  }),
  profileImg: Joi.string().trim(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
});

export default studentJoiValidationSchema;
