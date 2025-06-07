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
      <div ref={figureRef} className="sticky-figure">
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
      </div>
      <div ref={scrollerRef} className="scroller">
        {/* Introduction section */}
        <IntroSection />
        
        {/* Individual story steps - each triggers scrollama when in view */}
        {storySteps.map((step, index) => (
          <StoryStep key={step.id} step={step} index={index} />
        ))}
        
        {/* Conclusion section */}
        <OutroSection />
      </div>
    </div>
  );
};

export default ScrollyStory;