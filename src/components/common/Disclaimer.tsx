'use client';

import { useTranslations } from 'next-intl';

export function Disclaimer() {
  const t = useTranslations('footer');
  
  return (
    <div className="text-center text-xs text-muted-foreground/70 sm:text-sm">
      <p>{t('disclaimer')}</p>
      <p className="mt-1">{t('rights')}</p>
    </div>
  );
}

