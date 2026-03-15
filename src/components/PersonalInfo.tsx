import { Grid, Avatar } from '@mui/material';
import { Email, LocationCity } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import SectionCard from './SectionCard';
import TypographyWithTooltips from './TypographyWithTooltips';

export default function PersonalInfo() {
  const { t } = useTranslation();
  return (
    <SectionCard title={t("personal.info")}>
      <Grid container spacing={2} alignItems="center">
        <Grid size={{
          xs: 12,
          sm: 3,
          md: 2
        }}>
          <Avatar 
            alt={t("personal.name")} 
            src="/profile.png"
            variant={'circular'}
            sx={{ width: 100, height: 100 }} 
          />
        </Grid>
        <Grid size={{
          xs: 12,
          sm: 9,
          md: 10
        }}>
          <TypographyWithTooltips variant="h4" component="h3" gutterBottom>
            {t("personal.name")}
          </TypographyWithTooltips>
          <TypographyWithTooltips variant="h6" color="textSecondary" gutterBottom>
            {t("personal.title")}
          </TypographyWithTooltips>
          
          
          <Grid container spacing={1} sx={{ mt: 2 }}>
            <Grid size={{
              xs: 12,
              sm: 6
            }}>
              <LocationCity fontSize="small" /> {t("personal.location")}
            </Grid>
            <Grid size={{
              xs: 12,
              sm: 6
            }}>
              <Email fontSize="small" /> {t("personal.email")}
            </Grid>
            <TypographyWithTooltips variant="body1" component="p">
              {t("personal.summary")}
            </TypographyWithTooltips>
          </Grid>
        </Grid>
      </Grid>
    </SectionCard>
  );
}
