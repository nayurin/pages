import { Avatar, List, ListItem, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import i18nText from '../i18n';
import Layout from '../components/Layout';
import SectionCard from '../components/SectionCard';
import TypographyWithTooltips from '../components/TypographyWithTooltips';

export default function Education() {
  const { t } = useTranslation();
  const item = i18nText.zh.translation.education;

  return (
    <Layout>
      <SectionCard title={t('navbar.education')}>
        {item.map((edu, i) => (
          <List key={edu.id} sx={{ mb: 2 }}>
            <ListItem alignItems="flex-start" sx={{ 
              backgroundColor: 'background.paper', 
              borderRadius: 1, 
              mb: 1,
              borderLeft: '4px solid',
              borderLeftColor: 'primary.main'
            }}>
              <Avatar
                src={edu.avatar}
                sx={{ width: 100, height: 100, mr: 2 }} 
              />
              <ListItemText
                primary={
                  <TypographyWithTooltips variant="h6" component="span">
                    {t(`education.${i}.school`)} - {t(`education.${i}.degree`)}
                  </TypographyWithTooltips>
                }
                secondary={
                  <>
                    <TypographyWithTooltips component="span" variant="subtitle1" color="text.primary">
                      {t(`education.${i}.period`)}
                    </TypographyWithTooltips>
                    <br />
                    {t(`education.${i}.description`)}
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
