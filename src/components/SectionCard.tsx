import { Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import TypographyWithTooltips from './TypographyWithTooltips';

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

export default function SectionCard({
  title,
  children,
  ...props
}: {
  title: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <StyledCard {...props}>
      <CardContent>
        <TypographyWithTooltips
          variant="h5" 
          component="h2" 
          gutterBottom 
          sx={{ 
            borderBottom: '2px solid', 
            borderColor: 'primary.main', 
            pb: 1,
            mb: 2
          }}
        >
          {title}
        </TypographyWithTooltips>
        {children}
      </CardContent>
    </StyledCard>
  );
}
