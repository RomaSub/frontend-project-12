import { Container, Row } from 'react-bootstrap';
import { ChannelsContainer } from '../components/ChannelsBox/ChannelsContainer';
import { ChatContainer } from '../components/ChatBox/ChatContainer';

export const ChatPage = () => {
  return (
    <Container className='h-100 my-4 overflow-hidden rounded shadow'>
      <Row className='row h-100 bg-white flex-md-row'>
        <ChannelsContainer />
        <ChatContainer />
      </Row>
    </Container>
  );
};
