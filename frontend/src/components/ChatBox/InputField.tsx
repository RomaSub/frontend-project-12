import { useFormik } from 'formik';
import leoProfanity from 'leo-profanity';
import { useEffect, useRef } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useAddMessageMutation } from '../../services/messagesApi';
import type { RootState } from '../../services/store';

interface InputFieldProps {
  channelId: string;
}

export const InputField = ({ channelId }: InputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();
  const username = useSelector((state: RootState) => state.auth.username);
  const [addMessage] = useAddMessageMutation();

  const validationSchema = yup.object().shape({
    body: yup.string().trim().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      body: '',
    },
    validationSchema,
    onSubmit: async ({ body }) => {
      try {
        const filtredMessage = leoProfanity.clean(body);
        const newMessage = { username, channelId, body: filtredMessage };

        await addMessage(newMessage);
      } catch (err) {
        formik.setSubmitting(false);
        console.error(err);
        toast.error(t('toast.networkError'));
      }
    },
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, [channelId, formik.isSubmitting]);

  const isInvalid = !formik.isValid || !formik.dirty;

  return (
    <div className='mt-auto px-5 py-3'>
      <Form className='py-1 border rounded-2' onSubmit={formik.handleSubmit}>
        <InputGroup hasValidation={isInvalid}>
          <Form.Control
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.body}
            className='border-0 p-0 ps-2'
            name='body'
            aria-label={t('chatPage.newMessage')}
            placeholder={t('chatPage.inputPlaceholder')}
            required
            ref={inputRef}
          />
          <Button type='submit' variant='group-vertical' disabled={isInvalid}>
            <i className='bi bi-arrow-right-square m-0 h5'></i>
            <span className='visually-hidden'>{t('chatPage.send')}</span>
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};
