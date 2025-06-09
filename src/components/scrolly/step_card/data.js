// Data configuration for StepCardScrolly component
// Based on the first 3 steps from the React app

export const cardSteps = [
  {
    id: 'cop30-intro',
    title: 'COP30 Introduction',
    content: 'Bringing Urban Health to COP30 - exploring how climate conferences work and the role of public health research.',
    description: 'Urban Health & Climate',
    icon: `<svg viewBox="0 0 400 300">
      <defs>
        <linearGradient id="introGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4A90E2" />
          <stop offset="100%" stop-color="#667eea" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="150" r="80" fill="url(#introGradient)" />
      <text x="200" y="160" text-anchor="middle" fill="white" font-size="24" font-weight="bold">COP30</text>
    </svg>`
  },
  {
    id: 'what-are-cops',
    title: 'What are COPs?',
    content: 'A \'Conference of the Parties\' (COP) refers to a meeting of countries who have signed international climate agreements.',
    description: 'Countries Meeting Together',
    icon: `<svg viewBox="0 0 400 300">
      <rect x="100" y="100" width="200" height="100" fill="#E8F4FD" stroke="#4A90E2" stroke-width="2" rx="8" />
      <text x="200" y="140" text-anchor="middle" fill="#4A90E2" font-size="16" font-weight="bold">Conference</text>
      <text x="200" y="160" text-anchor="middle" fill="#4A90E2" font-size="16" font-weight="bold">of the Parties</text>
    </svg>`
  },
  {
    id: 'cop30-brazil',
    title: 'COP30 in Brazil',
    content: 'The UN Framework Convention on Climate Change holds annual COPs. COP30 will take place in November 2025, hosted by Brazil in Belém.',
    description: 'Belém, Brazil - November 2025',
    icon: `<svg viewBox="0 0 400 300">
      <path d="M150 80 Q180 70 220 80 Q250 90 270 120 Q260 160 240 180 Q200 190 170 180 Q140 160 130 120 Q140 90 150 80" 
            fill="#228B22" stroke="#006400" stroke-width="2" />
      <circle cx="190" cy="120" r="8" fill="#FF4500" />
      <text x="190" y="105" text-anchor="middle" fill="white" font-size="8" font-weight="bold">Belém</text>
    </svg>`
  }
];

// Helper function to get all card step keys for iteration
export const getCardStepKeys = () => cardSteps.map(step => step.id);

// Helper function to get card step by id
export const getCardStep = (id) => cardSteps.find(step => step.id === id);
