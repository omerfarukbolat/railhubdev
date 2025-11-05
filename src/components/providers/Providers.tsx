'use client';

import { Provider } from 'react-redux';
import { store } from '@/lib/store';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
  locale: string;
  messages: any;
}

export function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Istanbul">
      <Provider store={store}>{children}</Provider>
    </NextIntlClientProvider>
  );
}
