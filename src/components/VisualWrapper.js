import { visualComponents } from './visuals';

// ===================================================================
// VISUAL WRAPPER COMPONENT
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
// DEFAULT VISUAL FALLBACK
// ===================================================================
// Displays when no specific visual component is found
const DefaultVisual = () => (
  <svg viewBox="0 0 400 300" className="visual-svg">
    <rect x="150" y="125" width="100" height="50" fill="#E0E0E0" rx="5" />
    <text x="200" y="155" textAnchor="middle" fill="#666" fontSize="16">Visual</text>
  </svg>
);

export default VisualWrapper;
