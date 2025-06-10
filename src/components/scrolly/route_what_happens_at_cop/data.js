// Data for "What Happens at UNFCCC COPs?" continuous route component
// Based on the COP30 context document

export const copRouteData = [
  {
    step_name: "Pre-COPs",
    step_title: "Preparatory Sessions & Pre-COPs",
    icon: "./img/cop30/icon_ballot.png",
    location: "Pre-COP",
    coordinates: { top: 0, left: 0 }, // Not positioned on map
    description: "COP agendas are developed during preparatory meetings hosted by the COP presidency (host country) and convene official country representatives, content experts, and other actors over the year or two prior to each Conference. Pre-COPs are informal meetings that traditionally take place in the month or so before each COP to set the stage for negotiations."
  },
  {
    step_name: "Core Negotiations",
    step_title: "Core Negotiation", 
    icon: "./img/cop30/icon_handshake.png",
    location: "Blue Zone",
    coordinates: { top: 57, left: 64 }, // Upper-right area of Blue Zone
    description: "Delegates of the Parties participate in official sessions of the governing bodies, and in open and closed negotiating groups. They work to reach consensus on a range of climate issues. Occasionally, the Parties will agree to a new legally binding agreement (e.g., Kyoto Protocol, Paris Agreement), which must then be ratified by individual governments. More often, the Parties agree to some form of public declaration."
  },
  {
    step_name: "High-level COP",
    step_title: "High-level COP",
    icon: "./img/cop30/icon_microphone.png",
    location: "Blue Zone",
    coordinates: { top: 57, left: 83 }, // Lower area of Blue Zone, slightly left
    description: "This public stage, open to delegates and observers, includes speeches by heads of state, announcements of coalitions, public denunciations, or calls to action. Observers can include intergovernmental & nongovernmental organizations, United Nations and related agencies, as well as media representatives. This is where major climate commitments and declarations are typically announced."
  },
  {
    step_name: "Third COP",
    step_title: "Third COP (Side Events & Civil Society)",
    icon: "./img/cop30/icon_megaphone.png",
    location: "Green Zone",
    coordinates: { top: 57, left: 36 }, // Center-left area of Green Zone circle
    description: "Additional activities include side events, pavilions, panel talks, presentations, and protests, where participants can include scientists, NGOs, private sector representatives, and civil society groups. These activities focus on collaboration, advocacy, and knowledge sharing beyond the formal negotiations."
  }
];

// Export individual steps for potential use elsewhere
export const prepSessions = copRouteData[0];
export const coreNegotiation = copRouteData[1]; 
export const highLevelCop = copRouteData[2];
export const sideEvents = copRouteData[3];
 