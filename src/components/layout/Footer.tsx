import { Container } from '@/components/ui/Container';
import { Disclaimer } from '@/components/common/Disclaimer';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <Container>
        <div className="py-8">
          <Disclaimer />
        </div>
      </Container>
    </footer>
  );
}

