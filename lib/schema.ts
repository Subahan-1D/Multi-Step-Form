
import { z } from 'zod'

export const FormDataSchema = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z
      .string()
      .min(1, 'Email is required')
      .email('Invalid email address'),

    phoneNumber: z
      .string()
      .min(10, 'Phone number must be at least 10 digits')
      .regex(/^\d+$/, 'Phone number must contain only digits'),

    country: z.string().min(1, 'Country is required'),
    street: z.string().min(1, 'Street is required'),
    city: z.string().min(1, 'City is required'),

    zip: z
      .string()
      .min(5, 'ZIP must be at least 5 digits')
      .regex(/^\d+$/, 'ZIP must contain only numbers'),

    username: z.string().min(4, 'Username must be at least 4 characters'),

    password: z.string().min(6, 'Password must be at least 6 characters'),

    confirmPassword: z.string().min(6, 'Confirm password is required')
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  })
