"use client";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "stream-chat-react/dist/css/v2/index.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { generateToken } from "@/actions/generateToken";
import { useCurrentUser } from "@/hooks/useCurrentUser";

import {
  Call,
  CallControls,
  CallParticipantsList,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-sdk";

const apiKey = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!;

export const RoomVideo = ({ roomId }: { roomId: string }) => {
  const session = useCurrentUser();
  const router = useRouter();

  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | undefined>(undefined);
  const [callLeft, setCallLeft] = useState(false);

  const handleOnLeave = async () => {
    if (callLeft) return;
    setCallLeft(true);
    try {
      await call?.leave();
    } catch (error) {
      console.error("Error leaving the call:", error);
    } finally {
      router.push("/");
    }
  };

  useEffect(() => {
    if (!roomId || !session) return;

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: session.id!,
        name: session.name ?? "Unknown",
        image: session.image ?? undefined,
      },
      tokenProvider: () => generateToken(),
    });

    const call = client.call("default", roomId);
    call.join({ create: true }).then(() => {
      setClient(client);
      setCall(call);
    });

    return () => {
      setClient(null);
      client.disconnectUser();
    };
  }, [roomId, session]);

  if (!client || !call) {
    return (
      <div className="min-h-[85vh] flex justify-center items-center">
        Joining room...
      </div>
    );
  }

  return (
    <StreamVideo client={client}>
      <StreamTheme>
        <StreamCall call={call}>
          <SpeakerLayout />
          <CallControls onLeave={handleOnLeave} />
          <CallParticipantsList onClose={() => undefined} />
        </StreamCall>
      </StreamTheme>
    </StreamVideo>
  );
};
