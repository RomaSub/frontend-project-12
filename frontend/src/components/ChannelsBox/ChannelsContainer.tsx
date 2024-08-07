import { Button, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { openModal } from '../../services/uiSlice';
import { ChannelsList } from './ChannelsList';

export const ChannelsContainer = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleAddModal = () => {
    dispatch(openModal({ type: 'add', channelId: null }));
  };

  return (
    <Col xs={4} md={2} className='border-end px-0 flex-column h-100 d-flex'>
      <div className='d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4'>
        <b>{t('chatPage.channels')}</b>
        <Button type='button' variant='group-vertical' onClick={handleAddModal} className='p-0 text-primary'>
          <i className='bi bi-plus-square h5 m-0'></i>
          <span className='visually-hidden'>{t('chatPage.plus')}</span>
        </Button>
      </div>
      <ChannelsList />
    </Col>
  );
};
