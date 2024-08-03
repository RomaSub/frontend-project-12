import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleSwitch = (lng: string) => {
    localStorage.setItem('lng', lng);
    i18n.changeLanguage(lng);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle split as='span' style={{ cursor: 'pointer' }}>
        <i className='bi bi-translate'></i> {t(`header.${currentLanguage}`)}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleSwitch('ru')}>{t('header.ru')}</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSwitch('en')}>{t('header.en')}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
