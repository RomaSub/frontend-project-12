import { Container, Row } from 'react-bootstrap';
import { ChannelsContainer } from '../components/ChannelsBox/ChannelsContainer';
import { ChatContainer } from '../components/ChatBox/ChatContainer';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

export const ChatPage = () => {
  //const socket = io('http://localhost:5001/', {
  //  transports: ['websocket']
  //});
  //
  //useEffect(() => {
  //  socket.on('newMessage', payload => console.log(payload));
  //}, []);

  return (
    <Container className='h-100 my-4 overflow-hidden rounded shadow'>
      <Row className='row h-100 bg-white flex-md-row'>
        <ChannelsContainer />
        <ChatContainer />
      </Row>
    </Container>
  );
};
