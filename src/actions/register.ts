// Actions must be use server
"use server";
import { z } from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  // Validate fields
  const validatedFields = RegisterSchema.safeParse(values);

  // If fields are not valid
  if (!validatedFields.success) {
    return { error: "Invalid fields 😞" };
  } 

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  // display text if email is taken
  if (existingUser) {
    return { error: "Email already taken 😞" };
  }

  // succes code
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  // If fields are valid
  return { success: "Confirmation email sent!" };
};
