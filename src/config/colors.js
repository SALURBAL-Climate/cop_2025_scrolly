// Primary color palette
export const colors = {
  primary: '#2F8FBC',
  secondary: '#00BB9E',
  error: '#BC3B2F',
  warning: '#BC812F',
  teal: '#00BB9E',
  purple: '#8C198C',
  green: '#305145',
  background: '#d8e6ed'
};

// Semantic color mapping for SALURBAL levels
export const levelColors = {
  l1: colors.error,    // Cities (red)
  l2: colors.primary,  // Sub-cities (blue)
  l25: colors.purple,  // Neighborhoods L2.5 (purple)
  l3: colors.teal,     // Neighborhoods L3 (teal)
  ux: colors.warning,  // Urban extent (orange)
  metro: colors.purple, // Metropolitan (purple)
  unurban: colors.teal  // Non-urban (teal)
};
