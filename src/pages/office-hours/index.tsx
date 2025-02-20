import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const SplineComponent = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div>Loading 3D model...</div>
});

export default function OfficeHours() {
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
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        maxWidth: '600px',
        padding: '2rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '1.5rem',
          fontWeight: 600
        }}>
          AI Office Hours
        </h1>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          opacity: 0.9,
          lineHeight: 1.5
        }}>
          Get instant feedback on your startup from our AI agents. We'll analyze your idea, market fit, and growth potential.
        </p>
        <button style={{
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '50px',
          color: 'white',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease'
        }}>
          🤖 Start Session
        </button>
        <div style={{
          marginTop: '2rem',
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          fontSize: '0.9rem',
          opacity: 0.7
        }}>
          <span>• Market Analysis</span>
          <span>• Growth Strategy</span>
          <span>• Tech Review</span>
        </div>
      </div>

      <div style={{
        position: 'fixed',
        bottom: '8px',
        right: '12px',
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 1)',
        padding: '8px 12px',
        borderRadius: '50px',
        fontSize: '12px',
        backdropFilter: 'blur(5px)',
        width: '150px',
        height: '38px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        Built by SwarmFund
      </div>

      <SplineComponent
        scene="https://prod.spline.design/RrmpLi5Gw9Ak9NFB/scene.splinecode"
        style={{ 
          pointerEvents: 'none'
        }}
      />
    </main>
  );
}