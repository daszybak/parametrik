import { useIntersection } from '@mantine/hooks';
import React, { createContext, useEffect, useMemo, useRef } from 'react';

// interface HeroContextProps {
//   heroRef: React.RefObject<HTMLDivElement> | null;
//   setHeroRef: React.Dispatch<React.SetStateAction<React.RefObject<HTMLDivElement> | null>>;
// }

// const initialValue: HeroContextProps = {
//   heroRef: { current: null },
//   setHeroRef: () => {},
// };

interface HeroContextProps {
  heroRef: React.RefObject<HTMLDivElement>;
  navRef: (element: any) => void;
  isIntersecting?: boolean;
}

export const HeroContext = createContext<HeroContextProps>({
  heroRef: { current: null },
  navRef: () => {},
});

interface HeroContextProviderProps {
  children: React.ReactNode;
}

export const HeroContextProvider: React.FC<HeroContextProviderProps> = ({ children }) => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { ref: navRef, entry } = useIntersection({
    root: heroRef.current,
    rootMargin: '0px',
    threshold: 0.0,
  });

  const isIntersecting = useMemo(() => entry?.isIntersecting, [entry?.isIntersecting]);
  // console.log(
  //   'isIntersecting',
  //   isIntersecting,
  //   'heroRef.current',
  //   heroRef.current?.getBoundingClientRect(),
  //   'entry',
  //   entry
  // );

  useEffect(() => {}, [heroRef.current]);

  return (
    <HeroContext.Provider
      value={{
        heroRef,
        navRef,
        isIntersecting,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

// import React, { createContext /*, useRef*/ } from 'react';

// interface HeroContextProps {
//   heroRef: React.RefObject<HTMLDivElement> | null;
//   setHeroRef: React.Dispatch<React.SetStateAction<React.RefObject<HTMLDivElement> | null>>;
// }

// const initialValue: HeroContextProps = {
//   heroRef: { current: null },
//   setHeroRef: () => {},
// };

// export const HeroContext = createContext<HeroContextProps>(initialValue);

// interface HeroContextProviderProps {
//   children: React.ReactNode;
// }

// export const HeroContextProvider: React.FC<HeroContextProviderProps> = ({ children }) => {
//   const [heroRef, setHeroRef] = React.useState<React.RefObject<HTMLDivElement> | null>({
//     current: null,
//   });

//   console.log('heroRef context rendered', heroRef);

//   return <HeroContext.Provider value={{ heroRef, setHeroRef }}>{children}</HeroContext.Provider>;
// };
