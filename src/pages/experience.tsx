import { List, ListItem, ListItemText } from '@mui/material';
import { Work } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import i18nText from '../i18n';
import Layout from '../components/Layout';
import SectionCard from '../components/SectionCard';
import TypographyWithTooltips from '../components/TypographyWithTooltips';

export default function Experience() {
  const { t } = useTranslation();
  const item = i18nText.zh.translation.experience

  return (
    <Layout>
      <SectionCard title={t('navbar.experience')}>
        {item.map((exp, i) => (
          <List key={exp.id} sx={{ mb: 2 }}>
            <ListItem alignItems="flex-start" sx={{ 
              backgroundColor: 'background.paper', 
              borderRadius: 1, 
              mb: 1,
              borderLeft: '4px solid',
              borderLeftColor: 'secondary.main'
            }}>
              <Work sx={{ mr: 2, color: 'secondary.main' }} />
              <ListItemText
                primary={
                  <TypographyWithTooltips variant="h6" component="span">
                    {t(`experience.${i}.organization`)} - {t(`experience.${i}.role`)}
                  </TypographyWithTooltips>
                }
                secondary={
                  <>
                    <TypographyWithTooltips component="span" variant="subtitle1" color="text.primary">
                      {t(`experience.${i}.period`)}
                    </TypographyWithTooltips>
                    <br />
                    <br />
                    {t(`experience.${i}.description`)}
                    <br />
                    <br />
                    <TypographyWithTooltips variant="caption" sx={{ }}>
                      {t(`experience.${i}.keywords`)}
                    </TypographyWithTooltips>
                  </>
                }
              />
            </ListItem>
          </List>
        ))}
      </SectionCard>
    </Layout>
  );
}