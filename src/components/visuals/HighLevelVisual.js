const HighLevelVisual = () => (
  <svg viewBox="0 0 400 300" className="visual-svg">
    <rect x="120" y="130" width="160" height="60" fill="#4A90E2" rx="5" />
    <circle cx="200" cy="110" r="20" fill="#FFD700" />
    <polygon points="190,105 200,90 210,105" fill="#333" />
    <text x="200" y="165" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Podium</text>
    <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16">High-Level Speeches</text>
  </svg>
);

export default HighLevelVisual;
