'use client';

import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { useTranslations } from 'next-intl';

const stories = [
  {
    key: 'istanbul',
    category: 'caseStudy',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    key: 'innovation',
    category: 'technology',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    key: 'sustainable',
    category: 'sustainability',
    gradient: 'from-green-600 to-emerald-600',
  },
  {
    key: 'safetyFirst',
    category: 'safety',
    gradient: 'from-orange-600 to-red-600',
  },
  {
    key: 'future',
    category: 'industryInsights',
    gradient: 'from-indigo-600 to-purple-600',
  },
  {
    key: 'careers',
    category: 'careers',
    gradient: 'from-amber-600 to-yellow-600',
  },
];

export default function StoriesPage() {
  const t = useTranslations('stories');
  
  return (
    <div className="page-transition relative min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-primary">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
              </svg>
              {t('badge')}
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              {t('title')}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              {t('subtitle')}
            </p>
          </div>
        </Container>
      </section>

      {/* Stories List */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="space-y-8">
            {stories.map((story) => (
              <Card key={story.key} className="group relative overflow-hidden">
                {/* Gradient Accent */}
                <div className={`absolute left-0 top-0 h-full w-2 bg-gradient-to-b ${story.gradient}`} />
                
                <div className="flex flex-col gap-6 pl-6 lg:flex-row lg:items-center lg:justify-between">
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    {/* Category & Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${story.gradient} px-3 py-1 font-semibold text-white`}>
                        {t(`categories.${story.category}`)}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">{t(`list.${story.key}.date`)}</span>
                      <span className="text-gray-400 dark:text-gray-500">•</span>
                      <span className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {t(`list.${story.key}.readTime`)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-card-foreground transition-colors group-hover:text-primary sm:text-3xl">
                      {t(`list.${story.key}.title`)}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {t(`list.${story.key}.excerpt`)}
                    </p>
                  </div>

                  {/* Read More Button */}
                  <div className="shrink-0">
                    <Button variant="outline" className="group/btn">
                      {t('readStory')}
                      <svg className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="secondary" size="lg">
              {t('loadMore')}
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
