const ZonesVisual = () => (
  <svg viewBox="0 0 400 300" className="visual-svg">
    <rect x="80" y="100" width="130" height="80" fill="#4A90E2" rx="10" />
    <rect x="230" y="100" width="130" height="80" fill="#96CEB4" rx="10" />
    <text x="145" y="135" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Blue Zone</text>
    <text x="145" y="155" textAnchor="middle" fill="white" fontSize="10">Restricted Access</text>
    <text x="295" y="135" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Green Zone</text>
    <text x="295" y="155" textAnchor="middle" fill="white" fontSize="10">Public Access</text>
    <text x="200" y="250" textAnchor="middle" fill="#333" fontSize="16">Access Zones</text>
  </svg>
);

export default ZonesVisual;
