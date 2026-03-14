import { Check, Star } from 'lucide-react';

const CourseCard = ({ title, duration, price, features, gradient, accent, bestValue }) => {
  return (
    <div className={`glass-card ${bestValue ? 'best-value' : ''}`} style={{ 
      position: 'relative',
      padding: '32px 24px', 
      display: 'flex', 
      flexDirection: 'column',
      border: bestValue ? `1px solid ${accent}` : undefined,
      boxShadow: bestValue ? `0 0 30px ${accent}33` : undefined,
      overflow: 'hidden'
    }}>
      {bestValue && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '-30px',
          background: `linear-gradient(90deg, ${accent}, #d946ef)`,
          padding: '4px 40px',
          transform: 'rotate(45deg)',
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
        }}>
          Best Value
        </div>
      )}

      <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--text-primary)' }}>{title}</h3>
      <div style={{ 
        display: 'inline-flex', 
        alignItems: 'baseline', 
        gap: '4px',
        marginBottom: '16px'
      }}>
        <span style={{ fontSize: '2.5rem', fontWeight: 800 }} className={`text-gradient ${gradient}`}>
          ₹{price}
        </span>
      </div>
      
      <div className="badge" style={{ 
        background: `${accent}22`, 
        color: accent,
        border: `1px solid ${accent}44`,
        marginBottom: '32px',
        alignSelf: 'flex-start'
      }}>
        {duration}
      </div>

      <div style={{ borderTop: '1px solid var(--border-color)', margin: '0 -24px 24px', padding: '0 24px' }}></div>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1, marginBottom: '32px' }}>
        {features.map((feature, idx) => (
          <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ 
              background: `${accent}22`,
              borderRadius: '50%',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: accent
            }}>
              <Check size={14} strokeWidth={3} />
            </div>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{feature}</span>
          </li>
        ))}
      </ul>

      <a href={`https://wa.me/918077078118?text=Hi! I am interested in the ${title} course.`} target="_blank" rel="noreferrer" className="btn" style={{ 
        width: '100%', 
        background: bestValue ? `linear-gradient(135deg, ${accent}, #d946ef)` : 'rgba(255,255,255,0.05)',
        border: bestValue ? 'none' : '1px solid var(--border-highlight)',
        color: bestValue ? '#fff' : 'var(--text-primary)',
        textDecoration: 'none'
      }}>
        {bestValue ? <><Star size={18} /> Enroll Masterclass</> : 'Enroll via WhatsApp'}
      </a>
    </div>
  );
};

export default function Courses() {
  const pythonFeatures = [
    "From Scratch to Advanced",
    "Real-world Projects",
    "Handholding Support",
    "Industry Ready Curriculum",
    "Certificate of Completion"
  ];

  const djangoFeatures = [
    "Full-stack Development",
    "RESTful APIs creation",
    "Database Management",
    "Industry Ready Curriculum",
    "Certificate of Completion"
  ];

  const combinedFeatures = [
    "Everything in Python & Django",
    "Advanced Web Architectures",
    "Interview Preparation",
    "Portfolio Building Support",
    "Premium 1-on-1 Mentorship"
  ];

  const dsaFeatures = [
    "150+ Hands-on LeetCode Questions",
    "Data Structures & Algorithms",
    "Deep Dive into Python Built-ins",
    "System Design Basics",
    "Mock Interviews"
  ];

  return (
    <section id="courses" className="section" style={{ background: 'rgba(10, 10, 12, 0.4)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '600px', margin: '0 auto 64px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
            Our <span className="text-gradient text-gradient-primary">Programs</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Choose the specific technology you want to learn, or combine them for the ultimate masterclass experience.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '24px',
          alignItems: 'start'
        }}>
          <CourseCard 
            title="Python Core" 
            duration="6 Weeks" 
            price="5,000" 
            features={pythonFeatures}
            gradient="text-gradient-primary"
            accent="var(--accent-python-yellow)"
          />

          <CourseCard 
            title="Python + DSA" 
            duration="12 Weeks" 
            price="7,000" 
            features={dsaFeatures}
            gradient="text-gradient-primary"
            accent="#3b82f6"
          />
          
          <div style={{ transform: 'scale(1.02)', zIndex: 10 }}>
            <CourseCard 
              title="Python + Django Masterclass" 
              duration="10 Weeks" 
              price="8,000" 
              features={combinedFeatures}
              gradient="text-gradient-combo"
              accent="var(--accent-combo)"
              bestValue={true}
            />
          </div>

          <CourseCard 
            title="Django Web" 
            duration="6 Weeks" 
            price="5,000" 
            features={djangoFeatures}
            gradient="text-gradient-django"
            accent="var(--accent-django-light)"
          />
        </div>
      </div>
    </section>
  );
}
