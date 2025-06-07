// ===================================================================
// STORY STEP COMPONENT
// ===================================================================
// Individual content sections that trigger scrollama events
const StoryStep = ({ step, index }) => (
  <div className="step" data-step={index}>
    <div className="step-content">
      <h2 className="text-4xl font-bold mb-6 text-gray-800 leading-tight">{step.title}</h2>
      <p className="text-lg leading-relaxed text-gray-600">{step.content}</p>
    </div>
  </div>
);

export default StoryStep;
