'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { type Locale } from '@/i18n/config';

const links = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/expertise', key: 'expertise' },
  { href: '/projects', key: 'projects' },
  { href: '/stories', key: 'stories' },
];

export function Navbar() {
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const t = useTranslations('nav');
  const tLang = useTranslations('languages');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check cookie first, then localStorage
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return null;
    };
    
    const cookieTheme = getCookie('theme') as 'light' | 'dark' | null;
    const savedTheme = cookieTheme || localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'light';
    
    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Sync to cookie if not already there
    if (!cookieTheme) {
      document.cookie = `theme=${initialTheme}; path=/; max-age=31536000`;
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };

    if (isLangDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangDropdownOpen]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
    // Also save to cookie so it persists on reload
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;
  };

  const changeLanguage = (lang: Locale) => {
    // Save current theme to cookie before reload
    const currentTheme = theme;
    document.cookie = `theme=${currentTheme}; path=/; max-age=31536000`;
    
    // Set language cookie
    document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`; // 1 year
    setIsLangDropdownOpen(false);
    
    // Reload page to apply new locale
    window.location.reload();
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 transition-opacity hover:opacity-80">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary shadow-lg transition-transform group-hover:scale-105">
              <svg className="h-6 w-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-foreground">
              RailHubDev
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200',
                  pathname === link.href
                    ? 'bg-secondary text-primary shadow-sm'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                {t(link.key)}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-2">
            {/* Language Dropdown */}
            <div ref={dropdownRef} className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className={cn(
                  "h-10 gap-2 rounded-xl px-4 transition-all",
                  isLangDropdownOpen && "bg-secondary"
                )}
                aria-label="Change language"
              >
                <span className="text-lg">{locale === 'en' ? '🇬🇧' : '🇹🇷'}</span>
                <span className="text-sm font-semibold uppercase">
                  {locale}
                </span>
              </Button>

              {/* Dropdown Menu */}
              {isLangDropdownOpen && (
                <div className="absolute right-0 top-[calc(100%+0.75rem)] z-[9999] w-36 overflow-hidden rounded-xl border border-border shadow-xl" style={{ backgroundColor: 'rgb(var(--background))' }}>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={cn(
                      "flex w-full items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
                      locale === 'en' ? 'bg-secondary text-primary' : 'text-foreground'
                    )}
                  >
                    <span className="text-lg">🇬🇧</span>
                    <span>{tLang('en')}</span>
                    {locale === 'en' && (
                      <svg className="ml-auto h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={() => changeLanguage('tr')}
                    className={cn(
                      "flex w-full items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
                      locale === 'tr' ? 'bg-secondary text-primary' : 'text-foreground'
                    )}
                  >
                    <span className="text-lg">🇹🇷</span>
                    <span>{tLang('tr')}</span>
                    {locale === 'tr' && (
                      <svg className="ml-auto h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="h-10 w-10 rounded-xl p-0 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="h-5 w-5 text-muted-foreground transition-transform hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-muted-foreground transition-transform hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
