// SALURBAL Brand Colors
// Centralized color definitions for consistent theming across the application

export const brandColors = {
  // Primary brand colors
  hex_primary: '#2F8FBC',
  hex_secondary: '#00BB9E',
  
  // Status colors
  hex_error: '#BC3B2F',
  hex_warning: '#BC812F',
  
  // Additional theme colors
  hex_teal: '#00BB9E',
  hex_purple: '#8C198C',
  hex_green: '#305145',
  hex_background: '#d8e6ed',
  hex_bright_green: '#4CAF50',
  hex_bright_orange: '#FF9800'
};

// Color aliases for semantic usage
export const colors = {
  primary: brandColors.hex_primary,
  secondary: brandColors.hex_secondary,
  error: brandColors.hex_error,
  warning: brandColors.hex_warning,
  teal: brandColors.hex_teal,
  purple: brandColors.hex_purple,
  green: brandColors.hex_green,
  background: brandColors.hex_background,
  brightGreen: brandColors.hex_bright_green,
  brightOrange: brandColors.hex_bright_orange
};

// Export individual colors for backward compatibility
export const {
  hex_primary,
  hex_secondary,
  hex_error,
  hex_warning,
  hex_teal,
  hex_purple,
  hex_green,
  hex_background,
  hex_bright_green,
  hex_bright_orange
} = brandColors;
