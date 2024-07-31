import type { MessageTypes } from '../../types/chat';

interface MessagesFieldProps {
  messages: MessageTypes[];
}

export const MessagesField = ({ messages }: MessagesFieldProps) => {

  return (
    <div id='messages-box' className='chat-messages overflow-auto px-5'>
      {messages.map((message: MessageTypes) => (
        <div className='text-break mb-2'>
          <b>{message.username}</b>
          {': '}
          {message.body}
        </div>
      ))}
    </div>
  );
};
