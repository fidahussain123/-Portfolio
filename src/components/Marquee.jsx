const tokens = [
    'React', 'React Native', 'Next.js', 'TypeScript',
    'Node.js', 'Express', 'PostgreSQL', 'MySQL',
    'AWS', 'Cloudflare Workers', 'Vercel', 'Supabase',
    'Turso', 'Docker', 'GraphQL', 'Tailwind',
];

export default function Marquee() {
    const doubled = [...tokens, ...tokens];
    return (
        <div className="marquee" aria-hidden="true">
            <div className="marquee__track">
                <span>
                    {doubled.map((t, i) => (
                        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '4rem' }}>
                            {t}
                            <span className="dot" />
                        </span>
                    ))}
                </span>
            </div>
        </div>
    );
}
