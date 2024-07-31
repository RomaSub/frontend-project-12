import { useDispatch } from 'react-redux';
import { setCurrentChannel } from '../../services/uiSlice';
import type { ChannelTypes } from '../../types/chat';
import { Button } from 'react-bootstrap';

interface ChannelProps {
  channel: ChannelTypes;
  isCurrent: boolean;
}

export const Channel = ({ channel, isCurrent }: ChannelProps) => {
  const dispatch = useDispatch()
  const variant = isCurrent ? 'secondary' : 'light';


  const handleSetCurrent = (id: string) => {
    dispatch(setCurrentChannel({channelId: id}))
  }

  return (
    <li className='nav-item w-100'>
      <Button type='button' onClick={() => handleSetCurrent(channel.id)} variant={variant} className='w-100 rounded-0 text-start'>
        <span className='me-1'>#</span>
        {channel.name}
      </Button>
    </li>
  );
};
