import { useSelector } from 'react-redux';
import { useGetChannelsQuery } from '../../services/channelsApi';
import type { RootState } from '../../services/store';
import type { ChannelTypes } from '../../types/chat';
import { Channel } from './Channel';

export const ChannelsList = () => {
  const { data: channels, isLoading } = useGetChannelsQuery({});
  const activeChannelId = useSelector((state: RootState) => state.ui.activeChannelId);

  if (isLoading) return <div>...</div>;

  return (
    <ul id='channels-box' className='nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block'>
      {channels.map((channel: ChannelTypes) => (
        <Channel key={channel.id} channel={channel} isCurrent={activeChannelId === channel.id} />
      ))}
    </ul>
  );
};
