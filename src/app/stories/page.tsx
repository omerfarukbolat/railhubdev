import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const stories = [
  {
    title: 'Connecting Communities: The Istanbul Story',
    date: 'November 2023',
    excerpt:
      'How our high-speed rail project transformed transportation in Istanbul, connecting millions of commuters with unprecedented efficiency.',
    readTime: '5 min read',
    category: 'Case Study',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Innovation in Urban Transit',
    date: 'October 2023',
    excerpt:
      'Exploring the cutting-edge technology behind our Singapore MRT extension and its impact on urban mobility.',
    readTime: '7 min read',
    category: 'Technology',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Sustainable Railway Development',
    date: 'September 2023',
    excerpt:
      "Our commitment to environmental sustainability and how we're reducing the carbon footprint of railway infrastructure.",
    readTime: '6 min read',
    category: 'Sustainability',
    gradient: 'from-green-600 to-emerald-600',
  },
  {
    title: 'Safety First: A Culture of Excellence',
    date: 'August 2023',
    excerpt:
      'Behind the scenes look at our safety protocols and the team dedicated to ensuring zero-incident projects.',
    readTime: '4 min read',
    category: 'Safety',
    gradient: 'from-orange-600 to-red-600',
  },
  {
    title: 'The Future of High-Speed Rail',
    date: 'July 2023',
    excerpt:
      'Industry insights on emerging technologies and what the next generation of high-speed rail will look like.',
    readTime: '8 min read',
    category: 'Industry Insights',
    gradient: 'from-indigo-600 to-purple-600',
  },
  {
    title: 'Building Careers in Railway Engineering',
    date: 'June 2023',
    excerpt:
      'Meet our team members and learn about the exciting career opportunities in modern railway development.',
    readTime: '5 min read',
    category: 'Careers',
    gradient: 'from-amber-600 to-yellow-600',
  },
];

export default function StoriesPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-primary">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
              </svg>
              Latest Insights & Updates
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              Stories & Insights
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              Discover the stories behind our projects and gain insights into the railway industry.
            </p>
          </div>
        </Container>
      </section>

      {/* Stories List */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="space-y-8">
            {stories.map((story, index) => (
              <Card key={story.title} className="group relative overflow-hidden">
                {/* Gradient Accent */}
                <div className={`absolute left-0 top-0 h-full w-2 bg-gradient-to-b ${story.gradient}`} />
                
                <div className="flex flex-col gap-6 pl-6 lg:flex-row lg:items-center lg:justify-between">
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    {/* Category & Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${story.gradient} px-3 py-1 font-semibold text-white`}>
                        {story.category}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">{story.date}</span>
                      <span className="text-gray-400 dark:text-gray-500">•</span>
                      <span className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {story.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-card-foreground transition-colors group-hover:text-primary sm:text-3xl">
                      {story.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {story.excerpt}
                    </p>
                  </div>

                  {/* Read More Button */}
                  <div className="shrink-0">
                    <Button variant="outline" className="group/btn">
                      Read Story
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
              Load More Stories
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
