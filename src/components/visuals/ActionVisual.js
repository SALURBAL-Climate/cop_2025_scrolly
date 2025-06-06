const ActionVisual = () => (
  <svg viewBox="0 0 400 300" className="visual-svg">
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#4A90E2" />
      </marker>
    </defs>
    <path d="M100 150 Q200 100 300 150" stroke="#4A90E2" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" />
    <circle cx="100" cy="150" r="8" fill="#96CEB4" />
    <circle cx="300" cy="150" r="8" fill="#FF7675" />
    <text x="100" y="175" textAnchor="middle" fill="#666" fontSize="10">You</text>
    <text x="300" y="175" textAnchor="middle" fill="#666" fontSize="10">COP30</text>
    <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16">Your Path Forward</text>
  </svg>
);

export default ActionVisual;
