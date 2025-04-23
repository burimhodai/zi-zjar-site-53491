import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const NavigationBar = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Inline styles for Navigation
  const navStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: '#ffffff',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #ccc',
  };

  const logoStyle = {
    fontSize: '1.5em',
    fontFamily: 'serif',
    color: '#205781'
  };

  const navLinksStyle = {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const linkStyle = {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#1a1a1a',
    cursor: 'pointer',
    transition: 'color 0.3s',
  };

  const callToActionStyle = {
    padding: '8px 16px',
    backgroundColor: '#205781',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  // Responsive: show hamburger menu on mobile width
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width <= 640;

  return (
    <header style={navStyle} role="banner">
      <div style={logoStyle} aria-label="Finance Business Logo">FinancePro</div>
      {isMobile ? (
        <div>
          <button 
            onClick={toggleMenu} 
            aria-label="Toggle navigation menu" 
            style={{ background: 'none', border: 'none', fontSize: '1.5em', cursor: 'pointer' }}
          >
            &#9776;
          </button>
          {isMenuOpen && (
            <nav role="navigation" style={{ position: 'absolute', top: '60px', left: 0, right: 0, backgroundColor: '#ffffff', borderTop: '1px solid #ccc', padding: '10px 0' }}>
              <ul style={{ ...navLinksStyle, flexDirection: 'column' }}>
                {['Hero', 'Features', 'SocialProof', 'CTA', 'Security', 'Calculator', 'FAQ'].map((item) => (
                  <li key={item} style={{ padding: '8px 0' }}>
                    <a 
                      onClick={() => { onNavClick(item); setIsMenuOpen(false); }} 
                      style={linkStyle}
                      onMouseOver={(e)=>e.currentTarget.style.color='#205781'}
                      onFocus={(e)=>e.currentTarget.style.color='#205781'}
                      onMouseOut={(e)=>e.currentTarget.style.color='#1a1a1a'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li style={{ padding: '8px 0' }}>
                  <button 
                    style={callToActionStyle}
                    onMouseOver={(e)=>e.currentTarget.style.backgroundColor='#4F959D'}
                    onFocus={(e)=>e.currentTarget.style.backgroundColor='#4F959D'}
                    onMouseOut={(e)=>e.currentTarget.style.backgroundColor='#205781'}
                  >
                    Join Now
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      ) : (
        <nav role="navigation" style={{ display: 'flex', alignItems: 'center' }}>
          <ul style={navLinksStyle}>
            {['Hero', 'Features', 'SocialProof', 'CTA', 'Security', 'Calculator', 'FAQ'].map((item) => (
              <li key={item}>
                <a 
                  onClick={() => onNavClick(item)} 
                  style={linkStyle}
                  onMouseOver={(e)=>e.currentTarget.style.color='#205781'}
                  onFocus={(e)=>e.currentTarget.style.color='#205781'}
                  onMouseOut={(e)=>e.currentTarget.style.color='#1a1a1a'}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button 
            style={{ ...callToActionStyle, marginLeft: '20px' }}
            onMouseOver={(e)=>e.currentTarget.style.backgroundColor='#4F959D'}
            onFocus={(e)=>e.currentTarget.style.backgroundColor='#4F959D'}
            onMouseOut={(e)=>e.currentTarget.style.backgroundColor='#205781'}
          >
            Join Now
          </button>
        </nav>
      )}
    </header>
  );
};

NavigationBar.propTypes = {
  onNavClick: PropTypes.func.isRequired,
};

const HeroSection = React.forwardRef((props, ref) => {
  const containerStyle = {
    minHeight: '80vh',
    backgroundColor: '#F6F8D5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 20px',
    textAlign: 'center',
  };

  const headlineStyle = {
    fontSize: '2.5em',
    fontFamily: 'serif',
    color: '#205781',
    margin: '0 0 20px 0',
  };

  const subheadlineStyle = {
    fontSize: '1.2em',
    color: '#1a1a1a',
    margin: '0 0 30px 0',
  };

  const primaryButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#205781',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
    transition: 'transform 0.3s',
  };

  const secondaryButtonStyle = {
    padding: '10px 20px',
    backgroundColor: 'transparent',
    color: '#205781',
    border: '2px solid #205781',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'transform 0.3s',
  };

  return (
    <section ref={ref} id="Hero" style={containerStyle} role="main" aria-label="Hero Section">
      <h1 style={headlineStyle}>Empowering Your Financial Future</h1>
      <p style={subheadlineStyle}>Expert guidance and innovative tools to help you succeed.</p>
      <div>
        <button 
          style={primaryButtonStyle} 
          onMouseOver={(e)=>e.currentTarget.style.transform='scale(1.05)'}
          onFocus={(e)=>e.currentTarget.style.transform='scale(1.05)'}
          onMouseOut={(e)=>e.currentTarget.style.transform='scale(1)'}
        >
          Get Started
        </button>
        <button 
          style={secondaryButtonStyle} 
          onMouseOver={(e)=>e.currentTarget.style.transform='scale(1.05)'}
          onFocus={(e)=>e.currentTarget.style.transform='scale(1.05)'}
          onMouseOut={(e)=>e.currentTarget.style.transform='scale(1)'}
        >
          Learn More
        </button>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

const FeaturesSection = React.forwardRef((props, ref) => {
  const containerStyle = {
    padding: '60px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2em',
    fontFamily: 'serif',
    color: '#205781',
    marginBottom: '40px',
  };

  const featuresContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  };

  const featureStyle = {
    flex: '1 1 250px',
    maxWidth: '300px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    transition: 'transform 0.3s',
    cursor: 'default',
  };

  const iconStyle = {
    fontSize: '2em',
    marginBottom: '10px',
    color: '#4F959D',
  };

  const featureTitleStyle = {
    fontSize: '1.2em',
    marginBottom: '10px',
    fontFamily: 'serif',
    color: '#205781',
  };

  const featureDescStyle = {
    fontSize: '1em',
    color: '#1a1a1a',
  };

  // Dummy features data
  const features = [
    { icon: '💡', title: 'Innovative Solutions', description: 'Modern strategies for modern finance.' },
    { icon: '🔒', title: 'Secure Investments', description: 'Your money is safe with industry leading protections.' },
    { icon: '📈', title: 'Proven Growth', description: 'Consistent growth backed by data-driven decisions.' },
    { icon: '🤝', title: 'Expert Support', description: 'A dedicated team to help you every step of the way.' },
  ];

  return (
    <section ref={ref} id="Features" style={containerStyle} aria-label="Features Section">
      <h2 style={headingStyle}>Our Key Benefits</h2>
      <div style={featuresContainerStyle}>
        {features.map((feat, index) => (
          <div 
            key={index} 
            style={featureStyle}
            onMouseOver={(e)=>e.currentTarget.style.transform='scale(1.02)'}
            onFocus={(e)=>e.currentTarget.style.transform='scale(1.02)'}
            onMouseOut={(e)=>e.currentTarget.style.transform='scale(1)'}
            tabIndex="0"
            aria-label={feat.title}
          >
            <div style={iconStyle}>{feat.icon}</div>
            <div style={featureTitleStyle}>{feat.title}</div>
            <p style={featureDescStyle}>{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

FeaturesSection.displayName = 'FeaturesSection';

const SocialProofSection = React.forwardRef((props, ref) => {
  const containerStyle = {
    padding: '60px 20px',
    backgroundColor: '#F6F8D5',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2em',
    fontFamily: 'serif',
    color: '#205781',
    marginBottom: '40px',
  };

  const testimonialsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  };

  const testimonialStyle = {
    flex: '1 1 250px',
    maxWidth: '300px',
    backgroundColor: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    fontStyle: 'italic',
  };

  const clientNameStyle = {
    marginTop: '10px',
    fontWeight: 'bold',
    color: '#205781',
  };

  // Dummy testimonials
  const testimonials = [
    { quote: 'This service transformed my portfolio!', name: 'Alice Johnson', title: 'CEO, Alpha Inc.' },
    { quote: 'Reliable and cutting edge financial advice.', name: 'Bob Smith', title: 'CFO, Beta LLC' },
    { quote: 'I trust them with my investments.', name: 'Carol White', title: 'Investor' },
  ];

  // Dummy client logos as colored blocks
  const clientLogos = ['🏦', '💰', '📊', '💼'];

  return (
    <section ref={ref} id="SocialProof" style={containerStyle} aria-label="Social Proof Section">
      <h2 style={headingStyle}>What Our Clients Say</h2>
      <div style={testimonialsContainerStyle}>
        {testimonials.map((t, i) => (
          <div key={i} style={testimonialStyle} tabIndex="0" aria-label={`Testimonial from ${t.name}`}>
            <p>"{t.quote}"</p>
            <div style={clientNameStyle}>{t.name}, {t.title}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px' }} aria-label="Client Logos">
        {clientLogos.map((logo, i) => (
          <div key={i} style={{ fontSize: '2em' }}>{logo}</div>
        ))}
      </div>
    </section>
  );
});

SocialProofSection.displayName = 'SocialProofSection';

const CTASection = React.forwardRef((props, ref) => {
  const containerStyle = {
    padding: '60px 20px',
    backgroundColor: '#205781',
    textAlign: 'center',
    color: '#ffffff',
  };

  const headingStyle = {
    fontSize: '2em',
    fontFamily: 'serif',
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '12px 24px',
    backgroundColor: '#16a34a',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontSize: '1em',
  };

  const supportTextStyle = {
    marginTop: '20px',
    fontSize: '1em',
  };

  return (
    <section ref={ref} id="CTA" style={containerStyle} aria-label="Call to Action Section">
      <h2 style={headingStyle}>Ready to take control of your finances?</h2>
      <button 
        style={buttonStyle}
        onMouseOver={(e)=>e.currentTarget.style.backgroundColor='#16a34a'}
        onFocus={(e)=>e.currentTarget.style.backgroundColor='#16a34a'}
        onMouseOut={(e)=>e.currentTarget.style.backgroundColor='#16a34a'}
      >
        Sign Up Today
      </button>
      <div style={supportTextStyle}>
        No hidden fees. No risk. Just growth.
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';

const SecurityTrustSection = React.forwardRef((props, ref) => {
  const containerStyle = {
    padding: '60px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '1.8em',
    fontFamily: 'serif',
    color: '#205781',
    marginBottom: '20px',
  };

  const badgeContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  };

  const badgeStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px 20px',
    backgroundColor: '#F6F8D5',
    fontWeight: 'bold',
    color: '#4F959D',
  };

  return (
    <section ref={ref} id="Security" style={containerStyle} aria-label="Security & Trust Section">
      <h2 style={headingStyle}>Security & Trust</h2>
      <div style={badgeContainerStyle}>
        <div style={badgeStyle}>PCI-DSS Compliant</div>
        <div style={badgeStyle}>SSL Secured</div>
        <div style={badgeStyle}>ISO Certified</div>
        <div style={badgeStyle}>GDPR Compliant</div>
      </div>
    </section>
  );
});

SecurityTrustSection.displayName = 'SecurityTrustSection';

const CalculatorComponent = React.forwardRef((props, ref) => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const containerStyle = {
    padding: '60px 20px',
    backgroundColor: '#F6F8D5',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2em',
    fontFamily: 'serif',
    color: '#205781',
    marginBottom: '20px',
  };

  const inputStyle = {
    padding: '10px',
    margin: '10px',
    fontSize: '1em',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minWidth: '200px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#205781',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '10px',
  };

  // Basic compound interest calculator
  const handleCalculate = (e) => {
    e.preventDefault();
    setError('');
    if (isNaN(principal) || isNaN(rate) || isNaN(years) || principal === '' || rate === '' || years === '') {
      setError('Please enter valid numeric values.');
      setResult(null);
      return;
    }
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const n = parseFloat(years);
    const A = P * Math.pow((1 + r), n);
    setResult(A.toFixed(2));
  };

  return (
    <section ref={ref} id="Calculator" style={containerStyle} aria-label="Calculator Section">
      <h2 style={headingStyle}>Investment Calculator</h2>
      <form onSubmit={handleCalculate}>
        <div>
          <input 
            type="text" 
            placeholder="Principal Amount" 
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            style={inputStyle} 
            aria-label="Principal Amount"
          />
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Annual Interest Rate (%)" 
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            style={inputStyle} 
            aria-label="Annual Interest Rate"
          />
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Years" 
            value={years}
            onChange={(e) => setYears(e.target.value)}
            style={inputStyle} 
            aria-label="Number of Years"
          />
        </div>
        {error && <div style={{ color: '#dc2626' }}>{error}</div>}
        <button 
          type="submit" 
          style={buttonStyle}
          onMouseOver={(e)=>e.currentTarget.style.backgroundColor='#4F959D'}
          onFocus={(e)=>e.currentTarget.style.backgroundColor='#4F959D'}
          onMouseOut={(e)=>e.currentTarget.style.backgroundColor='#205781'}
        >
          Calculate
        </button>
      </form>
      {result && <div style={{ marginTop: '20px', fontSize: '1.2em', color: '#16a34a' }}>Future Value: ${result}</div>}
    </section>
  );
});

CalculatorComponent.displayName = 'CalculatorComponent';

const FAQSection = React.forwardRef((props, ref) => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const containerStyle = {
    padding: '60px 20px',
    backgroundColor: '#ffffff',
  };

  const headingStyle = {
    fontSize: '2em',
    fontFamily: 'serif',
    color: '#205781',
    textAlign: 'center',
    marginBottom: '40px',
  };

  const faqItemStyle = {
    borderBottom: '1px solid #ccc',
    padding: '15px 0',
    cursor: 'pointer',
  };

  const questionStyle = {
    fontSize: '1.2em',
    color: '#1a1a1a',
  };

  const answerStyle = {
    marginTop: '10px',
    fontSize: '1em',
    color: '#4F959D',
  };

  const faqs = [
    { question: 'What is the minimum investment amount?', answer: 'You can start with as little as $100.' },
    { question: 'How secure is my data?', answer: 'We use top-notch security measures to protect your data.' },
    { question: 'Can I withdraw my money anytime?', answer: 'Yes, our platform allows flexible withdrawals.' },
    { question: 'Do you offer customer support?', answer: 'Absolutely, our support team is available 24/7.' },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} id="FAQ" style={containerStyle} aria-label="FAQ Section">
      <h2 style={headingStyle}>Frequently Asked Questions</h2>
      <div>
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            style={faqItemStyle} 
            onClick={() => toggleFAQ(index)}
            onKeyDown={(e)=> {if(e.key === 'Enter') toggleFAQ(index);}}
            tabIndex="0"
            aria-label={`FAQ: ${faq.question}`}
            role="button"
          >
            <div style={questionStyle}>{faq.question}</div>
            {openIndex === index && <div style={answerStyle}>{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
});

FAQSection.displayName = 'FAQSection';

const DataVisualization = React.forwardRef((props, ref) => {
  // Dummy data for a simple bar chart
  const data = [
    { label: 'Q1', value: 50 },
    { label: 'Q2', value: 70 },
    { label: 'Q3', value: 40 },
    { label: 'Q4', value: 90 },
  ];

  const containerStyle = {
    padding: '60px 20px',
    backgroundColor: '#F6F8D5',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2em',
    fontFamily: 'serif',
    color: '#205781',
    marginBottom: '40px',
  };

  const chartContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: '20px',
    height: '200px',
  };

  const barStyle = (height) => ({
    width: '40px',
    height: `${height}%`,
    backgroundColor: '#16a34a',
    transition: 'height 0.3s',
  });

  const labelStyle = {
    marginTop: '10px',
    fontSize: '1em',
    color: '#1a1a1a',
  };

  return (
    <section ref={ref} id="DataViz" style={containerStyle} aria-label="Data Visualization Section">
      <h2 style={headingStyle}>Quarterly Growth</h2>
      <div style={chartContainerStyle}>
        {data.map((d, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={barStyle(d.value)} title={`${d.label}: ${d.value}%`}></div>
            <div style={labelStyle}>{d.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
});

DataVisualization.displayName = 'DataVisualization';

const App = () => {
  // Refs for each section to allow smooth scroll
  const heroRef = React.useRef(null);
  const featuresRef = React.useRef(null);
  const socialProofRef = React.useRef(null);
  const ctaRef = React.useRef(null);
  const securityRef = React.useRef(null);
  const calculatorRef = React.useRef(null);
  const faqRef = React.useRef(null);
  
  // Mapping section names to refs for navigation
  const sectionRefs = {
    Hero: heroRef,
    Features: featuresRef,
    SocialProof: socialProofRef,
    CTA: ctaRef,
    Security: securityRef,
    Calculator: calculatorRef,
    FAQ: faqRef,
  };

  // Handles smooth scroll to a section
  const handleNavClick = (section) => {
    const ref = sectionRefs[section];
    if(ref && ref.current){
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, color: '#1a1a1a' }}>
      <NavigationBar onNavClick={handleNavClick} />
      <HeroSection ref={heroRef} />
      <FeaturesSection ref={featuresRef} />
      <SocialProofSection ref={socialProofRef} />
      <DataVisualization ref={calculatorRef} />
      <CTASection ref={ctaRef} />
      <SecurityTrustSection ref={securityRef} />
      <CalculatorComponent ref={calculatorRef} />
      <FAQSection ref={faqRef} />
    </div>
  );
};

export default App;