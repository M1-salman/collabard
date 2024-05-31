import { RoomVideo } from "./videoPlayer";

const Room = ({ params }: { params: { roomId: string } }) => {
  return (
    <div className="p-4">
      <RoomVideo roomId={params.roomId} />
    </div>
  );
};

export default Room;
