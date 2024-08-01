import { Button, Form, InputGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAddMessageMutation } from '../../services/messagesApi';
import type { RootState } from '../../services/store';
import { useEffect, useRef, useState } from 'react';

interface InputFieldProps {
  channelId: string;
}

export const InputField = ({ channelId }: InputFieldProps) => {
  const [addMessage] = useAddMessageMutation();
  const [body, setBody] = useState('');
  const username = useSelector((state: RootState) => state.auth.username);
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [channelId]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessage = { username, channelId, body };
    addMessage(newMessage);
    setBody('');
  };

  return (
    <div className='mt-auto px-5 py-3'>
      <Form className='py-1 border rounded-2' onSubmit={e => handleSubmit(e)}>
        <InputGroup>
          <Form.Control
            value={body}
            onChange={e => setBody(e.target.value)}
            className='border-0 p-0 ps-2'
            name='body'
            aria-label={t('chatPage.newMessage')}
            placeholder={t('chatPage.inputPlaceholder')}
            required
            ref={inputRef}
          />
          <Button type='submit' variant='group-vertical'>
            <i style={{ height: 20 }} className='bi bi-arrow-right-square'></i>
            <span className='visually-hidden'>{t('chatPage.send')}</span>
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};
