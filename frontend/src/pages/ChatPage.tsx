import { Link } from 'react-router-dom';
import { getRoutes } from '../routes';
import { useAddChannelMutation, useGetChannelsQuery } from '../services/channelsApi';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { useState } from 'react';

export const ChatPage = () => {
  const { data: channels, refetch, isLoading } = useGetChannelsQuery({});
  const [text, setText] = useState('');
  const [addChannel] = useAddChannelMutation();

  if (isLoading) return <div>Loading...</div>;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (text.trim() === '') return;
    addChannel({ name: text });
    setText('');
    refetch();
  };

  return (
    <>
      <h1>Chat</h1>
      <InputGroup className='mb-3'>
        <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
        <Form.Control
          onChange={e => setText(e.target.value)}
          value={text}
          placeholder='Channel Name'
          aria-label='Channel Name'
          aria-describedby='basic-addon1'
        />
        <Button onClick={handleClick}>Добавить канал</Button>
      </InputGroup>
      <ul>{channels && channels.map(channel => <li key={channel.id}>{channel.name}</li>)}</ul>
      <Link to={getRoutes.loginPagePath()}>Login</Link>
    </>
  );
};
