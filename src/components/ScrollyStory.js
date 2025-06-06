'use client';

import { useEffect, useRef, useState } from 'react';
import scrollama from 'scrollama';
import { gsap } from 'gsap';

const ScrollyStory = () => {
  const scrollerRef = useRef();
  const figureRef = useRef();
  const [currentStep, setCurrentStep] = useState(0);

  // Story steps data
  const steps = [
    {
      id: 0,
      title: "Climate Change & Urban Health",
      content: "Cities are home to over half the world's population and are responsible for 70% of global carbon emissions.",
      visual: "cityscape"
    },
    {
      id: 1,
      title: "Rising Temperatures",
      content: "Urban heat islands can make cities 5-10°F warmer than surrounding areas, affecting millions of residents.",
      visual: "temperature"
    },
    {
      id: 2,
      title: "Air Quality Crisis",
      content: "Poor air quality in cities contributes to respiratory diseases, affecting children and elderly populations most.",
      visual: "pollution"
    },
    {
      id: 3,
      title: "Green Solutions",
      content: "Urban forests and green infrastructure can reduce temperatures by up to 20°F and improve air quality.",
      visual: "green"
    },
    {
      id: 4,
      title: "COP30 Action",
      content: "The upcoming COP30 summit will focus on urban climate solutions and health co-benefits.",
      visual: "summit"
    }
  ];

  useEffect(() => {
    // Initialize scrollama
    const scroller = scrollama();

    scroller
      .setup({
        step: '.step',
        offset: 0.5,
        debug: false,
      })
      .onStepEnter((response) => {
        setCurrentStep(response.index);
        
        // GSAP animations based on step
        const tl = gsap.timeline();
        
        // Fade in current visual
        tl.to(`.visual-${response.index}`, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out"
        });
        
        // Fade out other visuals
        steps.forEach((_, index) => {
          if (index !== response.index) {
            gsap.to(`.visual-${index}`, {
              opacity: 0,
              scale: 0.8,
              duration: 0.5,
              ease: "power2.out"
            });
          }
        });
      });

    // Cleanup
    return () => scroller.destroy();
  }, []);

  return (
    <div className="scrolly-container">
      {/* Fixed visualization area */}
      <figure ref={figureRef} className="sticky-figure">
        <div className="visual-container">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className={`visual visual-${index} ${step.visual}`}
              style={{
                opacity: index === 0 ? 1 : 0,
                transform: index === 0 ? 'scale(1)' : 'scale(0.8)'
              }}
            >
              <VisualComponent type={step.visual} />
            </div>
          ))}
        </div>
      </figure>

      {/* Scrolling text content */}
      <article ref={scrollerRef} className="scroller">
        <div className="intro-section">
          <h1 className="main-title">COP30: Urban Health & Climate Action</h1>
          <p className="intro-text">
            Exploring the intersection of climate change and urban health through data-driven storytelling.
          </p>
        </div>

        {steps.map((step, index) => (
          <div key={step.id} className="step" data-step={index}>
            <div className="step-content">
              <h2>{step.title}</h2>
              <p>{step.content}</p>
            </div>
          </div>
        ))}

        <div className="outro-section">
          <h2>Taking Action</h2>
          <p>
            COP30 represents a critical moment for urban climate action. 
            The health of our cities and communities depends on the decisions made today.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
      </article>
    </div>
  );
};

// Visual component that renders different SVG illustrations
const VisualComponent = ({ type }) => {
  const visuals = {
    cityscape: (
      <svg viewBox="0 0 400 300" className="visual-svg">
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#87CEEB" />
            <stop offset="100%" stopColor="#4682B4" />
          </linearGradient>
        </defs>
        {/* Sky */}
        <rect width="400" height="200" fill="url(#skyGradient)" />
        {/* Buildings */}
        <rect x="50" y="120" width="40" height="80" fill="#606060" />
        <rect x="100" y="100" width="50" height="100" fill="#707070" />
        <rect x="160" y="130" width="35" height="70" fill="#505050" />
        <rect x="200" y="110" width="45" height="90" fill="#808080" />
        <rect x="250" y="90" width="40" height="110" fill="#656565" />
        <rect x="300" y="125" width="50" height="75" fill="#757575" />
        {/* Windows */}
        <rect x="55" y="130" width="8" height="8" fill="#FFD700" />
        <rect x="75" y="130" width="8" height="8" fill="#FFD700" />
        <rect x="55" y="150" width="8" height="8" fill="#FFD700" />
        <rect x="110" y="120" width="8" height="8" fill="#FFD700" />
        <rect x="130" y="120" width="8" height="8" fill="#FFD700" />
        <rect x="210" y="130" width="8" height="8" fill="#FFD700" />
        <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16" fontWeight="bold">
          Urban Centers
        </text>
      </svg>
    ),
    
    temperature: (
      <svg viewBox="0 0 400 300" className="visual-svg">
        <defs>
          <radialGradient id="heatGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF4500" />
            <stop offset="50%" stopColor="#FF6347" />
            <stop offset="100%" stopColor="#FFB347" />
          </radialGradient>
        </defs>
        {/* Heat zones */}
        <circle cx="200" cy="150" r="100" fill="url(#heatGradient)" opacity="0.6" />
        <circle cx="200" cy="150" r="70" fill="url(#heatGradient)" opacity="0.4" />
        <circle cx="200" cy="150" r="40" fill="url(#heatGradient)" opacity="0.8" />
        {/* Thermometer */}
        <rect x="180" y="80" width="8" height="60" fill="#E0E0E0" rx="4" />
        <circle cx="184" cy="150" r="12" fill="#FF0000" />
        <rect x="182" y="85" width="4" height="55" fill="#FF0000" />
        {/* Temperature readings */}
        <text x="210" y="90" fill="#FF0000" fontSize="14" fontWeight="bold">
          +5-10°F
        </text>
        <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16" fontWeight="bold">
          Urban Heat Islands
        </text>
      </svg>
    ),
    
    pollution: (
      <svg viewBox="0 0 400 300" className="visual-svg">
        {/* Polluted sky */}
        <rect width="400" height="200" fill="#B0A090" />
        {/* Pollution clouds */}
        <ellipse cx="100" cy="50" rx="30" ry="15" fill="#808080" opacity="0.7" />
        <ellipse cx="150" cy="40" rx="25" ry="12" fill="#606060" opacity="0.7" />
        <ellipse cx="200" cy="55" rx="35" ry="18" fill="#707070" opacity="0.7" />
        <ellipse cx="280" cy="45" rx="28" ry="14" fill="#505050" opacity="0.7" />
        {/* Factory */}
        <rect x="320" y="120" width="60" height="80" fill="#404040" />
        <rect x="335" y="100" width="8" height="40" fill="#303030" />
        <rect x="350" y="90" width="8" height="50" fill="#303030" />
        {/* Smoke from chimney */}
        <ellipse cx="339" cy="85" rx="8" ry="6" fill="#808080" opacity="0.8" />
        <ellipse cx="354" cy="75" rx="10" ry="8" fill="#606060" opacity="0.8" />
        {/* Person with mask */}
        <circle cx="150" cy="180" r="15" fill="#F4A460" />
        <rect x="145" y="190" width="10" height="25" fill="#4169E1" />
        <rect x="148" y="175" width="4" height="8" fill="#FFFFFF" />
        <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16" fontWeight="bold">
          Air Quality Crisis
        </text>
      </svg>
    ),
    
    green: (
      <svg viewBox="0 0 400 300" className="visual-svg">
        <defs>
          <linearGradient id="greenSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#87CEEB" />
            <stop offset="100%" stopColor="#98FB98" />
          </linearGradient>
        </defs>
        {/* Clean sky */}
        <rect width="400" height="200" fill="url(#greenSky)" />
        {/* Trees */}
        <ellipse cx="80" cy="140" rx="25" ry="30" fill="#228B22" />
        <rect x="75" y="155" width="10" height="25" fill="#8B4513" />
        <ellipse cx="150" cy="135" rx="30" ry="35" fill="#32CD32" />
        <rect x="145" y="155" width="10" height="25" fill="#8B4513" />
        <ellipse cx="220" cy="145" rx="28" ry="32" fill="#228B22" />
        <rect x="215" y="160" width="10" height="20" fill="#8B4513" />
        <ellipse cx="290" cy="138" rx="26" ry="33" fill="#32CD32" />
        <rect x="285" y="155" width="10" height="25" fill="#8B4513" />
        {/* Green building */}
        <rect x="320" y="120" width="50" height="80" fill="#90EE90" />
        <rect x="325" y="130" width="8" height="8" fill="#FFFFFF" />
        <rect x="340" y="130" width="8" height="8" fill="#FFFFFF" />
        <rect x="355" y="130" width="8" height="8" fill="#FFFFFF" />
        {/* Clean air indicators */}
        <text x="200" y="50" textAnchor="middle" fill="#32CD32" fontSize="14" fontWeight="bold">
          Clean Air
        </text>
        <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16" fontWeight="bold">
          Green Solutions
        </text>
      </svg>
    ),
    
    summit: (
      <svg viewBox="0 0 400 300" className="visual-svg">
        {/* Conference building */}
        <rect x="100" y="100" width="200" height="100" fill="#4682B4" rx="10" />
        <rect x="180" y="130" width="40" height="50" fill="#FFFFFF" />
        <polygon points="200,120 160,140 240,140" fill="#FFD700" />
        {/* Flags */}
        <rect x="120" y="80" width="3" height="40" fill="#8B4513" />
        <rect x="123" y="80" width="15" height="8" fill="#FF0000" />
        <rect x="160" y="75" width="3" height="40" fill="#8B4513" />
        <rect x="163" y="75" width="15" height="8" fill="#00FF00" />
        <rect x="260" y="75" width="3" height="40" fill="#8B4513" />
        <rect x="263" y="75" width="15" height="8" fill="#0000FF" />
        {/* Globe */}
        <circle cx="200" cy="150" r="25" fill="#4169E1" opacity="0.8" />
        <ellipse cx="200" cy="150" rx="25" ry="15" fill="none" stroke="#FFFFFF" strokeWidth="2" />
        <ellipse cx="200" cy="150" rx="15" ry="25" fill="none" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="175" y1="150" x2="225" y2="150" stroke="#FFFFFF" strokeWidth="2" />
        {/* People silhouettes */}
        <circle cx="250" cy="180" r="5" fill="#333" />
        <rect x="247" y="185" width="6" height="15" fill="#333" />
        <circle cx="270" cy="185" r="5" fill="#333" />
        <rect x="267" y="190" width="6" height="10" fill="#333" />
        <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16" fontWeight="bold">
          COP30 Summit
        </text>
      </svg>
    )
  };

  return visuals[type] || visuals.cityscape;
};

export default ScrollyStory;
