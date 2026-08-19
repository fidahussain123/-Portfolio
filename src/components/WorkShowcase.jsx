import { useEffect, useState } from 'react';
import ImageStreamHero from '@/components/ui/image-stream-hero';

/* Phones get a bigger corridor: the default world units are tuned for
 * wide containers and read as a smudge at 375px. */
function useMobile() {
  const [mobile, setMobile] = useState(
    () => window.matchMedia('(max-width: 760px)').matches,
  );
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 760px)');
    const onChange = (e) => setMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return mobile;
}

const MOBILE_PATH = {
  cardWidth: 30,
  cardHeight: 42,
  birthHeight: 4,
  exitHeight: 74,
  railBirth: -18,
  railExit: 58,
};

/* Real work interleaved with texture plates — the corridor alternates a
 * project frame with a texture so neither reads as filler. */
const STREAM = [
  { src: '/images/zapfolio-cover.svg' },
  { src: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=900&auto=format&fit=crop' },
  { src: '/images/Screenshot 2025-11-14 161855.png' },
  { src: 'https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/gradients/hero_gradient/hero-gradients-01.png' },
  { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop' },
  { src: 'https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/gradients/hue-flow/hue-flow-01.png' },
  { src: '/images/project-mockup-example.jpg' },
  { src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format&fit=crop' },
  { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop' },
  { src: 'https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/gradients/hero_gradient/hero-gradients-03.png' },
  { src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop' },
  { src: 'https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/gradients/hue-flow/hue-flow-02.png' },
];

export default function WorkShowcase() {
  const mobile = useMobile();
  return (
    <section id="showcase" className="showcase" aria-label="Work showcase">
      <ImageStreamHero
        images={STREAM}
        cards={mobile ? 8 : 10}
        speed={mobile ? 22 : 24}
        axis={52}
        path={mobile ? MOBILE_PATH : undefined}
        className="showcase__stream"
      >
        {/* Edge + centre treatment so the corridor melts into the page */}
        <div className="showcase__veil" aria-hidden="true" />

        <div className="showcase__content">
          <span className="eyebrow">The reel</span>
          <h2 className="showcase__title">
            Work, front <em>and centre.</em>
          </h2>
          <p className="showcase__sub">
            Products, interfaces and textures from the studio — a continuous
            stream of things designed, built and shipped.
          </p>
          <div className="showcase__actions">
            <a href="#projects" className="btn btn--primary">Explore the work</a>
            <a href="#contact" className="btn btn--ghost">Start a project</a>
          </div>
        </div>
      </ImageStreamHero>
    </section>
  );
}
