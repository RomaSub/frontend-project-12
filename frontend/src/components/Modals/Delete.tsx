import { Button, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useRemoveChannelMutation } from '../../services/channelsApi';
import { selectChannelModalId } from '../../services/uiSlice';
import { toast } from 'react-toastify';

export const Delete = ({ closeModal }: { closeModal: () => void }) => {
  const [removeChannel] = useRemoveChannelMutation();
  const channelId = useSelector(selectChannelModalId);
  const { t } = useTranslation();

  const handleDelete = async () => {
    try {
      await removeChannel(channelId);
      closeModal();
      toast.success(t('toast.channelDelete'));
    } catch (err) {
      toast.error(t('toast.networkError'));
    }
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
          <Button variant='danger' onClick={handleDelete}>
            {t('modal.delete')}
          </Button>
        </div>
      </Modal.Body>
    </>
  );
};
