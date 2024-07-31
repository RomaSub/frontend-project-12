import { Container, Row } from 'react-bootstrap';
import { ChannelsContainer } from '../components/ChannelsBox/ChannelsContainer';
import { ChatContainer } from '../components/ChatBox/ChatContainer';
import { MainModal } from '../components/Modals/MainModal';
import { io } from 'socket.io-client';
import { useEffect } from 'react';
import { messagesApi } from '../services/messagesApi';
import { useDispatch } from 'react-redux';
import { channelsApi } from '../services/channelsApi';

export const ChatPage = () => {
  const socket = io('http://localhost:5001/', { transports: ['websocket'] });
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('newMessage', _ => {
      dispatch(messagesApi.util.invalidateTags(['Message']));
    });

    socket.on('newChannel', _ => {
      dispatch(channelsApi.util.invalidateTags(['Channel']));
    });

    socket.on('removeChannel', _ => {
      dispatch(channelsApi.util.invalidateTags(['Channel']));
    });

    socket.on('renameChannel', _ => {
      dispatch(channelsApi.util.invalidateTags(['Channel']));
    });

    return () => {
      socket.off('newMessage');
      socket.off('newChannel');
      socket.off('removeChannel');
      socket.off('renameChannel');
    };
  }, [dispatch, socket]);

  return (
    <Container className='h-100 my-4 overflow-hidden rounded shadow'>
      <Row className='row h-100 bg-white flex-md-row'>
        <MainModal />
        <ChannelsContainer />
        <ChatContainer />
      </Row>
    </Container>
  );
};
