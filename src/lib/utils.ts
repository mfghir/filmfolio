import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}





import User from "@/models/user";
import connectDB from "./connectDB";
import { redirect } from "next/navigation";

import bcrypt from "bcryptjs";

export async function updatePassword({
  newPassword,
  token,
}: {
  newPassword: any;
  token: any;
}) {
  console.log("newPassword", newPassword);
  await connectDB();

  const salt = await bcrypt.genSalt(20);
  const hashedPassword = await bcrypt.hash(newPassword, salt);

  await User.findOneAndUpdate(
    { verifyToken: token },
    { password: hashedPassword }
  );

  redirect("/login");

  //   if (!user) {
  //     throw new Error("User not found");
  //   }
}
