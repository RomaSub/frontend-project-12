import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { openModal, setCurrentChannel } from '../../services/uiSlice';
import type { ChannelTypes } from '../../types/chat';

interface ChannelProps {
  channel: ChannelTypes;
  isCurrent: boolean;
}

export const Channel = ({ channel, isCurrent }: ChannelProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const variant = isCurrent ? 'secondary' : '';

  const handleSetCurrent = (id: string) => {
    dispatch(setCurrentChannel({ channelId: id }));
  };

  const handleRenameModal = () => {
    dispatch(openModal({ type: 'edit', channelId: channel.id }));
  };

  const handleDeleteModal = () => {
    dispatch(openModal({ type: 'delete', channelId: channel.id }));
  };

  return (
    <li className='nav-item w-100'>
      {channel.removable ? (
        <Dropdown as={ButtonGroup} className='d-flex'>
          <Button
            type='button'
            className='w-100 rounded-0 text-start text-truncate'
            onClick={() => handleSetCurrent(channel.id)}
            variant={variant}>
            <span className='me-1'>#</span>
            {channel.name}
          </Button>

          <Dropdown.Toggle split className='flex-grow-0' variant={variant}>
            <span className='visually-hidden'>{t('chatPage.menu')}</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={handleDeleteModal}>{t('chatPage.delete')}</Dropdown.Item>
            <Dropdown.Item onClick={handleRenameModal}>{t('chatPage.rename')}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Button
          type='button'
          onClick={() => handleSetCurrent(channel.id)}
          variant={variant}
          className='w-100 rounded-0 text-start'>
          <span className='me-1'>#</span>
          {channel.name}
        </Button>
      )}
    </li>
  );
};
