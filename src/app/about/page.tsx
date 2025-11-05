import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-primary">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Since 1994
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              About RailHubDev
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              Leading the railway industry with innovation, expertise, and commitment to excellence for three decades.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-8">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card className="relative overflow-hidden">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-2xl" />
              <div className="relative">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-card-foreground">Our Mission</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  To revolutionize railway infrastructure through innovative engineering solutions,
                  sustainable practices, and unwavering commitment to safety. We strive to connect
                  communities and drive economic growth through world-class transportation systems.
                </p>
              </div>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-2xl" />
              <div className="relative">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-card-foreground">Our Vision</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  To be the global leader in railway development, setting industry standards for
                  quality, innovation, and sustainability. We envision a future where efficient rail
                  systems transform the way people and goods move across the world.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20">
        <Container>
          <Card className="relative overflow-hidden" hover={false}>
            <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
            <div className="pl-6">
              <h2 className="text-3xl font-bold text-card-foreground">Our Story</h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary">
                  Founded in 1994, RailHubDev began as a small engineering consultancy with a big
                  vision. Our founders recognized the critical role that railway infrastructure
                  would play in the 21st century and set out to create a company that could meet
                  those challenges head-on.
                </p>
                <p>
                  Over the past three decades, we've grown from a team of five passionate engineers
                  to a global organization of over 500 professionals. We've completed more than 150
                  major projects across 25 countries, from high-speed rail corridors to urban metro
                  systems.
                </p>
                <p>
                  Today, RailHubDev stands at the forefront of railway innovation, combining
                  traditional engineering excellence with cutting-edge technology. We're proud of
                  our heritage and excited about the future of sustainable transportation.
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* Values Section */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Excellence', icon: '⭐', color: 'from-yellow-500 to-orange-500' },
              { title: 'Innovation', icon: '💡', color: 'from-blue-500 to-purple-500' },
              { title: 'Integrity', icon: '🤝', color: 'from-green-500 to-teal-500' },
              { title: 'Safety', icon: '🛡️', color: 'from-red-500 to-pink-500' },
            ].map((value) => (
              <Card key={value.title} className="text-center">
                <div className="mb-4 text-5xl">{value.icon}</div>
                <h3 className={`bg-gradient-to-r ${value.color} bg-clip-text text-xl font-bold text-transparent`}>
                  {value.title}
                </h3>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
