import React from 'react';
import './App.css';
import clsx from 'clsx';

function App() {
  const styles = {
    wrapper: {
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      fontFamily: 'sans-serif',
      color: '#111827'
    },
    header: {
      backgroundColor: '#ffffff',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      height: '64px',
      display: 'flex',
      alignItems: 'center'
    },
    nav: {
      maxWidth: '80rem',
      margin: '0 auto',
      padding: '0 1rem',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#4f46e5',
      letterSpacing: '-0.025em'
    },
    main: {
      maxWidth: '80rem',
      margin: '0 auto',
      padding: '4rem 1rem',
      textAlign: 'center'
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 800,
      lineHeight: 1.2,
      marginBottom: '1rem'
    },
    accentText: {
      color: '#4f46e5'
    },
    description: {
      marginTop: '0.75rem',
      maxWidth: '32rem',
      margin: '0 auto',
      fontSize: '1.125rem',
      color: '#6b7280',
      lineHeight: 1.5
    },
    ctaContainer: {
      marginTop: '2.5rem',
      display: 'flex',
      justifyContent: 'center'
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.75rem 2rem',
      fontSize: '1.125rem',
      fontWeight: 500,
      borderRadius: '0.375rem',
      color: '#ffffff',
      backgroundColor: '#4f46e5',
      textDecoration: 'none',
      transition: 'background-color 0.2s',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* Header / Logo Section */}
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={{ flexShrink: 0 }}>
            <span style={styles.logo}>
              PROJ_LOGO
            </span>
          </div>
        </nav>
      </header>


      {/* Main Content */}
      <main style={styles.main}>
        <div>
          <h1 style={styles.heading}>
            Streamline your <span style={styles.accentText}>Workflow</span>
          </h1>
          <p style={styles.description}>
            An efficient way to manage your data and scale your services. 
            Join our community to get started today.
          </p>

          {/* Call to Action */}
          <div style={styles.ctaContainer}>
            <a
              href="https://docs.google.com/forms/your-google-doc-link-here"
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

export default App;
