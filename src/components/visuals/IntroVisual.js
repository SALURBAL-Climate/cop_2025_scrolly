const IntroVisual = () => (
  <svg viewBox="0 0 400 300" className="visual-svg">
    <defs>
      <linearGradient id="introGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4A90E2" />
        <stop offset="100%" stopColor="#667eea" />
      </linearGradient>
    </defs>
    <circle cx="200" cy="150" r="80" fill="url(#introGradient)" />
    <text x="200" y="160" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">COP30</text>
    <text x="200" y="260" textAnchor="middle" fill="#333" fontSize="16">Urban Health & Climate</text>
  </svg>
);

export default IntroVisual;
