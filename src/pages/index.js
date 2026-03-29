import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.13 14.76L12 15.5l-1.13-.74a.75.75 0 00-.73-.01L9 15.3l.4-1.23a.75.75 0 00-.23-.74L8.13 12.5l1.23-.04a.75.75 0 00.64-.47l.45-1.18.45 1.18a.75.75 0 00.64.47l1.23.04-1.04.83a.75.75 0 00-.23.74l.4 1.23-1.14-.55a.75.75 0 00-.73.01zM21 3s-9 2-12 11c-1.3 2.6-3.7 3.5-5 3.5.5 1.5 1.5 2.5 3 2.5 3 0 4.5-2.5 5.5-4 9-3 11-12 11-12z" />
  </svg>
);

const StackIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 6l8 4 8-4-8-4zM4 10l8 4 8-4M4 14l8 4 8-4M4 18l8 4 8-4" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const ActivityIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l2 7h7l-6 5 2 7-5-4-5 4 2-7-6-5h7l2-7z" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

function MeshGrid() {
  return <div className="mesh-grid" />;
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const terminalRef = useRef(null);

  return (
    <header className={clsx(styles.heroBanner)}>
      <MeshGrid />
      
      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <div className={styles.heroContent}>
          <Heading as="h1" className={clsx(styles.heroTitle, "hero-title-gradient")}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className={clsx("button button--lg", styles.buttonGlow)} 
                  style={{ background: '#000', color: '#fff', border: 'none' }}
                  to="/docs/">
              Get Started
            </Link>
            <Link
              className={clsx("button button--outline button--lg", styles.buttonGlow)}
              style={{ background: 'transparent', border: '1px solid #000', color: '#000' }}
              to="https://github.com/KhairnarLokesh/DevInit">
              GitHub
            </Link>
          </div>
        </div>
        
        <div 
          ref={terminalRef}
          className={styles.terminalContainer}
        >
          <div className={styles.terminalHeader}>
            <div className={styles.terminalDots}>
              <span style={{ background: '#333' }}></span>
              <span style={{ background: '#666' }}></span>
              <span style={{ background: '#999' }}></span>
            </div>
            <div className={styles.terminalTitle}>bash — devinit</div>
          </div>
          <div className={styles.terminalBody} style={{ background: '#fff' }}>
            <div className={styles.terminalLine}>
              <span className={styles.prompt}>$</span> npx devinit
            </div>
            <div className={styles.terminalOutput}>
              <br />
              <span style={{ color: '#000', fontWeight: '800' }}>🚀 Initializing DevInit CLI...</span><br />
              <span style={{ color: '#222' }}>? What's your project name?</span> <span style={{ color: '#555' }}>my-awesome-app</span><br />
              <span style={{ color: '#222' }}>? Select your stack:</span> <span style={{ color: '#000', fontWeight: '700' }}>Next.js (App Router)</span><br />
              <span style={{ color: '#222' }}>? Install dependencies?</span> <span style={{ color: '#000', fontWeight: '700' }}>Yes</span><br />
              <br />
              <span style={{ color: '#000', fontWeight: '800' }}>✔ Successfully created my-awesome-app!</span><br />
              <span style={{ color: '#444', fontStyle: 'italic' }}>cd my-awesome-app && npm run dev</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function TechMarquee() {
  const techs = [
    'Next.js', 'React', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Docker',
    'GraphQL', 'Vite', 'Turborepo', 'Zustand', 'Storybook', 'Vitest', 'Playwright', 'Jest',
    'Cloudflare', 'SupaBase', 'Firebase', 'Redis', 'Zod', 'Tauri', 'Go', 'Rust'
  ];
  
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        {[...techs, ...techs].map((tech, idx) => (
          <div key={idx} className={styles.marqueeItem}>
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ title, description, icon, delay, className }) {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => card.classList.add('reveal-visible'), delay);
      }
    }, { threshold: 0.1 });
    
    observer.observe(card);

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--glow-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--glow-y', `${e.clientY - rect.top}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => {
      observer.disconnect();
      card.removeEventListener('mousemove', handleMouseMove);
    };
  }, [delay]);

  return (
    <div ref={cardRef} className={clsx("bento-card", className)}>
      <div className="mouse-glow" />
      <div className="icon-wrapper">{icon}</div>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </div>
  );
}

function FeatureSection() {
  const features = [
    {
      title: 'One-Click Setup',
      description: 'Go from zero to a production-ready repository in seconds with a single command.',
      icon: <RocketIcon />
    },
    {
      title: 'Curated Stacks',
      description: 'Hand-picked tech stacks (Next.js, Node.js, Prisma) pre-configured for high performance.',
      icon: <StackIcon />
    },
    {
      title: 'Security First',
      description: 'Built-in security audits, secret management, and safe dependency defaults.',
      icon: <ShieldIcon />
    },
    {
      title: 'Modern Architecture',
      description: 'Native support for Clean Architecture, CI/CD, and scalability out of the box.',
      icon: <ActivityIcon />
    },
    {
      title: 'Developer Experience',
      description: 'Zero friction. Focus on code, not configuration. Beautifully engineered CLI output.',
      icon: <SparkleIcon />
    }
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="bento-grid">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} delay={idx * 150} className={`feature-${idx}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | ${siteConfig.tagline}`}
      description="Next-Gen Stack Setup Assistant for Modern Web Development">
      <HomepageHeader />
    </Layout>
  );
}
