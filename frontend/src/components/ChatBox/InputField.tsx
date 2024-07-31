import { Button, Form, InputGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const InputField = () => {
  const { t } = useTranslation();

  return (
    <div className='mt-auto px-5 py-3'>
      <Form className='py-1 border rounded-2'>
        <InputGroup>
          <Form.Control
            className='border-0 p-0 ps-2'
            name='body'
            aria-label={t('chatPage.newMessage')}
            placeholder={t('chatPage.inputPlaceholder')}
          />
          <Button type="submit" variant='group-vertical'>
          <i className="bi bi-arrow-right-square"></i>
            <span className='visually-hidden'>{t('chatPage.send')}</span>
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};
