import { useRouter } from 'next/router';
import { useReducer, createContext, useEffect } from 'react';

export type ActionTypes = 'close' | 'open' | 'toggle';

const initialValue: {
  isOpen: boolean;
  handleMenu: (type: ActionTypes) => void;
} = {
  isOpen: false,
  handleMenu: () => {},
};

export const MenuContext = createContext(initialValue);

export interface Children {
  children: React.ReactNode;
}

export interface Action {
  type: ActionTypes;
}

type State = {
  isOpen: boolean;
};

const menuInitialState: State = {
  isOpen: false,
};

const menuReducer = (state: State, action: Action) => {
  if (action.type === 'close') {
    return {
      isOpen: false,
    };
  }
  if (action.type === 'open') {
    return {
      isOpen: true,
    };
  }
  if (action.type === 'toggle') {
    return {
      isOpen: !state.isOpen,
    };
  }

  throw new Error('Action unavailable');
};

const MenuContextProvider = ({ children }: Children) => {
  const [menu, dispatchMenu] = useReducer(menuReducer, menuInitialState);
  const { events } = useRouter();

  useEffect(() => {
    events.on('routeChangeStart', () => {
      dispatchMenu({ type: 'close' });
    });
  }, []);

  const handleMenu = (type: ActionTypes) => {
    dispatchMenu({ type });
  };

  const menuContext = {
    isOpen: menu.isOpen,
    handleMenu,
  };

  return <MenuContext.Provider value={menuContext}>{children}</MenuContext.Provider>;
};

export default MenuContextProvider;
