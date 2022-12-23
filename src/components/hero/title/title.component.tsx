import { Title as MantineTitle } from '@mantine/core';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PageLoadContext } from 'src/context/page-load-context-provider/page-load-context-provider';
import TypeIt from 'typeit-react';
import { useStyles } from './title.styles';

interface TitleProps {}

// eslint-disable-next-line arrow-body-style
const Title: React.FC<TitleProps> = () => {
  const { classes, theme, cx } = useStyles();
  const { t } = useTranslation();
  const { loaded } = useContext(PageLoadContext);
  const [finishedA, setFinishedA] = useState<boolean>(false);
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
        {loaded ? (
          <TypeIt
            options={{
              afterComplete: (instance: any) => {
                const cursor = instance.getElement().querySelector('.ti-cursor');

                cursor.remove();
                setFinishedA(true);
              },
              lifeLike: true,
              waitUntilVisible: true,
            }}
            //@ts-ignore
            as={MantineTitle}
          >
            Parametrik Engineering
          </TypeIt>
        ) : null}
      </div>
      <div
        style={{
          color: theme.white,
          fontSize: '1.5rem',
        }}
        className={cx(classes.title)}
      >
        {finishedA === true ? (
          <>
            {/* //@ts-ignore */}
            <div className={cx(classes.gridItem, { [classes.invisible]: changedLocale === true })}>
              <TypeIt
                as="p"
                options={{
                  afterComplete: (instance: any) => {
                    const cursor = instance.getElement().querySelector('.ti-cursor');

                    cursor.remove();
                  },
                  lifeLike: true,
                  waitUntilVisible: true,
                  html: true,
                  breakLines: false,
                }}
              >
                {t<string>('common:slogan')}
              </TypeIt>
            </div>
            <p
              className={cx({ [classes.invisible]: changedLocale !== true })}
              style={{
                zIndex: 1,
              }}
            >
              {t<string>('common:slogan')}
            </p>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Title;
