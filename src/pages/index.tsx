import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Layout from '../components/Layout';
import PersonalInfo from '../components/PersonalInfo';
import SectionCard from '../components/SectionCard';
import TypographyWithTooltips from '../components/TypographyWithTooltips';

export default function Home() {
  const { t } = useTranslation();
  return (
    <Layout>
      <PersonalInfo />
      <Link href="/skills">
        <SectionCard title={t('navbar.skills')}>
          <TypographyWithTooltips component="p" variant="body1">{t('personal.skills')}</TypographyWithTooltips>
          <br />
          <TypographyWithTooltips component="p" variant="body1" sx={{ fontWeight: 'light' }}>{t('personal.skills_post')}</TypographyWithTooltips>
        </SectionCard>
      </Link>
    </Layout>
  );
}
