'use client';

// ===================================================================
// SCROLLY STORY MAIN ORCHESTRATOR COMPONENT
// ===================================================================
// This is the master component that coordinates the entire scrolly story
// experience, managing scroll-triggered animations and visual transitions.

// React hooks for component lifecycle and state management
import { useEffect, useRef, useState } from 'react';
// Scrollama library for scroll-based step detection and triggers
import scrollama from 'scrollama';
// GSAP for smooth animations and visual transitions
import { gsap } from 'gsap';
// Visual components mapping - connects story steps to React components
import { visualComponents } from './visuals';
// Story data configuration - content, settings, and animation presets
import { storySteps, scrollamaConfig, animationConfig } from '../data/storyData';

const ScrollyStory = () => {
  // ===================================================================
  // STATE & REFS MANAGEMENT
  // ===================================================================
  // Ref for the scrolling article container (triggers scroll events)
  const scrollerRef = useRef();
  // Ref for the sticky figure container (holds visual content)
  const figureRef = useRef();
  // Current active step index (determines which visual is displayed)
  const [currentStep, setCurrentStep] = useState(0);

  // ===================================================================
  // SCROLLAMA SETUP & ANIMATION ORCHESTRATION
  // ===================================================================
  useEffect(() => {
    // Initialize scrollama instance for scroll-triggered interactions
    const scroller = scrollama();

    // Configure scrollama with imported settings and define step behavior
    scroller
      .setup({
        step: '.step',
        offset: 0.5,
        debug: false,
      }) // Uses config from storyData.js
      .onStepEnter((response) => {
        // Extract step index from scrollama response
        const stepIndex = response.index;
        // Update React state to reflect current active step
        setCurrentStep(stepIndex);
        
        // ===================================================================
        // VISUAL TRANSITION ORCHESTRATION
        // ===================================================================
        // Animate the current visual into view using GSAP
        gsap.to(`.visual-${stepIndex}`, animationConfig.enter);
        
        // Hide all other visuals with exit animation
        storySteps.forEach((_, index) => {
          if (index !== stepIndex) {
            gsap.to(`.visual-${index}`, animationConfig.exit);
          }
        });
      });

    // Cleanup scrollama instance on component unmount
    return () => {
      if (scroller) {
        scroller.destroy();
      }
    };
  }, []);

  // ===================================================================
  // MAIN COMPONENT RENDER - DUAL COLUMN LAYOUT
  // ===================================================================
  return (
    <div className="scrolly-container">
      {/* ===================================================================
          RED: STICKY VISUAL AREA - Left column, stays fixed during scroll 
          ================================================================= */}
      <figure ref={figureRef} className="sticky-figure">
        <div className="visual-container">
          {/* Render all visual components, positioned absolutely for smooth transitions */}
          {storySteps.map((step, index) => (
            <VisualWrapper 
              key={step.id}
              step={step}
              index={index}
              isActive={index === currentStep}
            />
          ))}
        </div>
      </figure>

      {/* ===================================================================
          ORANGE: SCROLLING CONTENT AREA - Right column, drives scroll interactions
          ================================================================= */}
      <article ref={scrollerRef} className="scroller">
        {/* Introduction section */}
        <IntroSection />
        
        {/* Individual story steps - each triggers scrollama when in view */}
        {storySteps.map((step, index) => (
          <StoryStep key={step.id} step={step} index={index} />
        ))}
        
        {/* Conclusion section */}
        <OutroSection />
      </article>
    </div>
  );
};

// ===================================================================
// SUB-COMPONENT: VISUAL WRAPPER
// ===================================================================
// Wraps individual visual components with positioning and transition logic
const VisualWrapper = ({ step, index, isActive }) => {
  // Dynamically get the appropriate visual component from the mapping
  const VisualComponent = visualComponents[step.visual];
  
  return (
    <div 
      className={`visual visual-${index}`}
      style={{
        // First visual visible by default, others start hidden
        opacity: index === 0 ? 1 : 0,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxWidth: '400px',
        zIndex: isActive ? 10 : 1 // Active visual appears on top
      }}
    >
      <div className="visual-content">
        {/* Render the mapped visual component or fallback */}
        {VisualComponent ? <VisualComponent /> : <DefaultVisual />}
      </div>
    </div>
  );
};

// ===================================================================
// SUB-COMPONENT: DEFAULT VISUAL FALLBACK
// ===================================================================
// Displays when no specific visual component is found
const DefaultVisual = () => (
  <svg viewBox="0 0 400 300" className="visual-svg">
    <rect x="150" y="125" width="100" height="50" fill="#E0E0E0" rx="5" />
    <text x="200" y="155" textAnchor="middle" fill="#666" fontSize="16">Visual</text>
  </svg>
);

// ===================================================================
// SUB-COMPONENT: INTRO SECTION
// ===================================================================
// Landing section that introduces the story theme
const IntroSection = () => (
  <div className="intro-section">
    <h1 className="main-title">COP30: Urban Health & Climate Action</h1>
    <p className="intro-text">
      Exploring how climate conferences work and the role of public health research.
    </p>
  </div>
);

// ===================================================================
// SUB-COMPONENT: STORY STEP
// ===================================================================
// Individual content sections that trigger scrollama events
const StoryStep = ({ step, index }) => (
  <div className="step" data-step={index}>
    <div className="step-content">
      <h2>{step.title}</h2>
      <p>{step.content}</p>
    </div>
  </div>
);

// ===================================================================
// SUB-COMPONENT: OUTRO SECTION
// ===================================================================
// Concluding section with call-to-action
const OutroSection = () => (
  <div className="outro-section">
    <h2>Taking Action</h2>
    <p>
      COP30 represents a critical moment for urban climate action. 
      The health of our cities and communities depends on the decisions made today.
    </p>
  </div>
);

export default ScrollyStory;