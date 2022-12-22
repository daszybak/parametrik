import { Title as MantineTitle } from '@mantine/core';
import { useContext, useState } from 'react';
import { PageLoadContext } from 'src/context/page-load-context-provider/page-load-context-provider';
import TypeIt from 'typeit-react';
import { useStyles } from './title.styles';

interface TitleProps {}

// eslint-disable-next-line arrow-body-style
const Title: React.FC<TitleProps> = () => {
  const { classes, theme } = useStyles();
  const { loaded } = useContext(PageLoadContext);
  const [finished, setFinished] = useState(false);

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
                instance.destroy();
                setFinished(true);
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
        className={classes.title}
      >
        {finished === true ? (
          //@ts-ignore
          <TypeIt
            as="p"
            options={{
              afterComplete: (instance: any) => instance.destroy(),
              lifeLike: true,
              waitUntilVisible: true,
            }}
          >
            Your success is our mission.
          </TypeIt>
        ) : null}
      </div>
    </>
  );
};

export default Title;
