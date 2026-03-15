import { Fragment, useState } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText,  Typography, Grid, Paper, useMediaQuery } from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses, LinearProgressProps } from '@mui/material/LinearProgress';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { useTranslation } from 'react-i18next';
import i18nText from '../i18n';
import { theme } from '../styles/theme';
import Layout from '../components/Layout';
import SectionCard from '../components/SectionCard';
import TypographyWithTooltips from '../components/TypographyWithTooltips';

const SkillCategory = styled(List)<{ component?: React.ElementType }>({
  '& .MuiListItemButton-root': {
    paddingLeft: 8,
    paddingRight: 8,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

type SkillItem = {
  name: string;
  rating: number;
  description: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
}

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: 'text.secondary' }}
        >{`${Math.round((props.value - 25) / 15)}`}</Typography>
      </Box>
    </Box>
  );
};

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 16,
  borderRadius: 8,
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
  },
}));
  const rating = Math.round((props.value - 25) / 15)
  const color = ['inherit', 'success', 'info', 'warning', 'secondary', 'error'][rating] ?? 'inherit'

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ width: '50%', mr: 1 }}>
        <BorderLinearProgress variant="determinate" color={color as 'success' | 'info' | 'error' | 'warning' | 'secondary' | 'inherit'} {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}
        >{rating}</Typography>
      </Box>
    </Box>
  );
};

function SkillList({
  category,
  items,
  index,
  show,
  onSelect
}:{
  category: string;
  items: SkillItem[];
  index: number;
  show: boolean;
  onSelect: (index: {
    category: number
    skill: number
  }) => void;
}) {
  const [open, setOpen] = useState(show);
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{  }}>
      <ThemeProvider
        theme={createTheme(theme, {
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          }
        })}
      >
        <Paper elevation={0} sx={{  }}>
          <SkillCategory component="nav" disablePadding>
            <Box
              sx={[
                open
                  ? {
                      // bgcolor: 'rgba(71, 98, 130, 0.2)',
                    }
                  : {
                      bgcolor: null,
                    },
                open
                  ? {
                      pb: 2,
                    }
                  : {
                      pb: 0,
                    },
              ]}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={[
                  {
                    px: 3,
                    pt: 2.5,
                  },
                  open
                    ? {
                        pb: 0,
                      }
                    : {
                        pb: 2.5,
                      },
                  open
                    ? {
                        '&:hover, &:focus': {
                          '& svg': {
                            opacity: 1,
                          },
                        },
                      }
                    : {
                        '&:hover, &:focus': {
                          '& svg': {
                            opacity: 0,
                          },
                        },
                      },
                ]}
              >
                <ListItemText
                  primary={category}
                  secondary={open ? '' : items.map((_, i) => t(`skills.${index}.items.${i}.name`)).join(', ')}
                  slotProps={{
                    primary: {
                      fontSize: 15,
                      fontWeight: 'medium',
                      lineHeight: '20px',
                      mb: '2px',
                    },
                    secondary: {
                      noWrap: true,
                      fontSize: 12,
                      lineHeight: '16px',
                      mb: open ? '16px' : 'inherit'
                    }
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={[
                    {
                      mr: -1,
                      opacity: 0,
                      transition: '0.2s',
                    },
                    open
                      ? {
                          transform: 'rotate(-180deg)',
                        }
                      : {
                          transform: 'rotate(0)',
                        },
                  ]}
                />
              </ListItemButton>
              {open &&
                items.map((item, i) => (
                  <ListItemButton
                    key={i}
                    sx={{
                      py: 0,
                      minHeight: 32,
                      // color: 'rgba(255,255,255,.8)'
                    }}
                    onClick={() => onSelect({ category: index, skill: i })}
                  >
                    <ListItemText
                      primary={t(`skills.${index}.items.${i}.name`)}
                      slotProps={{
                        primary: { fontSize: 14, fontWeight: 'medium' }
                      }}
                    />
                    {isMobile ? <></> : <CircularProgressWithLabel
                      color="warning"
                      size={30}
                      value={25 + item.rating * 15}
                      sx={{ mx: 1 }}
                    />}
                  </ListItemButton>
                ))}
            </Box>
          </SkillCategory>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}

export default function Skills() {
  const { t } = useTranslation();
  const [ skillItemIndex, setSkillItemIndex ] = useState({ category: 0, skill: 0 });
  const skills = i18nText['zh'].translation.skills;
  const skill = skills[skillItemIndex.category].items[skillItemIndex.skill];
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  return (
    <Layout>
      <SectionCard title={t("navbar.skills")}>
        <Grid container spacing={2}>
          <Grid size={4}>
            {skills.map((skill, index) => (
              <SkillList
                key={index}
                category={t(`skills.${index}.category`)}
                index={index}
                items={skill.items}
                show={index === 0}
                onSelect={setSkillItemIndex}
              />
            ))}
          </Grid>
          <Grid size={8}>
            <Item
              elevation={0}
              sx={{ height: isMobile ? '10%' : '40%', boxSizing: 'border-box', alignContent: 'center' }}
            >
              <LinearProgressWithLabel
                value={skill.rating * 15 + 25}
              />
              <TypographyWithTooltips variant='body2'>
                {t(`skills.${skillItemIndex.category}.items.${skillItemIndex.skill}.name`)}
              </TypographyWithTooltips>
            </Item>
            <Item
              elevation={0}
              sx={{ height: isMobile ? '90%' : '60%', boxSizing: 'border-box', alignContent: 'center', textAlign: 'left' }}
            >
              {Object.keys(skill.description).map((level, i) => (
                level === '5' && skill.rating <= 3
                  ? <Fragment key={i} />
                  : <p key={i}>
                      <TypographyWithTooltips
                        component="span"
                        color={level === String(skill.rating) ? `${['inherit', 'success', 'info', 'warning', 'secondary', 'error'][skill.rating]}` : 'inherit'}
                        sx={{
                          fontWeight: level === String(skill.rating) ? 700 : 300
                        }}
                      >
                        {`${level === String(skill.rating) ? '\u25B8' : ''}${level}.`} {t(`skills.${skillItemIndex.category}.items.${skillItemIndex.skill}.description.${level}`)}
                      </TypographyWithTooltips>
                  </p>
              ))}
            </Item>
          </Grid>
        </Grid>
      </SectionCard>
    </Layout>
  );
}
