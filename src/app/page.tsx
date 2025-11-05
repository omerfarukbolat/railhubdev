import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100/20 via-background to-background" />

      {/* Hero Section */}
      <section className="relative px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-primary-200/80 bg-card px-4 py-1.5 text-xs font-semibold text-primary shadow-sm dark:border-primary-400/30">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Trusted by 25+ Countries Worldwide
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Railway Development
              <span className="mt-2 block text-primary">
                Excellence
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              Building the future of railway infrastructure with cutting-edge technology and expertise. Innovative solutions for modern transportation challenges.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/projects">
                <Button size="lg" className="min-w-[180px]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  View Projects
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="min-w-[180px]">
                  Learn More
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="relative px-6 py-16 sm:py-20 lg:px-8">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {[
              { value: '150+', label: 'Projects Completed', icon: '📊' },
              { value: '25', label: 'Countries Served', icon: '🌍' },
              { value: '500+', label: 'Team Members', icon: '👥' },
              { value: '30yrs', label: 'Experience', icon: '⭐' },
            ].map((stat) => (
              <Card key={stat.label} className="p-6 text-center">
                <div className="mb-3 text-3xl">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs font-medium text-muted-foreground sm:text-sm">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Section */}
      <section className="relative px-6 py-16 sm:py-24 lg:px-8">
        <Container>
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose RailHubDev?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Comprehensive railway solutions backed by three decades of excellence
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Fast Delivery',
                description: 'Rapid project execution with industry-leading timelines and quality assurance.',
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Safety First',
                description: 'Uncompromising commitment to safety standards and regulatory compliance.',
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                gradient: 'from-green-500 to-emerald-500',
              },
              {
                title: 'Innovation',
                description: 'Cutting-edge technology and innovative solutions for modern challenges.',
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                gradient: 'from-purple-500 to-pink-500',
              },
            ].map((feature) => (
              <Card key={feature.title} className="p-8">
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-16 sm:py-20 lg:px-8">
        <Container>
          <Card className="relative overflow-hidden bg-primary p-12 text-primary-foreground shadow-xl" hover={false}>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
            <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Ready to start your project?
                </h2>
                <p className="mt-4 text-lg opacity-90">
                  Let's discuss how we can help bring your railway vision to life.
                </p>
              </div>
              <Link href="/about">
                <Button variant="secondary" size="lg" className="shrink-0">
                  Get in Touch
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </Link>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
