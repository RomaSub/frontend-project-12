import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import { ChannelsContainer } from '../components/ChannelsBox/ChannelsContainer';
import { ChatContainer } from '../components/ChatBox/ChatContainer';
import { CustomSpinner } from '../components/CustomSpinner';
import { MainModal } from '../components/Modals/MainModal';
import { channelsApi, useGetChannelsQuery } from '../services/channelsApi';
import { messagesApi, useGetMessagesQuery } from '../services/messagesApi';

export const ChatPage = () => {
  const { data: channels, isLoading: isLoadingChannels } = useGetChannelsQuery({});
  const { data: messages, isLoading: isLoadingMessages } = useGetMessagesQuery({});
  const dispatch = useDispatch();

  const socket = io();

  useEffect(() => {
    socket.on('newMessage', () => {
      dispatch(messagesApi.util.invalidateTags(['Message']));
    });

    socket.on('newChannel', () => {
      dispatch(channelsApi.util.invalidateTags(['Channel']));
    });

    socket.on('removeChannel', () => {
      dispatch(channelsApi.util.invalidateTags(['Channel']));
    });

    socket.on('renameChannel', () => {
      dispatch(channelsApi.util.invalidateTags(['Channel']));
    });

    return () => {
      socket.off('newMessage');
      socket.off('newChannel');
      socket.off('removeChannel');
      socket.off('renameChannel');
    };
  }, [dispatch, socket]);

  if (isLoadingMessages || isLoadingChannels) return <CustomSpinner />;

  return (
    <Container className='h-100 my-4 overflow-hidden rounded shadow'>
      <div className='row h-100 bg-white flex-md-row'>
        <MainModal />
        <ChannelsContainer />
        <ChatContainer channels={channels} messages={messages} />
      </div>
    </Container>
  );
};
