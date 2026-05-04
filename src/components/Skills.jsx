import useScrollReveal from '../hooks/useScrollReveal';

const categories = [
    {
        id: 'frontend',
        index: '01',
        kicker: 'Client',
        title: <>Frontend <em>Engineering</em></>,
        tagline: 'Polished, accessible UIs across web and mobile — pixel-perfect and fast.',
        items: [
            { name: 'React',                detail: 'hooks · context · suspense' },
            { name: 'React Native',         detail: 'iOS · Android · Expo' },
            { name: 'Next.js',              detail: 'app router · SSR · ISR' },
            { name: 'TypeScript',           detail: 'strict types · generics' },
            { name: 'Tailwind / CSS',       detail: 'design tokens · responsive' },
            { name: 'Vite',                 detail: 'fast HMR · ESM bundling' },
            { name: 'State & Data',         detail: 'Redux · Zustand · TanStack' },
            { name: 'Animation',            detail: 'Framer · CSS · Lottie' },
        ],
    },
    {
        id: 'backend',
        index: '02',
        kicker: 'Server',
        title: <>Backend <em>Engineering</em></>,
        tagline: 'Scalable Node services, clean APIs, and well-modelled data layers.',
        items: [
            { name: 'Node.js',              detail: 'runtime · streams · async' },
            { name: 'Express.js',           detail: 'middleware · routing' },
            { name: 'REST APIs',            detail: 'OpenAPI · versioning' },
            { name: 'GraphQL',              detail: 'schemas · resolvers' },
            { name: 'PostgreSQL',           detail: 'queries · indexing · joins' },
            { name: 'MySQL',                detail: 'relational data modelling' },
            { name: 'Auth & Security',      detail: 'JWT · OAuth · sessions' },
            { name: 'Real-time',            detail: 'WebSockets · SSE · queues' },
        ],
    },
    {
        id: 'cloud',
        index: '03',
        kicker: 'Infrastructure',
        title: <>Cloud &amp; <em>DevOps</em></>,
        tagline: 'Deploying low-latency, multi-region systems on modern serverless rails.',
        items: [
            { name: 'AWS',                  detail: 'EC2 · S3 · Lambda · RDS' },
            { name: 'Cloudflare Workers',   detail: 'edge · R2 · D1 · KV' },
            { name: 'Vercel',               detail: 'preview deploys · edge SSR' },
            { name: 'Supabase',             detail: 'auth · postgres · realtime' },
            { name: 'Turso DB',             detail: 'libsql · edge replicas' },
            { name: 'Appwrite',             detail: 'self-hosted backend' },
            { name: 'Docker',               detail: 'containerised services' },
            { name: 'CI / CD',              detail: 'GitHub Actions pipelines' },
        ],
    },
    {
        id: 'tooling',
        index: '04',
        kicker: 'Workflow',
        title: <>Tooling &amp; <em>AI Workflows</em></>,
        tagline: 'Daily-driver tools, version control, and a working knowledge of modern AI tooling.',
        items: [
            { name: 'Git & GitHub',         detail: 'branching · PRs · review' },
            { name: 'Claude Code',          detail: 'AI-assisted dev workflows' },
            { name: 'Testing',              detail: 'Jest · Vitest · Playwright' },
            { name: 'Debugging',            detail: 'profiling · tracing · logs' },
            { name: 'Linting & Format',     detail: 'ESLint · Prettier · Biome' },
            { name: 'Package Mgmt',         detail: 'npm · pnpm · yarn' },
            { name: 'API Tools',            detail: 'Postman · curl · Insomnia' },
            { name: 'Working AI Knowledge', detail: 'prompts · LLM APIs · MCP' },
        ],
    },
];

function SkillRow({ category, index }) {
    const [ref, revealed] = useScrollReveal();

    return (
        <article
            ref={ref}
            className={`skill-row reveal ${revealed ? 'is-revealed' : ''}`}
            style={{ transitionDelay: `${index * 80}ms` }}
        >
            <div className="skill-row__head">
                <span className="skill-row__index">
                    <strong>§ {category.index}</strong>
                    <span>— {category.kicker}</span>
                </span>
                <h3 className="skill-row__title">{category.title}</h3>
                <p className="skill-row__tagline">{category.tagline}</p>
            </div>

            <ul className="skill-row__list">
                {category.items.map((item) => (
                    <li key={item.name} className="skill-row__item">
                        <span className="skill-row__item-name">{item.name}</span>
                        <span className="skill-row__item-detail">{item.detail}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default function Skills() {
    const [introRef, introRevealed] = useScrollReveal();

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <header className="section-head">
                    <div className="section-head__top">
                        <span className="section-marker">§ 02 — Capabilities</span>
                    </div>
                </header>

                <div ref={introRef} className={`skills-intro reveal ${introRevealed ? 'is-revealed' : ''}`}>
                    <p className="lead">
                        I&apos;m a <em>full-stack engineer</em> first — comfortable everywhere
                        from the UI to the database to the deploy. The index below is what I
                        reach for daily, plus a working knowledge of modern AI tooling like
                        Claude Code.
                    </p>
                </div>

                <div className="skills-stack">
                    {categories.map((cat, i) => (
                        <SkillRow key={cat.id} category={cat} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
