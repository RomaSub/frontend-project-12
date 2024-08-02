import { useEffect, useRef } from 'react';
import type { MessageTypes } from '../../types/chat';

interface MessagesFieldProps {
  messages: MessageTypes[];
}

export const MessagesField = ({ messages }: MessagesFieldProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <div id='messages-box' className='chat-messages overflow-auto px-5'>
      {messages?.map((message: MessageTypes) => (
        <div key={message.id} className='text-break mb-2' ref={scrollRef}>
          <b>{message.username}</b>
          {': '}
          {message.body}
        </div>
      ))}
    </div>
  );
};
