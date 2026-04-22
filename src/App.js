import React from 'react';
import './App.css';
import clsx from 'clsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// ─── How It Works Page ────────────────────────────────────────────────────────

const steps = [
  {
    number: 1,
    title: 'You set the point',
    description: 'Tell us where your domain should go.',
    imagePlaceholder: 'step1-image',
  },
  {
    number: 2,
    title: 'Pointrr updates DNS',
    description: 'We create the DNS record. The change spreads across the internet.',
    imagePlaceholder: 'step2-image',
  },
  {
    number: 3,
    title: 'The internet connects',
    description: 'Visitors type your domain and reach your server.',
    imagePlaceholder: 'step3-image',
  },
];

function StepCard({ step }) {
  return (
    <div style={styles.stepCard}>
      <div style={styles.stepHeader}>
        <span style={styles.stepCircle}>{step.number}</span>
        <h3 style={styles.stepTitle}>{step.title}</h3>
      </div>
      <p style={styles.stepDescription}>{step.description}</p>
      {/* Replace this div with your <img> or <Image> component */}
      <div style={styles.imagePlaceholder}>
        {step.imagePlaceholder}
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <div style={styles.wrapper}>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={{ flexShrink: 0 }}>
            <span style={styles.logo}>PROJ_LOGO</span>
          </div>
          <Link to="/" style={styles.backLink}>← Back</Link>
        </nav>
      </header>

      <main style={{ ...styles.main, alignItems: 'flex-start' }}>
        {/* Hero */}
        <div style={{ marginBottom: 56 }}>
          <span style={styles.badge}>&gt;_ pointrr.dev</span>
          <h1 style={styles.heading}>
            Set the Point.{' '}
            <span style={styles.accentText}>
              {/*
                Drop your custom underline CSS class or SVG here.
                e.g.: className="underline-custom"
              */}
              The Internet Connects.
            </span>
          </h1>
          <p style={styles.description}>
            You have a server. You have an IP. Pointrr handles the DNS.
            Add your domain, set the destination, and make it reachable.
          </p>
        </div>

        {/* Steps */}
        <div style={styles.stepsGrid}>
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </main>
    </div>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────

function Home() {
  return (
    <div style={styles.wrapper}>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={{ flexShrink: 0 }}>
            <span style={styles.logo}>PROJ_LOGO</span>
          </div>
        </nav>
      </header>
      <main style={styles.main}>
        <div>
          <h1 style={styles.heading}>
            Streamline your <span style={styles.accentText}>Workflow</span>
          </h1>
          <p style={styles.description}>
            An efficient way to manage your data and scale your services.
            Join our community to get started today.
          </p>
          <div style={styles.ctaContainer}>
            <a
              href="https://forms.gle/fZtBokDao1jsVsAY7"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx('signup-button')}
              style={styles.button}
            >
              Sign Up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = {
  wrapper: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    fontFamily: 'sans-serif',
  },
  header: {
    padding: '16px 32px',
    borderBottom: '1px solid #f0f0f0',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 1100,
    margin: '0 auto',
  },
  logo: {
    fontSize: 18,
    fontWeight: 700,
    color: '#1e1e2e',
    letterSpacing: '-0.5px',
  },
  backLink: {
    fontSize: 14,
    color: '#7c3aed',
    textDecoration: 'none',
    fontWeight: 500,
  },
  main: {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '64px 32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: 42,
    fontWeight: 800,
    color: '#0f0f1a',
    lineHeight: 1.2,
    marginBottom: 16,
  },
  accentText: {
    color: '#7c3aed',
  },
  description: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 1.7,
    maxWidth: 480,
    marginBottom: 32,
  },
  ctaContainer: {
    display: 'flex',
    gap: 12,
  },
  button: {
    display: 'inline-block',
    padding: '12px 28px',
    backgroundColor: '#7c3aed',
    color: '#ffffff',
    borderRadius: 8,
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: 15,
  },
  badge: {
    display: 'inline-block',
    marginBottom: 16,
    padding: '4px 12px',
    border: '1px solid #ddd6fe',
    borderRadius: 6,
    fontSize: 12,
    fontFamily: 'monospace',
    color: '#7c3aed',
    backgroundColor: '#faf5ff',
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 40,
    width: '100%',
  },
  stepCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: 12,
  },
  stepHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  stepCircle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    borderRadius: '50%',
    backgroundColor: '#ede9fe',
    border: '1px solid #ddd6fe',
    color: '#7c3aed',
    fontWeight: 700,
    fontSize: 14,
    flexShrink: 0,
  },
  stepTitle: {
    fontSize: 17,
    fontWeight: 700,
    color: '#1e1e2e',
    margin: 0,
  },
  stepDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 1.65,
    maxWidth: 220,
    margin: 0,
  },
  imagePlaceholder: {
    width: '100%',
    aspectRatio: '4 / 3',
    backgroundColor: '#f8f8f8',
    border: '1px solid #e5e7eb',
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#d1d5db',
    fontSize: 12,
    marginTop: 8,
  },
};
