import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth-options";

import User from "@/models/user";
import DramaModel from "@/models/kdrama";
import connectDB from "@/lib/connectDB";

import { Types } from "mongoose";

export async function DELETE(req: any,context: any) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { error: "You must be logged in to delete a drama." },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session?.user?.email });
    if (!user) {
      return NextResponse.json(
        { error: "User account not found." },
        { status: 404 }
      );
    }



    

    // Extract KDrama ID from request
    const id = context.params.dramaId;
    // const { id } = await req.json();
    console.log("id drama-------->", id)

    if (!id) {
      return NextResponse.json(
        { error: "KDrama ID is required." },
        { status: 400 }
      );
    }

    // Find and delete the drama only if it belongs to the authenticated user
    const drama = await DramaModel.findOneAndDelete({
      _id: new Types.ObjectId(id),
      userId: user._id,
    });







    if (!drama) {
      return NextResponse.json(
        { error: "Drama not found or you do not have permission to delete this drama." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Drama deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting KDrama:", error);
    return NextResponse.json(
      { error: "An error occurred while deleting the KDrama." },
      { status: 500 }
    );
  }
}





// export async function DELETE(request: any, context: any) {
//     try {
//       await connectDB();
//       const id = context.params.dramaId;
//       console.log("id drama-------->", id)
//       await User.findByIdAndDelete(id);
  
//       return NextResponse.json(
//         { message: "user deleted Successfully" },
//         { status: 200 }
//       );
//     } catch (error) {
//       return NextResponse.json(
//         { message: "Failed to Delete a Course", error },
//         { status: 500 }
//       );
//     }
// }