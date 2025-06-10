// Data for "Timeline of COP and Health" component
// Shows the evolution of health integration at COP conferences

export const timelineData = [
  {
    step_name: "COP23",
    step_title: "2017 COP23",
    flag_image: "./img/cop30/timeline_1.png",
    location: "FIJI",
    description: "At the 2017 COP23 hosted by Fiji and held in Germany, WHO launched a Special Initiative on Climate Change and Health in Small Island Developing States (SIDS)."
  },
  {
    step_name: "COP26",
    step_title: "2021 COP26", 
    flag_image: "./img/cop30/timeline_2.png",
    location: "GLASGOW",
    description: "The 'COP26 Special Report on Climate Change and Health' was developed in the lead up to the 2021 COP26 in Glasgow, where WHO also hosted the first Health Pavilion. "
  },
  {
    step_name: "COP28",
    step_title: "2023 COP28",
    flag_image: "./img/cop30/timeline_3.png",
    location: "DUBAI",
    description: "The 2023 COP28 in Dubai also featured a Health Pavilion, hosted by WHO and the Wellcome Trust, as well as the first-ever Health Day, which culminated in the endorsement of the Declaration on Climate and Health. COP28 elevated the role of health in the climate change agenda and secured a global commitment to addressing climate-related health impacts."
  },
  {
    step_name: "COP29",
    step_title: "2024 COP29",
    flag_image: "./img/cop30/timeline_4.png",
    location: "BAKU",
    description: "The 2023 COP28 in Dubai also featured a Health Pavilion, hosted by WHO and the Wellcome Trust, as well as the first-ever Health Day, which culminated in the endorsement of the Declaration on Climate and Health. COP28 elevated the role of health in the climate change agenda and secured a global commitment to addressing climate-related health impacts. "
  },
  {
    step_name: "COP30",
    step_title: "2025 COP30",
    flag_image: "./img/cop30/timeline_5.png",
    location: "BRAZIL",
    description: "The COP presidency rotates each year on a regional basis. COP30 is scheduled to take place in Latin America, in Belém, Brazil, from November 10-21, 2025. Health-focused plans for COP30 are constantly evolving and include the presentation of the COP 30 Climate & Health Action Plan, led by Brazil, which aims to strengthen health system resilience to climate change impacts and support countries in implementing equitable adaptation strategies. For an updated list of health-related activities and events, see: [link]"
  }
];

// Metadata for the timeline component
export const timelineMetadata = {
  title: "Timeline of COP and Health",
  description: "Evolution of health integration at COP conferences",
  totalSteps: timelineData.length
};

// Export individual steps for potential use elsewhere
export const cop23 = timelineData[0];
export const cop26 = timelineData[1]; 
export const cop28 = timelineData[2];
export const cop29 = timelineData[3];
export const cop30 = timelineData[4];
