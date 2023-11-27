import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  const session = await getServerSession(authOptions, req);

  if ('name' in data) {
    const updatedUser = await User.findOneAndUpdate(
      { email: session.data.user.email },
      { name: data.name },
      { new: true }
    );
    return Response.json(updatedUser);
  }

  return Response.json(true)
  
}
