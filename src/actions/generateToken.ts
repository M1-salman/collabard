"use server";

import { auth } from "@/auth";
import { StreamChat } from "stream-chat";

//Here i am generating token for the getstream client/user
export const generateToken = async () => {
    const session = await auth();

    if (!session) {
      throw new Error("No session found");
    }
  
    const api_key = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!;
    const api_secret = process.env.GET_STREAM_SECRET_KEY!;
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const token = serverClient.createToken(session.user?.id!);
    return token;
};
