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
// Story data configuration - content, settings, and animation presets
import { storySteps, scrollamaConfig, animationConfig } from '../data/storyData';
// Modular components
import VisualWrapper from './VisualWrapper';
import IntroSection from './IntroSection';
import StoryStep from './StoryStep';
import OutroSection from './OutroSection';

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
  // Mobile detection state
  const [isMobile, setIsMobile] = useState(false);

  // ===================================================================
  // MOBILE DETECTION & RESPONSIVE HANDLING
  // ===================================================================
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // ===================================================================
  // SCROLLAMA SETUP & ANIMATION ORCHESTRATION
  // ===================================================================
  useEffect(() => {
    // Initialize scrollama instance for scroll-triggered interactions
    const scroller = scrollama();

    // Configure scrollama with responsive settings
    scroller
      .setup({
        step: '.step',
        offset: isMobile ? 0.75 : 0.5, // Higher offset for mobile overlay approach
        debug: false,
      })
      .onStepEnter((response) => {
        // Extract step index from scrollama response
        const stepIndex = response.index;
        // Update React state to reflect current active step
        setCurrentStep(stepIndex);
        
        // ===================================================================
        // VISUAL TRANSITION ORCHESTRATION - WITH OVERLAP PREVENTION
        // ===================================================================
        // Kill all existing animations to prevent overlap
        gsap.killTweensOf('.visual-container [class*="visual-"]');
        
        // Mobile uses full-screen background approach, desktop uses side-by-side
        const mobileAnimationConfig = isMobile ? {
          enter: { 
            opacity: 1, 
            duration: 0.6, 
            ease: "power2.inOut"
          },
          exit: { 
            opacity: 0, 
            duration: 0.4, 
            ease: "power2.inOut"
          }
        } : animationConfig;
        
        // First, immediately hide all visuals
        storySteps.forEach((_, index) => {
          if (index !== stepIndex) {
            gsap.set(`.visual-${index}`, { opacity: 0, zIndex: 1 });
          }
        });
        
        // Then animate the current visual into view with highest z-index
        gsap.set(`.visual-${stepIndex}`, { zIndex: 10 });
        gsap.to(`.visual-${stepIndex}`, mobileAnimationConfig.enter);

        // Mobile-specific: Add active class to current step for enhanced styling
        if (isMobile) {
          // Remove active class from all steps
          document.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
          });
          // Add active class to current step
          const currentStepElement = document.querySelector(`.step[data-step="${stepIndex}"]`);
          if (currentStepElement) {
            currentStepElement.classList.add('active');
          }
        }
      });

    // Cleanup scrollama instance on component unmount
    return () => {
      if (scroller) {
        scroller.destroy();
      }
    };
  }, [isMobile]); // Re-run when mobile state changes

  // ===================================================================
  // MAIN COMPONENT RENDER - RESPONSIVE LAYOUT
  // ===================================================================
  return (
    <div className={`scrolly-container ${isMobile ? 'mobile-overlay' : 'desktop'}`}>
      <div ref={figureRef} className={`sticky-figure ${isMobile ? 'mobile-background' : ''}`}>
        <div className="visual-container">
          {/* Render all visual components, positioned absolutely for smooth transitions */}
          {storySteps.map((step, index) => (
            <VisualWrapper 
              key={step.id}
              step={step}
              index={index}
              isActive={index === currentStep}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
      <div ref={scrollerRef} className={`scroller ${isMobile ? 'mobile-overlay-scroller' : ''}`}>
        {/* Introduction section */}
        <IntroSection isMobile={isMobile} />
        
        {/* Individual story steps - each triggers scrollama when in view */}
        {storySteps.map((step, index) => (
          <StoryStep 
            key={step.id} 
            step={step} 
            index={index} 
            isMobile={isMobile}
            dataStep={index}
          />
        ))}
        
        {/* Conclusion section */}
        <OutroSection isMobile={isMobile} />
      </div>
    </div>
  );
};

export default ScrollyStory;