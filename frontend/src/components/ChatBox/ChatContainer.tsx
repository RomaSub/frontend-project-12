import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectActiveChannelId } from '../../services/uiSlice';
import type { ChannelTypes, MessageTypes } from '../../types/chat';
import { InputField } from './InputField';
import { MessagesField } from './MessagesField';

interface ChatContainerProps {
  channels: ChannelTypes[];
  messages: MessageTypes[];
}

export const ChatContainer = ({ channels, messages }: ChatContainerProps) => {
  const { t } = useTranslation();
  const activeChannelId = useSelector(selectActiveChannelId);
  const activeChannel = channels?.find((channel: ChannelTypes) => channel.id === activeChannelId);
  const activeChannelMessages = messages?.filter((message: MessageTypes) => message.channelId === activeChannelId);

  return (
    <Col className='p-0 h-100'>
      <div className='d-flex flex-column h-100'>
        <div className='mb-4 p-3 shadow-sm small'>
          <p className='m-0'>
            <b>{`# ${activeChannel?.name}`}</b>
          </p>
          <span className='text-muted'>{t('chatPage.messages', { count: activeChannelMessages?.length })}</span>
        </div>
        <MessagesField messages={activeChannelMessages} />
        <InputField channelId={activeChannelId} />
      </div>
    </Col>
  );
};
