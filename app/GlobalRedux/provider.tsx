'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
}

export function Providers({ children }: PropsType) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
