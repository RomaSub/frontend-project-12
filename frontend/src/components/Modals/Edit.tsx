import { useFormik } from 'formik';
import { Button, Form, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useEditChannelMutation, useGetChannelsQuery } from '../../services/channelsApi';
import { useSelector } from 'react-redux';
import type { RootState } from '../../services/store';
import type { ChannelTypes } from '../../types/chat';

export const Edit = ({ closeModal }) => {
  const { t } = useTranslation();
  const [editChannel] = useEditChannelMutation();
  const { data: channels } = useGetChannelsQuery({});
  const channelId = useSelector((state: RootState) => state.ui.modal.channelId);
  const currentChannelName = channels.find((channel: ChannelTypes) => channel.id === channelId).name;

  const formik = useFormik({
    initialValues: {
      name: currentChannelName
    },
    onSubmit: name => {
      console.log(name, channelId)
      editChannel({ name, channelId });
      closeModal();
    }
  });

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t('modal.renameChannel')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Control
              className='mb-2'
              type='text'
              name='name'
              id='name'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
            />
            <div className='d-flex justify-content-end'>
              <Button variant='secondary' className='me-2' onClick={closeModal}>
                {t('modal.cancel')}
              </Button>
              <Button type='submit' className='me-2'>
                {t('modal.send')}
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
    </>
  );
};
