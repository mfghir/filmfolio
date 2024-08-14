import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import connectDB from "@/lib/connectDB";

export async function POST(req: Request) {
  try {
    // const { name, email, password } = await req.json();
    const userData = await req.json();
    console.log("userData register ********" ,userData);
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    await connectDB();
    await User.create({ ...userData, password: hashedPassword });
    // await User.create({
    //   name: "fateme ghafari",
    //   password: "Mfghir98**",
    //   email: "fatemeghafari98@gmail.com",
    //   username: "fatemeweb",
    // });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
