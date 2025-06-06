'use client';

import { useEffect, useRef, useState } from 'react';
import scrollama from 'scrollama';
import { gsap } from 'gsap';

const ScrollyStory = () => {
  const scrollerRef = useRef();
  const figureRef = useRef();
  const [currentStep, setCurrentStep] = useState(0);

  // Story steps data - simplified for COP30
  const steps = [
    {
      id: 0,
      title: "COP30 Introduction",
      content: "Bringing Urban Health to COP30 - exploring how climate conferences work and the role of public health research.",
      visual: "intro"
    },
    {
      id: 1,
      title: "What are COPs?",
      content: "A 'Conference of the Parties' (COP) refers to a meeting of countries who have signed international climate agreements.",
      visual: "cops"
    },
    {
      id: 2,
      title: "COP30 in Brazil",
      content: "The UN Framework Convention on Climate Change holds annual COPs. COP30 will take place in November 2025, hosted by Brazil in Belém.",
      visual: "brazil"
    },
    {
      id: 3,
      title: "Preparation Process",
      content: "COP agendas are developed during preparatory meetings hosted by the presidency over 1-2 years prior to each Conference.",
      visual: "preparation"
    },
    {
      id: 4,
      title: "Negotiations",
      content: "Delegates participate in official sessions and open/closed negotiating meetings. This can result in binding agreements.",
      visual: "negotiations"
    },
    {
      id: 5,
      title: "High-Level Events",
      content: "Public stage with speeches by heads of state, announcements, and calls to action.",
      visual: "highlevel"
    },
    {
      id: 6,
      title: "Third COP Activities",
      content: "Side events, pavilions, panel talks, presentations, and protests. Scientists, NGOs, private sector, and activists participate.",
      visual: "activities"
    },
    {
      id: 7,
      title: "Blue vs Green Zones",
      content: "Blue zone: Restricted to accredited delegates only. Green zone: Open to public, managed by host country.",
      visual: "zones"
    },
    {
      id: 8,
      title: "Health Integration",
      content: "Since 2014, health has gained prominence in climate negotiations with dedicated health pavilions and declarations.",
      visual: "health"
    },
    {
      id: 9,
      title: "COP28 Breakthrough",
      content: "COP28 featured the first Health Day and Declaration on Climate and Health, elevating health in the climate agenda.",
      visual: "cop28"
    },
    {
      id: 10,
      title: "COP29 Continuity",
      content: "COP29 secured permanent space for health in future COP agendas through the Baku Continuity Coalition for Climate and Health.",
      visual: "cop29"
    },
    {
      id: 11,
      title: "Brazil's Leadership",
      content: "COP30 in Belém will present the Climate & Health Action Plan to strengthen health system resilience.",
      visual: "leadership"
    },
    {
      id: 12,
      title: "National Commitments",
      content: "90% of national climate plans include health considerations, but only 1 in 10 quantify health benefits.",
      visual: "commitments"
    },
    {
      id: 13,
      title: "Your Path Forward",
      content: "Public health professionals have structured pathways to influence COP30. Your expertise can drive climate policy.",
      visual: "action"
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
        
        // Simple fade animation
        gsap.to(`.visual-${response.index}`, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        });
        
        // Fade out other visuals
        steps.forEach((_, index) => {
          if (index !== response.index) {
            gsap.to(`.visual-${index}`, {
              opacity: 0,
              duration: 0.3,
            });
          }
        });
      });

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
              className={`visual visual-${index}`}
              style={{
                opacity: index === 0 ? 1 : 0,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
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
            Exploring how climate conferences work and the role of public health research.
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
        </div>
      </article>
    </div>
  );
};

// Simple visual component with hardcoded SVGs
const VisualComponent = ({ type }) => {
  const getVisual = () => {
    switch (type) {
      case 'intro':
        return (
          <svg viewBox="0 0 400 300" className="visual-svg">
            <circle cx="200" cy="150" r="80" fill="#4A90E2" />
            <text x="200" y="160" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">COP30</text>
            <text x="200" y="260" textAnchor="middle" fill="#333" fontSize="16">Urban Health & Climate</text>
          </svg>
        );
      
      case 'cops':
        return (
          <svg viewBox="0 0 400 300" className="visual-svg">
            <rect x="100" y="100" width="200" height="100" fill="#E8F4FD" stroke="#4A90E2" strokeWidth="2" rx="8" />
            <text x="200" y="140" textAnchor="middle" fill="#4A90E2" fontSize="16" fontWeight="bold">Conference</text>
            <text x="200" y="160" textAnchor="middle" fill="#4A90E2" fontSize="16" fontWeight="bold">of the Parties</text>
            <text x="200" y="260" textAnchor="middle" fill="#333" fontSize="14">Countries Meeting Together</text>
          </svg>
        );

      case 'brazil':
        return (
          <svg viewBox="0 0 400 300" className="visual-svg">
            <path d="M150 80 Q180 70 220 80 Q250 90 270 120 Q260 160 240 180 Q200 190 170 180 Q140 160 130 120 Q140 90 150 80" 
                  fill="#228B22" stroke="#006400" strokeWidth="2" />
            <circle cx="190" cy="100" r="8" fill="#FF4500" />
            <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16" fontWeight="bold">Belém, Brazil</text>
            <text x="200" y="270" textAnchor="middle" fill="#666" fontSize="12">November 2025</text>
          </svg>
        );

      case 'preparation':
        return (
          <svg viewBox="0 0 400 300" className="visual-svg">
            <line x1="50" y1="150" x2="350" y2="150" stroke="#4A90E2" strokeWidth="4" />
            <circle cx="100" cy="150" r="8" fill="#96CEB4" />
            <circle cx="200" cy="150" r="8" fill="#FFEAA7" />
            <circle cx="300" cy="150" r="8" fill="#FF7675" />
            <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16">Preparatory Sessions</text>
          </svg>
        );

      case 'negotiations':
        return (
          <svg viewBox="0 0 400 300" className="visual-svg">
            <ellipse cx="200" cy="150" rx="60" ry="20" fill="#8B4513" />
            <circle cx="170" cy="140" r="8" fill="#DEB887" />
            <circle cx="200" cy="140" r="8" fill="#F4A460" />
            <circle cx="230" cy="140" r="8" fill="#CD853F" />
            <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16">Official Negotiations</text>
          </svg>
        );

      case 'highlevel':
        return (
          <svg viewBox="0 0 400 300" className="visual-svg">
            <rect x="150" y="120" width="100" height="60" fill="#4A90E2" rx="5" />
            <circle cx="200" cy="100" r="15" fill="#FFD700" />
            <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16">High-Level Speeches</text>
          </svg>
        );

      case 'activities':
        return (
          <svg viewBox="0 0 400 300" className="visual-svg">
            <rect x="80" y="100" width="60" height="40" fill="#96CEB4" rx="5" />
            <rect x="160" y="100" width="60" height="40" fill="#FFEAA7" rx="5" />
            <rect x="240" y="100" width="60" height="40" fill="#FD79A8" rx="5" />
            <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16">Side Events & Pavilions</text>
          </svg>
        );

      case 'zones':
        return (
          <svg viewBox="0 0 400 300" className="visual-svg">
            <rect x="80" y="100" width="120" height="80" fill="#4A90E2" rx="10" />
            <rect x="220" y="100" width="120" height="80" fill="#96CEB4" rx="10" />
            <text x="140" y="145" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Blue Zone</text>
            <text x="280" y="145" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Green Zone</text>
            <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16">Access Zones</text>
          </svg>
        );

      case 'health':
        return (
          <svg viewBox="0 0 400 300" className="visual-svg">
            <circle cx="200" cy="150" r="50" fill="#FF6B6B" />
            <rect x="190" y="130" width="20" height="40" fill="white" />
            <rect x="180" y="140" width="40" height="20" fill="white" />
            <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16">Health Integration</text>
          </svg>
        );

      case 'cop28':
        return (
          <svg viewBox="0 0 400 300" className="visual-svg">
            <text x="200" y="130" textAnchor="middle" fill="#4A90E2" fontSize="32" fontWeight="bold">COP28</text>
            <circle cx="200" cy="170" r="30" fill="#FFD700" />
            <text x="200" y="175" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Health Day</text>
            <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16">First Health Day</text>
          </svg>
        );

      case 'cop29':
        return (
          <svg viewBox="0 0 400 300" className="visual-svg">
            <text x="200" y="130" textAnchor="middle" fill="#4A90E2" fontSize="32" fontWeight="bold">COP29</text>
            <rect x="150" y="150" width="100" height="30" fill="#96CEB4" rx="15" />
            <text x="200" y="170" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Continuity Coalition</text>
            <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16">Permanent Health Space</text>
          </svg>
        );

      case 'leadership':
        return (
          <svg viewBox="0 0 400 300" className="visual-svg">
            <path d="M150 80 Q180 70 220 80 Q250 90 270 120 Q260 160 240 180 Q200 190 170 180 Q140 160 130 120 Q140 90 150 80" 
                  fill="#228B22" stroke="#006400" strokeWidth="2" />
            <circle cx="190" cy="100" r="8" fill="#FFD700" />
            <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16">Brazil's Leadership</text>
          </svg>
        );

      case 'commitments':
        return (
          <svg viewBox="0 0 400 300" className="visual-svg">
            <rect x="100" y="100" width="80" height="60" fill="#4A90E2" />
            <rect x="200" y="130" width="80" height="30" fill="#FF7675" />
            <text x="140" y="135" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">90%</text>
            <text x="240" y="150" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">10%</text>
            <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16">National Commitments</text>
          </svg>
        );

      case 'action':
        return (
          <svg viewBox="0 0 400 300" className="visual-svg">
            <polygon points="200,80 220,120 260,120 230,150 240,190 200,170 160,190 170,150 140,120 180,120" 
                     fill="#FFD700" stroke="#FFA500" strokeWidth="2" />
            <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16" fontWeight="bold">Your Path Forward</text>
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 400 300" className="visual-svg">
            <rect x="150" y="125" width="100" height="50" fill="#E0E0E0" rx="5" />
            <text x="200" y="155" textAnchor="middle" fill="#666" fontSize="16">Visual</text>
          </svg>
        );
    }
  };

  return (
    <div className="visual-content">
      {getVisual()}
    </div>
  );
};

export default ScrollyStory;