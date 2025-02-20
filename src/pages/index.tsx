import React from 'react';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import BackgroundMusic from '../components/BackgroundMusic';

// Dynamically import Spline with no SSR
const SplineComponent = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div>Loading 3D model...</div>
});

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/basement-grotesque"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main style={{ 
        width: '100vw', 
        height: '100vh', 
        overflow: 'hidden',
        position: 'fixed',
        color: 'white',
        fontFamily: "'Basement Grotesque', sans-serif"
      }}>
        <div style={{
          position: 'absolute',
          zIndex: 10,
          padding: '2rem',
          maxWidth: '600px',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            marginBottom: '1rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            background: 'linear-gradient(to right, #fff, #a5a5a5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            SwarmFund
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 4vw, 1.5rem)',
            lineHeight: 1.5,
            opacity: 0.9,
            fontWeight: 500,
            marginBottom: '2rem',
            letterSpacing: '-0.01em'
          }}>
            Invest alongside swarms of intelligent agents, revolutionizing the future of venture capital.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '2rem',
            flexDirection: window.innerWidth <= 480 ? 'column' : 'row',
            width: '100%'
          }}>
            <a href="/form" style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: 'white',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              textAlign: 'center'
            }}>
              🚀 Pitch Now
            </a>
            <a href="https://twitter.com/swarmfun" target="_blank" style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: 'white',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              textAlign: 'center'
            }}>
              𝕏 Follow Updates
            </a>
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: 'clamp(1rem, 4vw, 1.5rem)',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              fontSize: 'clamp(1rem, 3vw, 1.2rem)',
              marginBottom: '0.5rem',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase'
            }}>
              🤖 Swarm Intelligence
            </h3>
            <p style={{
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              lineHeight: 1.6,
              opacity: 0.8,
              letterSpacing: '-0.01em',
              fontWeight: 400
            }}>
              Our network of AI agents collaboratively analyzes startups, market trends, and technological innovations to identify promising investment opportunities with unprecedented accuracy and insight.
            </p>
          </div>
        </div>

        <div style={{
          position: 'fixed',
          bottom: '17px',
          right: '12px',
          zIndex: 1000,
          backgroundColor: 'rgba(0, 0, 0, 1)',
          padding: '8px 12px',
          borderRadius: '50px',
          fontSize: 'clamp(10px, 2vw, 12px)',
          backdropFilter: 'blur(5px)',
          width: 'clamp(120px, 30vw, 150px)',
          height: '38px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          Built by SwarmFund
        </div>

        <SplineComponent
          scene="https://prod.spline.design/T5PkQxXsLO5s-Jgh/scene.splinecode"
          style={{ 
            pointerEvents: 'none'
          }}
        />
        <BackgroundMusic />
      </main>
    </>
  );
} 