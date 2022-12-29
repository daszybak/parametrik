// import { useInView } from 'react-intersection-observer';
import React, { createContext /*, useEffect, useMemo,*/ } from 'react';
import { useInView } from 'react-intersection-observer';

// interface HeroContextProps {
//   heroRef: React.RefObject<HTMLDivElement> | null;
//   setHeroRef: React.Dispatch<React.SetStateAction<React.RefObject<HTMLDivElement> | null>>;
// }

// const initialValue: HeroContextProps = {
//   heroRef: { current: null },
//   setHeroRef: () => {},
// };

interface HeroContextProps {
  heroRef: React.RefCallback<HTMLDivElement>;
  //navRef: (element: any) => void;
  isIntersecting?: boolean;
}

// export const HeroContext = createContext<HeroContextProps>({
//   heroRef: { current: null },
//   // navRef: () => {},
// });

// type HeroRef = React.RefObject<HTMLDivElement | null>;

// interface HeroContextProps {
//   navRef: HeroRef;
//   setNavRef: React.Dispatch<React.SetStateAction<HeroRef>>;
// }

const initialValue: HeroContextProps = {
  heroRef: () => {},
  isIntersecting: false,
};

export const HeroContext = createContext<HeroContextProps>(initialValue);

interface HeroContextProviderProps {
  children: React.ReactNode;
}

export const HeroContextProvider: React.FC<HeroContextProviderProps> = ({ children }) => {
  // const heroRef = useRef<HTMLImageElement | null>(null);
  // const [navRef, setNavRef] = useState<HeroRef>({ current: null });
  const { ref: heroRef, inView } = useInView({
    threshold: 0,
    rootMargin: '-100px 0px 0px 0px',
    root: null,
  });

  //const isIntersecting = useMemo(() => entry?.isIntersecting, [entry?.isIntersecting]);
  // console.log(
  //   'isIntersecting',
  //   isIntersecting,
  //   'navRef.current',
  //   navRef.current?.getBoundingClientRect(),
  //   'entry',
  //   entry
  // );

  // useEffect(() => {}, [navRef.current]);

  return (
    <HeroContext.Provider
      value={{
        heroRef,
        isIntersecting: inView,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

// // import React, { createContext /*, useRef*/ } from 'react';

// // interface HeroContextProps {
// //   heroRef: React.RefObject<HTMLDivElement> | null;
// //   setHeroRef: React.Dispatch<React.SetStateAction<React.RefObject<HTMLDivElement> | null>>;
// // }

// // const initialValue: HeroContextProps = {
// //   heroRef: { current: null },
// //   setHeroRef: () => {},
// // };

// // export const HeroContext = createContext<HeroContextProps>(initialValue);

// // interface HeroContextProviderProps {
// //   children: React.ReactNode;
// // }

// // export const HeroContextProvider: React.FC<HeroContextProviderProps> = ({ children }) => {
// //   const [heroRef, setHeroRef] = React.useState<React.RefObject<HTMLDivElement> | null>({
// //     current: null,
// //   });

// //   console.log('heroRef context rendered', heroRef);

// //   return <HeroContext.Provider value={{ heroRef, setHeroRef }}>{children}</HeroContext.Provider>;
// // };
