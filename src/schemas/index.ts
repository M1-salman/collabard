import { z } from "zod";

export const JoinRoomSchema = z
  .string()
  .min(1)
  .regex(/^.{3}-.{4}-.{3}$/, {
    message: `Room ID must be 12 characters long and include hyphens, like
'plq-jbby-ore'`,
  });

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(1, {
        message: "Name is required",
      })
      .regex(/^[A-Za-z]+$/, {
        message: "Name must contain only alphabets",
      }),
    email: z.string().email(),
    password: z
      .string()
      .min(6, {
        message: "Minimum 6 characters",
      })
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).*$/, {
        message: "Passwords must contain letters and numbers",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const NewPasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, {
        message: "Minimum 6 characters",
      })
      .regex(/(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/, {
        message: "Passwords must contain letters and numbers",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
