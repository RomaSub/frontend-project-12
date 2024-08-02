import { useFormik } from 'formik';
import { useEffect, useRef } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectChannels, useEditChannelMutation } from '../../services/channelsApi';
import { selectChannelModalId } from '../../services/uiSlice';
import type { ChannelTypes } from '../../types/chat';
import { modalSchema } from '../../utils/validations';

export const Edit = ({ closeModal }: { closeModal: () => void }) => {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const channels = useSelector(selectChannels);
  const channelId = useSelector(selectChannelModalId);
  const [editChannel] = useEditChannelMutation();

  const currentChannelName: string = channels.find((channel: ChannelTypes) => channel.id === channelId).name;
  const channelNames = channels.map(({ name }: { name: string }) => name);

  useEffect(() => {
    inputRef.current?.select();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: currentChannelName
    },
    validationSchema: modalSchema(channelNames, t),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async name => {
      try {
        await editChannel({ name, channelId });
        closeModal();
      } catch (err) {
        console.error(err);
        formik.setSubmitting(false);
      }
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
              isInvalid={!!(formik.touched.name && formik.errors.name)}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              ref={inputRef}
            />
            <Form.Label className='visually-hidden' htmlFor='name'>
              {t('modal.channelName')}
            </Form.Label>
            <Form.Control.Feedback type='invalid'>{formik.errors.name}</Form.Control.Feedback>
            <div className='d-flex justify-content-end'>
              <Button variant='secondary' className='me-2' onClick={closeModal}>
                {t('modal.cancel')}
              </Button>
              <Button disabled={formik.isSubmitting} type='submit'>
                {t('modal.send')}
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
    </>
  );
};