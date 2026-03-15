import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import { useState } from 'react';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState('zh');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleLanguageChange = () => {
    setLang(lang === 'en' ? 'zh' : 'en');
    i18n.changeLanguage(lang === 'en' ? 'zh' : 'en');
  };

  return (
    <button
      onClick={handleLanguageChange}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '8px',
        borderRadius: '4px',
        color: theme.palette.primary.main,
        transition: 'all 0.3s',
      }}
    >
      <TranslateIcon />
      {isMobile ? null : `${lang === 'en' ? 'English' : '中文'}`}
    </button>
  );
}
