import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth-options";

import User from "@/models/user";
import DramaModel from "@/models/kdrama";
import connectDB from "@/lib/connectDB";

import { Types } from "mongoose";

export async function GET() {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);
    // console.log("GET session - kdrama******", session);

    const user = await User.findOne({ email: session?.user?.email });
    // console.log("user - kdrama ******", user._id);

    const kdramaList = await DramaModel.find({ userId: user?._id })
      .select("-userId")
      .sort({ createdAt: -1 });
    // console.log("kdramaList - kdrama ******", kdramaList);

    return NextResponse.json(
      { message: "Successfully get the data", data: kdramaList },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch kdramas", error },
      { status: 500 }
    );
  }
}





export async function POST(req: any) {
  try {
    await connectDB();
    const body = await req.json();
    const { title, status, label, genre, sort, nationality, opinion }: any =
      body;

    const session = await getServerSession(authOptions);
    // console.log("POST KDrama session******", session);

    if (!session) {
      return NextResponse.json(
        { error: "please enter to your account" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session?.user?.email });
    // console.log("POST KDrama user******", user);

    if (!user) {
      return NextResponse.json(
        { error: "this account can not be found" },
        { status: 404 }
      );
    }

    if (
      !title ||
      !status ||
      !label ||
      !genre ||
      !sort ||
      !nationality ||
      !opinion
    ) {
      return NextResponse.json(
        { error: "sth went wrong" },
        { status: 400 }
      );
    }

    // const newKDrama =
    await DramaModel.create({
      title,
      status,
      label,
      genre,
      opinion,
      sort,
      nationality,
      userId: new Types.ObjectId(user._id),
    });
    // console.log("POST newKDrama ******", newKDrama);

    return NextResponse.json({ message: "drama has added." }, { status: 201 });
  } catch (error) {
    console.log("kdrama route error ****", error);
    return NextResponse.json(
      { message: "An error occurred while adding the kdrama." },
      { status: 404 }
    );
  }
}














// export async function DELETE(request: any) {
//   try {
//     await connectDB();
//     const ids = request.nextUrl.searchParams.getAll("ids[]");
//     await DramaModel.deleteMany({ _id: { $in: ids } });

//     return NextResponse.json(
//       { message: "No KDrama IDs provided." },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error deleting users:", error);
//     return NextResponse.json(
//       { message: "Failed to delete users", error },
//       { status: 500 }
//     );
//   }
// }





export async function DELETE(request: any) {
  try {
    await connectDB();

    // Retrieve the array of KDrama IDs from the request query parameters
    const ids = request.nextUrl.searchParams.getAll("ids[]");
    if (!ids || ids.length === 0) {
      return NextResponse.json(
        { message: "No KDrama IDs provided." },
        { status: 400 }
      );
    }

    // Delete all KDramas with the given IDs
    const result = await DramaModel.deleteMany({ _id: { $in: ids } });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "No KDramas found to delete." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "KDramas deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting KDramas:", error);
    return NextResponse.json(
      { message: "Failed to delete KDramas", error },
      { status: 500 }
    );
  }
}