import { Button, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { ChannelsList } from './ChannelsList';

export const ChannelsContainer = () => {
  const { t } = useTranslation();

  return (
    <Col xss={4} md={2} className='border-end px-0 flex-column h-100 d-flex'>
      <div className='d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4'>
        <b>{t('chatPage.channels')}</b>
        <Button size='lg' type='button' variant='group-vertical' className='p-0 text-primary'>
          <i className='bi bi-plus-square'></i>
          <span className='visually-hidden'>+</span>
        </Button>
      </div>
      <ChannelsList />
    </Col>
  );
};
