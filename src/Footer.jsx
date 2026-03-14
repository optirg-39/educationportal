import { Phone, Mail, MapPin, Instagram, Linkedin, MessageCircle, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      paddingTop: '80px',
      paddingBottom: '40px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px',
          marginBottom: '80px'
        }}>

          {/* Mission Section */}
          <div id="mission">
            <div className="brand-logo" style={{ marginBottom: '24px' }}>
              <div className="brand-dot"></div>
              LearnATTITUTE
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '400px' }}>
              At LearnATTITUTE, we don’t just teach code. We build the attitude, mindset, and real-world skills required to crack interviews and succeed in the industry — starting from absolute scratch.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="https://www.instagram.com/learnattitute/" target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)',
                transition: 'all 0.3s'
              }} className="social-icon">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/learnattitute/?viewAsMember=true" target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)',
                transition: 'all 0.3s'
              }} className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="https://wa.me/918077078118?text=Hi! I am interested in joining LearnATTITUTE." target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)',
                transition: 'all 0.3s'
              }} className="social-icon">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '24px' }}>Programs</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#courses" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>Python Core (6 Weeks)</a></li>
              <li><a href="#courses" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>Python + DSA (12 Weeks)</a></li>
              <li><a href="#courses" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>Django Web (6 Weeks)</a></li>
              <li><a href="#courses" style={{ color: 'var(--accent-combo)', fontWeight: 600 }}>Masterclass (10 Weeks)</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '24px' }}>Get in Touch</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
                <Phone size={18} color="var(--accent-python-yellow)" />
                <a href="tel:+918077078118" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>+91 8077078118</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
                <Mail size={18} color="var(--accent-django-light)" />
                <a href="mailto:learnattitute@gmail.com">learnattitute@gmail.com</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
                <MapPin size={18} color="var(--accent-combo)" />
                <span>Available Online Globally</span>
              </li>
            </ul>

            <a href="https://www.instagram.com/learnattitute/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: '24px', width: '100%' }}>
              DM us on Instagram <ArrowRight size={18} />
            </a>
          </div>

        </div>

        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          color: 'var(--text-muted)',
          fontSize: '0.9rem'
        }}>
          <p>© {new Date().getFullYear()} LearnATTITUTE. All rights reserved.</p>
          <p>Handcrafted for Future Developers.</p>
        </div>
      </div>
    </footer>
  );
}
