import { Button, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useRemoveChannelMutation } from '../../services/channelsApi';
import type { RootState } from '../../services/store';

export const Delete = ({ closeModal }) => {
  const [removeChannel] = useRemoveChannelMutation();
  const channelId = useSelector((state: RootState) => state.ui.modal.channelId);
  const { t } = useTranslation();

  const handleDelete = () => {
      removeChannel(channelId);
      closeModal();
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t('modal.deleteChannel')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='lead'>{t('modal.sure')}</p>
        <div className='d-flex justify-content-end'>
          <Button variant='secondary' className='me-2' onClick={closeModal}>
            {t('modal.cancel')}
          </Button>
          <Button variant='danger' className='me-2' onClick={handleDelete}>
            {t('modal.delete')}
          </Button>
        </div>
      </Modal.Body>
    </>
  );
};
