import React, { useEffect, useRef, useState } from 'react';
import socket from '../../socket/videochatSocket';
import ACTIONS from '../../socket/actions';
import {v4} from 'uuid';
import { useNavigate } from 'react-router-dom';

function VideoChat() {
  const navigate = useNavigate();
  const [rooms, updateRooms] = useState([]);
  const rootNode = useRef();

  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, ({rooms = []} = {}) => {
      if (rootNode.current) {
        updateRooms(rooms);
      }
    });
  }, []);

  return (
    <div ref={rootNode}>
      <h1>Available Rooms</h1>

      <ul>
        {rooms.map(roomID => (
          <li key={roomID}>
            {roomID}
            <button onClick={() => {
              navigate(`/room/${roomID}`);
            }}>JOIN ROOM</button>
          </li>
        ))}
      </ul>

      <button onClick={() => {
        navigate(`/room/${v4()}`);
      }}>Create New Room</button>
    </div>
  );
}

export default VideoChat;
