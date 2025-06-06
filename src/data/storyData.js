// Story content and configuration for COP30 Scrolly Story

export const storySteps = [
  {
    id: 0,
    title: "COP30 Introduction",
    content: "Bringing Urban Health to COP30 - exploring how climate conferences work and the role of public health research.",
    visual: "intro"
  },
  {
    id: 1,
    title: "What are COPs?",
    content: "A 'Conference of the Parties' (COP) refers to a meeting of countries who have signed international climate agreements.",
    visual: "cops"
  },
  {
    id: 2,
    title: "COP30 in Brazil",
    content: "The UN Framework Convention on Climate Change holds annual COPs. COP30 will take place in November 2025, hosted by Brazil in Belém.",
    visual: "brazil"
  },
  {
    id: 3,
    title: "Preparation Process",
    content: "COP agendas are developed during preparatory meetings hosted by the presidency over 1-2 years prior to each Conference.",
    visual: "preparation"
  },
  {
    id: 4,
    title: "Negotiations",
    content: "Delegates participate in official sessions and open/closed negotiating meetings. This can result in binding agreements.",
    visual: "negotiations"
  },
  {
    id: 5,
    title: "High-Level Events",
    content: "Public stage with speeches by heads of state, announcements, and calls to action.",
    visual: "highlevel"
  },
  {
    id: 6,
    title: "Third COP Activities",
    content: "Side events, pavilions, panel talks, presentations, and protests. Scientists, NGOs, private sector, and activists participate.",
    visual: "activities"
  },
  {
    id: 7,
    title: "Blue vs Green Zones",
    content: "Blue zone: Restricted to accredited delegates only. Green zone: Open to public, managed by host country.",
    visual: "zones"
  },
  {
    id: 8,
    title: "Health Integration",
    content: "Since 2014, health has gained prominence in climate negotiations with dedicated health pavilions and declarations.",
    visual: "health"
  },
  {
    id: 9,
    title: "COP28 Breakthrough",
    content: "COP28 featured the first Health Day and Declaration on Climate and Health, elevating health in the climate agenda.",
    visual: "cop28"
  },
  {
    id: 10,
    title: "COP29 Continuity",
    content: "COP29 secured permanent space for health in future COP agendas through the Baku Continuity Coalition for Climate and Health.",
    visual: "cop29"
  },
  {
    id: 11,
    title: "Brazil's Leadership",
    content: "COP30 in Belém will present the Climate & Health Action Plan to strengthen health system resilience.",
    visual: "leadership"
  },
  {
    id: 12,
    title: "National Commitments",
    content: "90% of national climate plans include health considerations, but only 1 in 10 quantify health benefits.",
    visual: "commitments"
  },
  {
    id: 13,
    title: "Your Path Forward",
    content: "Public health professionals have structured pathways to influence COP30. Your expertise can drive climate policy.",
    visual: "action"
  }
];

export const scrollamaConfig = {
  step: '.step',
  offset: 0.5,
  debug: false,
};

export const animationConfig = {
  enter: {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    ease: "power2.out"
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    duration: 0.4,
  }
};
