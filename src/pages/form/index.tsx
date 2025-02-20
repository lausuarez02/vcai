import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import BackgroundMusic from '../../components/BackgroundMusic';

const SplineComponent = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div>Loading 3D model...</div>
});

export default function Pitch() {
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
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '600px',
          width: '90%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '2rem',
          transition: 'all 0.3s ease',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
            pointerEvents: 'none'
          }}/>
          <h1 style={{
            fontSize: '2rem',
            marginBottom: '1.5rem',
            textAlign: 'center',
            fontWeight: '700',
            letterSpacing: '-0.02em',
            textTransform: 'uppercase'
          }}>
            Pitch to SwarmFund
          </h1>
          <form style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <input 
              type="text"
              placeholder="Company Name"
              style={{
                padding: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '10px',
                color: 'white',
                fontSize: '1rem'
              }}
            />
            <input 
              type="email"
              placeholder="Email"
              style={{
                padding: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '10px',
                color: 'white',
                fontSize: '1rem'
              }}
            />
            <textarea 
              placeholder="Tell us about your startup (1-2 paragraphs)"
              rows={4}
              style={{
                padding: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '10px',
                color: 'white',
                fontSize: '1rem',
                resize: 'none'
              }}
            />
            <button style={{
              padding: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Submit Pitch
            </button>
          </form>
        </div>

        <div style={{
          position: 'fixed',
          bottom: '17px',
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