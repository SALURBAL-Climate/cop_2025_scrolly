const BrazilVisual = () => (
  <svg viewBox="0 0 400 300" className="visual-svg">
    <path d="M150 80 Q180 70 220 80 Q250 90 270 120 Q260 160 240 180 Q200 190 170 180 Q140 160 130 120 Q140 90 150 80" 
          fill="#228B22" stroke="#006400" strokeWidth="2" />
    <circle cx="190" cy="120" r="8" fill="#FF4500" />
    <text x="190" y="105" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Belém</text>
    <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16" fontWeight="bold">Belém, Brazil</text>
    <text x="200" y="270" textAnchor="middle" fill="#666" fontSize="12">November 2025</text>
  </svg>
);

export default BrazilVisual;
