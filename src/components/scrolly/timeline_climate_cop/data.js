// Data for "Timeline of COP and Health" component
// Shows the evolution of health integration at COP conferences

export const timelineData = [{
  year: "2017",
  step_name: "COP23",
  step_title: "2017 COP23",
  flag_image: "./img/cop30/japan_flag.png",
  flagAlt: "Fiji flag with blue background and coat of arms, representing COP23 hosted by Fiji",
  location: "FIJI",
  description: "DDDDD DDDDDDD DDDDDDDDDDDDDDDDD DDDDDD."
}, {
  year: "2021",
  step_name: "COP26",
  step_title: "2021 COP26",
  flag_image: "./img/cop30/france_flag.png",
  flagAlt: "United Kingdom flag with red, white and blue cross pattern, representing COP26 hosted in Glasgow, Scotland",
  location: "GLASGOW",
  description: "The '<a href=\"https://www.who.int/publications/i/item/9789240036727\" target=\"_blank\">COP26 Special Report on Climate Change and Health</a>' was developed in the lead up to the 2021 COP26 in Glasgow, where WHO also hosted the first Health Pavilion. "
}];

// Metadata for the timeline component
export const timelineMetadata = {
  title: "Timeline of COP and Climate",
  description: "Key climate agreements at COP conferences",
  totalSteps: timelineData.length
};

// Export individual steps for potential use elsewhere
export const cop3 = timelineData[0];
export const cop21 = timelineData[1]; 
