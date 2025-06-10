// Data for "What Happens at UNFCCC COPs?" continuous route component
// Based on the COP30 context document

export const copRouteData = [
  {
    name: "Preparatory Sessions & Pre-COPs",
    description: "COP agendas are developed during preparatory meetings hosted by the COP presidency (host country) and convene official country representatives, content experts, and other actors over the year or two prior to each Conference. Pre-COPs are informal meetings that traditionally take place in the month or so before each COP to set the stage for negotiations."
  },
  {
    name: "Core Negotiation", 
    description: "Delegates of the Parties participate in official sessions of the governing bodies, and in open and closed negotiating meetings. Delegates can include government officials from relevant ministries; experts and scientists; and civil society organization representatives. Sometimes, this negotiation results in a binding agreement (e.g., Kyoto Protocol, Paris Agreement), which must then be ratified by individual governments. More often, the Parties agree to some form of public declaration."
  },
  {
    name: "High-level COP",
    description: "This public stage, open to delegates and observers, includes speeches by heads of state, announcements of coalitions, public denunciations, or calls to action. Observers can include intergovernmental & nongovernmental organizations, United Nations and related agencies, as well as media representatives. This is where major climate commitments and declarations are typically announced."
  },
  {
    name: "Third COP",
    description: "Additional activities include side events, pavilions, panel talks, presentations, and protests, where participants can include scientists, NGOs, private sector representatives, and activists. This parallel track allows for broader participation and engagement beyond the formal negotiations, creating space for innovation, advocacy, and knowledge sharing."
  }
];

// Export individual steps for potential use elsewhere
export const prepSessions = copRouteData[0];
export const coreNegotiation = copRouteData[1]; 
export const highLevelCop = copRouteData[2];
export const thirdCop = copRouteData[3];
 