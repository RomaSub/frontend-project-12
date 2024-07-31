import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useGetChannelsQuery } from '../../services/channelsApi';
import { useGetMessagesQuery } from '../../services/messagesApi';
import type { RootState } from '../../services/store';
import type { ChannelTypes, MessageTypes } from '../../types/chat';
import { InputField } from './InputField';
import { MessagesField } from './MessagesField';

export const ChatContainer = () => {
  const { t } = useTranslation()
  const activeChannelId = useSelector((state: RootState) => state.ui.activeChannelId);
  const { data: channels } = useGetChannelsQuery({});
  const { data: messages, isLoading } = useGetMessagesQuery({})

  const currentChannel = channels?.find((channel: ChannelTypes) => channel.id === activeChannelId);
  if (isLoading) return <div>...</div>

  const currentChannelMessages = Object
    .values(messages)
    .filter((message: MessageTypes) => message.channelId === activeChannelId)

  return (
    <Col className='p-0 h-100'>
      <div className='d-flex flex-column h-100'>
        <div className='mb-4 p-3 shadow-sm small'>
          <p className='m-0'><b>{`# ${currentChannel?.name}`}</b></p>
          <span className='text-muted'>
              {t('chatPage.messages', {count: currentChannelMessages.length})}
          </span>
        </div>
        <MessagesField messages={currentChannelMessages}/>
        <InputField />
      </div>
    </Col>
  );
};
