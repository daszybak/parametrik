import Router from 'next/router';
import { createContext, useEffect, useState } from 'react';

export const LOADING_TIME = 2650;

export const PageLoadContext = createContext({
  loaded: false,
});

export const PageLoadContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const wait = () =>
      new Promise(() => {
        setTimeout(() => {
          setLoaded(true);
        }, LOADING_TIME);
      });

    const waitFunc = async () => {
      try {
        await wait();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error', error);
      }
    };

    waitFunc();
  }, [Router.events, LOADING_TIME]);

  const pageContext = {
    loaded,
  };
  return <PageLoadContext.Provider value={pageContext}>{children}</PageLoadContext.Provider>;
};
