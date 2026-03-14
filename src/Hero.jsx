import { Code, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>

        {/* Glow Effects */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'var(--accent-python-glow)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          zIndex: -1,
          animation: 'pulse-glow 8s infinite alternate'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '400px',
          height: '400px',
          background: 'var(--accent-django-glow)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          zIndex: -1,
          animation: 'pulse-glow 10s infinite alternate-reverse'
        }}></div>

        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="badge badge-glow animate-float" style={{ marginBottom: '24px' }}>
            <span style={{ marginRight: '8px', color: 'var(--accent-python-yellow)' }}>●</span>
            From Zero to Interview Ready
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '24px' }}>
            Master <span className="text-gradient text-gradient-primary">Python</span> & <span className="text-gradient text-gradient-django">Django</span>
            <br />From Scratch.
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            maxWidth: '700px',
            margin: '0 auto 40px auto'
          }}>
            At LearnATTITUTE, we don’t just teach code.<br />
            We build the attitude, mindset, and real-world skills required to crack interviews and succeed in the industry — starting from absolute scratch.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#courses" className="btn btn-primary">
              <Code size={20} />
              Explore Courses
            </a>
            <a href="#contact" className="btn btn-outline glass">
              <Terminal size={20} />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
