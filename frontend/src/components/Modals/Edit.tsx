import { useFormik } from 'formik';
import { useEffect, useRef } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectChannelsData, useEditChannelMutation } from '../../services/channelsApi';
import { selectChannelModalId } from '../../services/uiSlice';
import type { ChannelTypes } from '../../types/chat';

export const Edit = ({ closeModal }: { closeModal: () => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();
  const channels = useSelector(selectChannelsData);
  const channelId = useSelector(selectChannelModalId);
  const [editChannel] = useEditChannelMutation();

  const currentChannelName = channels.find((channel: ChannelTypes) => channel.id === channelId).name;

  useEffect(() => {
    inputRef.current?.select();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: currentChannelName
    },
    onSubmit: name => {
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
              ref={inputRef}
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
