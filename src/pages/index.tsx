import React from 'react';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

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
    <main style={{ 
      width: '100vw', 
      height: '100vh', 
      overflow: 'hidden',
      position: 'fixed',
      color: 'white',
      fontFamily: "'Space Grotesk', sans-serif"
    }}>
    <div style={{
        position: 'absolute',
        zIndex: 10,
        padding: '2rem',
        maxWidth: '600px'
      }}>
        <h1 style={{
          fontSize: '4.5rem',
          marginBottom: '1rem',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          background: 'linear-gradient(to right, #fff, #a5a5a5)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          VCAI
        </h1>
        <p style={{
          fontSize: '1.5rem',
          lineHeight: 1.5,
          opacity: 0.9,
          fontWeight: 300,
          marginBottom: '2rem'
        }}>
          Invest alongside swarms of intelligent agents, revolutionizing the future of venture capital.
        </p>
        
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <a href="/pitch" style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '8px',
            color: 'white',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}>
            🎯 Office Hours
          </a>
          <a href="https://twitter.com/vcaiswarm" target="_blank" style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '8px',
            color: 'white',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}>
            𝕏 Follow Updates
          </a>
        </div>

        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '1.5rem',
          backdropFilter: 'blur(10px)'
        }}>
          <h3 style={{
            fontSize: '1.2rem',
            marginBottom: '0.5rem',
            fontWeight: 500
          }}>
            🤖 Swarm Intelligence
          </h3>
          <p style={{
            fontSize: '0.9rem',
            lineHeight: 1.6,
            opacity: 0.8
          }}>
            Our network of AI agents collaboratively analyzes startups, market trends, and technological innovations to identify promising investment opportunities with unprecedented accuracy and insight.
          </p>
        </div>
      </div>
      <style jsx global>{`
        .spline-watermark {
          display: none !important;
        }
      `}</style>
      {/* Watermark cover */}
      <div style={{
        position: 'fixed',
        bottom: '17px',
        right: '12px',
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 1)',
        padding: '8px 12px',
        borderRadius: '4px',
        fontSize: '12px',
        backdropFilter: 'blur(5px)',
        width: '150px',
        height: '38px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        Built by VCAI Labs
      </div>
      <SplineComponent
        scene="https://prod.spline.design/T5PkQxXsLO5s-Jgh/scene.splinecode" 
        style={{ 
          pointerEvents: 'none' // Disables user interaction with the 3D scene
        }}
      />
    </main>
  );
} 