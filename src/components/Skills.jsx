import { Fragment } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

/* The pipeline: how a product travels through my hands, idea to live.
 * Each link carries an animated packet; each node lights up as it arrives. */
const FLOW = [
  { id: 'idea', label: 'Idea', sub: 'the brief', glyph: '✦' },
  { id: 'ui', label: 'Interface', sub: 'React · TypeScript', icons: ['react', 'typescript'] },
  { id: 'api', label: 'API & Data', sub: 'Node · PostgreSQL', icons: ['nodedotjs', 'postgresql'] },
  { id: 'cloud', label: 'Cloud', sub: 'Serverless rails', icons: ['cloudflare', 'vercel'] },
  { id: 'ship', label: 'Shipped', sub: 'live to users', glyph: '●' },
];

const CHIP_ICON = {
  'React': 'react',
  'React Native': 'react',
  'Next.js': 'nextdotjs',
  'TypeScript': 'typescript',
  'Tailwind': 'tailwindcss',
  'Framer Motion': 'framer',
  'Node.js': 'nodedotjs',
  'Express': 'express',
  'GraphQL': 'graphql',
  'PostgreSQL': 'postgresql',
  'Cloudflare Workers': 'cloudflare',
  'Vercel': 'vercel',
  'Supabase': 'supabase',
  'Docker': 'docker',
  'CI / CD': 'githubactions',
  'Git & GitHub': 'github',
  'Claude Code': 'claude',
  'Vitest': 'vitest',
  'ESLint': 'eslint',
  'Postman': 'postman',
  'LLM APIs': 'anthropic',
};

const categories = [
  {
    id: 'frontend',
    index: '01',
    kicker: 'Client',
    title: <>Frontend <em>Engineering</em></>,
    tagline: 'Polished, accessible UIs across web and mobile — pixel-perfect and fast.',
    items: ['React', 'React Native', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    depth: 9,
    best: 'Pixel-perfect React Native apps',
  },
  {
    id: 'backend',
    index: '02',
    kicker: 'Server',
    title: <>Backend <em>Engineering</em></>,
    tagline: 'Scalable Node services, clean APIs, and well-modelled data layers.',
    items: ['Node.js', 'Express', 'REST', 'GraphQL', 'PostgreSQL', 'WebSockets'],
    depth: 8,
    best: 'APIs that stay fast under load',
  },
  {
    id: 'cloud',
    index: '03',
    kicker: 'Infrastructure',
    title: <>Cloud &amp; <em>DevOps</em></>,
    tagline: 'Deploying low-latency systems on modern serverless rails.',
    items: ['AWS', 'Cloudflare Workers', 'Vercel', 'Supabase', 'Docker', 'CI / CD'],
    depth: 7,
    best: 'Zero-downtime serverless deploys',
  },
  {
    id: 'tooling',
    index: '04',
    kicker: 'Workflow',
    title: <>Tooling &amp; <em>AI Workflows</em></>,
    tagline: 'Version control, testing, and a working knowledge of modern AI tooling.',
    items: ['Git & GitHub', 'Claude Code', 'Vitest', 'ESLint', 'Postman', 'LLM APIs'],
    depth: 8,
    best: 'AI-assisted, test-backed shipping',
  },
];

function PipelineFlow() {
  const [ref, revealed] = useScrollReveal();
  return (
    <div ref={ref} className={`flow-wrap reveal ${revealed ? 'is-revealed' : ''}`}>
      <div className="flow" role="img" aria-label="Pipeline: idea, interface, API and data, cloud, shipped — one engineer end to end">
        {FLOW.map((node, i) => (
          <Fragment key={node.id}>
            {i > 0 && (
              <div className="flow-link" style={{ '--i': i - 1 }}>
                <i className="flow-packet" />
              </div>
            )}
            <div
              className={`flow-node${node.glyph ? ' flow-node--cap' : ''}${node.id === 'ship' ? ' flow-node--ship' : ''}`}
              style={{ '--i': i }}
            >
              <span className="flow-node__face">
                {node.icons
                  ? node.icons.map((s) => (
                      <img
                        key={s}
                        src={`https://cdn.simpleicons.org/${s}`}
                        alt=""
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                    ))
                  : <span className="flow-node__glyph">{node.glyph}</span>}
              </span>
              <span className="flow-node__label">{node.label}</span>
              <span className="flow-node__sub">{node.sub}</span>
            </div>
          </Fragment>
        ))}
      </div>
      <p className="flow-caption">
        One pair of hands, the whole journey — from the first sketch to production traffic.
      </p>
    </div>
  );
}

function SkillCard({ category, index }) {
  const [ref, revealed] = useScrollReveal();
  return (
    <article
      ref={ref}
      data-num={category.index}
      className={`skill-card reveal ${revealed ? 'is-revealed' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="skill-card__top">
        <span className="skill-card__num">{category.index}</span>
        <span className="skill-card__kicker">— {category.kicker}</span>
      </div>
      <h3 className="skill-card__title">{category.title}</h3>
      <p className="skill-card__tag">{category.tagline}</p>

      <div className="skill-meter" aria-label={`Depth: ${category.depth} out of 10`}>
        <span className="skill-meter__label">Depth</span>
        <span className="skill-meter__bars" aria-hidden="true">
          {Array.from({ length: 10 }, (_, i) => (
            <i
              key={i}
              className={i < category.depth ? 'on' : ''}
              style={{ '--d': i }}
            />
          ))}
        </span>
        <span className="skill-meter__val">
          {String(category.depth).padStart(2, '0')} / 10
        </span>
      </div>

      <ul className="skill-card__list">
        {category.items.map((item, i) => (
          <li key={item} className="skill-card__chip" style={{ '--d': i }}>
            {CHIP_ICON[item] && (
              <img
                src={`https://cdn.simpleicons.org/${CHIP_ICON[item]}`}
                alt=""
                loading="lazy"
                width="14"
                height="14"
              />
            )}
            {item}
          </li>
        ))}
      </ul>

      <p className="skill-card__best">
        <span className="skill-card__best-label">Best at</span>
        {category.best}
      </p>
    </article>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">§ 02 — Capabilities</span>
          <h2 className="sec-title">What I bring to <em>the table.</em></h2>
        </div>

        <PipelineFlow />

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <SkillCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
