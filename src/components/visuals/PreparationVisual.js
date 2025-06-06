const PreparationVisual = () => (
  <svg viewBox="0 0 400 300" className="visual-svg">
    <line x1="80" y1="150" x2="320" y2="150" stroke="#4A90E2" strokeWidth="4" />
    <circle cx="120" cy="150" r="12" fill="#96CEB4" />
    <circle cx="200" cy="150" r="12" fill="#FFEAA7" />
    <circle cx="280" cy="150" r="12" fill="#FF7675" />
    <text x="120" y="180" textAnchor="middle" fill="#666" fontSize="10">Year 1</text>
    <text x="200" y="180" textAnchor="middle" fill="#666" fontSize="10">Year 2</text>
    <text x="280" y="180" textAnchor="middle" fill="#666" fontSize="10">COP30</text>
    <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16">Preparatory Sessions</text>
  </svg>
);

export default PreparationVisual;
