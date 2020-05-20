import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import FAQSection, { FAQSectionProps } from '../molecules/FAQSection';
import { colors } from '../../theme';
import { Typography } from '../atoms';

export interface FAQPageTemplateProps {
  className?: string;
  mainTitle: string;
  questionsAndAnswers: FAQSectionProps[];
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(3)
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      maxWidth: '80%',
    }
  },
  grayBackground: {
    backgroundColor: colors.gray1
  },
  mainTitle: {
    fontSize: theme.typography.pxToRem(50),
    margin: theme.spacing(2, 0),
  },
  questionsSection: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
  },
}));

const FAQPageTemplate: FC<FAQPageTemplateProps> = ({ className = '', mainTitle, questionsAndAnswers }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${className}`.trim()}>
      <div className={classes.container}>
        <Typography className={classes.mainTitle} variant='h1' color='primary'>{mainTitle}</Typography>
        <div className={classes.questionsSection}>
          {
            questionsAndAnswers.map((qAndA: FAQSectionProps, i) => (
              <FAQSection className={`${i % 2 === 0 ? classes.grayBackground : ''}`} key={`faq-${i}`} {...qAndA} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default FAQPageTemplate;