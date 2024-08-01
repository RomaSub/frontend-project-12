import { useSelector } from 'react-redux';
import { selectChannels } from '../../services/channelsApi';
import { selectActiveChannelId } from '../../services/uiSlice';
import type { ChannelTypes } from '../../types/chat';
import { Channel } from './Channel';

export const ChannelsList = () => {
  const channels = useSelector(selectChannels);
  const activeChannelId = useSelector(selectActiveChannelId);

  return (
    <ul id='channels-box' className='nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block'>
      {channels.map((channel: ChannelTypes) => (
        <Channel key={channel.id} channel={channel} isCurrent={activeChannelId === channel.id} />
      ))}
    </ul>
  );
};
