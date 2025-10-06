import { io } from 'socket.io-client';
import { BASE_URL } from '../config';

let socket;

export const initiateSocketConnection = () => {
  socket = io(BASE_URL, {
    transports: ['websocket', 'polling'],
  });
  
  socket.on('connect', () => {
    console.log('Socket connected:', socket.id);
  });

  socket.on('disconnect', () => {
    console.log('Socket disconnected');
  });

  return socket;
};

export const getSocket = () => {
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
  }
};
