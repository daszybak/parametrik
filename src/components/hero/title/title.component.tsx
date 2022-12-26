import { Title as MantineTitle } from '@mantine/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './title.styles';

interface TitleProps {}

const Title: React.FC<TitleProps> = () => {
  const { classes, theme, cx } = useStyles();
  const { t } = useTranslation();
  const { locale } = useRouter();
  const [changedLocale, setChangedLocale] = useState<string | boolean>(locale!);

  useEffect(() => {
    if (locale !== undefined && changedLocale !== locale) {
      setChangedLocale(true);
    }
  }, [setChangedLocale, locale]);

  return (
    <>
      <div
        style={{
          marginBottom: '2rem',
          color: 'white',
        }}
        className={classes.title}
      >
        <MantineTitle>Parametrik Engineering</MantineTitle>
      </div>
      <div
        style={{
          color: theme.white,
          fontSize: '1.5rem',
        }}
        className={cx(classes.title)}
      >
        <p
          style={{
            zIndex: 1,
          }}
        >
          {t<string>('common:slogan')}
        </p>
      </div>
    </>
  );
};

export default Title;
