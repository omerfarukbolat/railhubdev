import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';

const projects = [
  {
    title: 'Istanbul High-Speed Rail',
    location: 'Istanbul, Turkey',
    year: '2023',
    description: 'Modern high-speed rail corridor connecting major districts with 350 km/h capability.',
    status: 'Completed',
    image: '🚄',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Singapore MRT Extension',
    location: 'Singapore',
    year: '2022',
    description: 'Urban metro extension with 8 new stations and advanced signaling system.',
    status: 'Completed',
    image: '🚇',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Berlin Freight Hub',
    location: 'Berlin, Germany',
    year: '2024',
    description: 'State-of-the-art logistics center for European freight distribution.',
    status: 'In Progress',
    image: '🚚',
    gradient: 'from-orange-600 to-red-600',
  },
  {
    title: 'Tokyo Station Upgrade',
    location: 'Tokyo, Japan',
    year: '2023',
    description: 'Major station renovation with improved passenger flow and accessibility.',
    status: 'Completed',
    image: '🏛️',
    gradient: 'from-green-600 to-emerald-600',
  },
  {
    title: 'Dubai Metro Line 3',
    location: 'Dubai, UAE',
    year: '2024',
    description: 'New automated metro line serving Dubai Expo district.',
    status: 'In Progress',
    image: '🌆',
    gradient: 'from-amber-600 to-yellow-600',
  },
  {
    title: 'London Crossrail Integration',
    location: 'London, UK',
    year: '2022',
    description: 'Signal system integration for the Elizabeth Line project.',
    status: 'Completed',
    image: '🇬🇧',
    gradient: 'from-indigo-600 to-purple-600',
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-primary">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              150+ Successful Deliveries
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              Our Projects
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              Delivering world-class railway infrastructure projects across the globe.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="group flex flex-col overflow-hidden">
                {/* Header with Icon */}
                <div className={`relative mb-6 flex h-32 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${project.gradient}`}>
                  <div className="absolute inset-0 bg-grid-white/10" />
                  <span className="relative text-6xl">{project.image}</span>
                </div>

                {/* Status & Year */}
                <div className="mb-4 flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                    project.status === 'Completed'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                  }`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${
                      project.status === 'Completed' ? 'bg-green-600 dark:bg-green-400' : 'bg-blue-600 dark:bg-blue-400'
                    }`} />
                    {project.status}
                  </span>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{project.year}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-card-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary transition-colors">
                  Learn More
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
