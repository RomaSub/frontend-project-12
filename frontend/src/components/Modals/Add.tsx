import { useFormik } from 'formik';
import { Modal, Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useAddChannelMutation } from '../../services/channelsApi';
import { useEffect, useRef } from 'react';

export const Add = ({ closeModal }: { closeModal: () => void }) => {
  const [addChannel] = useAddChannelMutation();
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: ''
    },
    onSubmit: name => {
      addChannel(name);
      closeModal();
    }
  });

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t('modal.addChannel')}</Modal.Title>
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
