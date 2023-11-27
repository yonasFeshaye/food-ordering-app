import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import {authOptions} from "../auth/[...nextauth]/route"
import { User } from "@/app/models/User";

export async function PUT(req) {
  mongoose.connect(process.env.MONGO_URL);
  const data = await req.json();
  const session = await getServerSession(authOptions);
  const email = session.user.email;

  if ('name' in data) {
  const filter = { email };
  const update = { $set: { name: data.name } };

  try {
    await User.updateOne(filter, update);
  } catch (error) {
    console.error('Error updating user:', error);
  }
}
  return Response.json(true)
}
