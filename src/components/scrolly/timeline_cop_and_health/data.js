// Data for "Timeline of COP and Health" component
// Shows the evolution of health integration at COP conferences

export const timelineData = [{
  year: "1997",
  step_name: "COP3",
  step_title: "COP3: Setting the stage for global climate action",
  step_title_mobile: "1997 COP3",
  flag_image: "./img/cop30/japan_flag.png",
  flagAlt: "Japan flag with white background and red circle, representing COP3 hosted in Kyoto, Japan",
  location: "KYOTO",
  description: "Setting the stage for global climate action: The <a href=\"https://unfccc.int/kyoto_protocol\" target=\"_blank\">Kyoto Protocol</a> was negotiated during COP3 and entered into force during COP11 in 2005, setting mitigation targets for reducing greenhouse gas (GHG) emissions and mandating regular progress reviews."
}, {
  year: "2015",
  step_name: "COP21",
  step_title: "COP21: Expanding global climate commitments",
  step_title_mobile: "2015 COP21",
  flag_image: "./img/cop30/france_flag.png",
  flagAlt: "France flag with blue, white and red vertical stripes, representing COP21 hosted in Paris, France",
  location: "PARIS",
  description: "Expanding global climate commitments: COP21 resulted in the landmark <a href=\"https://unfccc.int/process-and-meetings/the-paris-agreement/the-paris-agreement\" target=\"_blank\">Paris Agreement</a> (195 parties), which replaced the Kyoto Protocol and seeks to limit global warming to below 2 degrees Celsius."
}, {
  year: "2015",
  step_name: "2030 Agenda for Sustainable Development",
  step_title: "UN Sustainable Development Agenda",
  step_title_mobile: "2015: UN 2030 Agenda for Sustainable Development Agenda",
  flag_image: "./img/cop30/icon_sdg.png",
  flagAlt: "tbd",
  location: "USA",
  description: "The <a href=\"https://sdgs.un.org/\" target=\"_blank\">2030 Agenda for Sustainable Development</a> was adopted by UN Member States in 2015. Agenda 2030 established the UN's 17 Sustainable Development Goals (SDGs) for achieving peace and prosperity for people and the planet. Many of the SDGs address the shared challenges connecting climate change and health across the globe, including:<br><ul><li>SDG 3: Good health and well-being</li><li>SDG 11: Sustainable cities and communities</li><li>SDG 13: Climate action</li></ul>"
}, {
  year: "2017",
  step_name: "COP23",
  step_title: "COP23",
  step_title_mobile: "2017 COP23",
  flag_image: "./img/cop30/timeline_1.png",
  flagAlt: "Fiji flag with blue background and coat of arms, representing COP23 hosted by Fiji",
  location: "FIJI",
  description: "At the 2017 COP23 hosted by Fiji and held in Germany, WHO launched a <a href=\"https://www.who.int/publications/i/item/9789290618669\" target=\"_blank\">Special Initiative on Climate Change and Health in Small Island Developing States (SIDS)</a>."
}, {
  year: "2021",
  step_name: "COP26",
  step_title: "COP26",
  step_title_mobile: "2021 COP26",
  flag_image: "./img/cop30/timeline_2.png",
  flagAlt: "United Kingdom flag with red, white and blue cross pattern, representing COP26 hosted in Glasgow, Scotland",
  location: "GLASGOW",
  description: "The '<a href=\"https://www.who.int/publications/i/item/9789240036727\" target=\"_blank\">COP26 Special Report on Climate Change and Health</a>' was developed in the lead up to the 2021 COP26 in Glasgow, where WHO also hosted the first Health Pavilion. "
}, {
  year: "2021",
  step_name: "COP26",
  step_title: "COP26",
  step_title_mobile: "2021 COP26",
  flag_image: "./img/cop30/timeline_2.png",
  flagAlt: "United Kingdom flag with red, white and blue cross pattern, representing COP26 hosted in Glasgow, Scotland",
  location: "GLASGOW",
  description: "The '<a href=\"https://www.who.int/publications/i/item/9789240036727\" target=\"_blank\">COP26 Special Report on Climate Change and Health</a>' was developed in the lead up to the 2021 COP26 in Glasgow, where WHO also hosted the first Health Pavilion. "
}, {
  year: "2023",
  step_name: "COP28",
  step_title: "COP28",
  step_title_mobile: "2023 COP28",
  flag_image: "./img/cop30/timeline_3.png",
  flagAlt: "United Arab Emirates flag with red, green, white and black horizontal stripes, representing COP28 hosted in Dubai",
  location: "DUBAI",
  description: "The 2023 COP28 in Dubai also featured a <a href=\"https://www.who.int/news-room/events/detail/2023/11/30/default-calendar/cop28-health-pavilion\" target=\"_blank\">Health Pavilion</a>, hosted by WHO and the Wellcome Trust, as well as the first-ever Health Day, which culminated in the endorsement of the <a href=\"https://www.who.int/publications/m/item/cop28-uae-declaration-on-climate-and-health\" target=\"_blank\">Declaration on Climate and Health</a>. COP28 elevated the role of health in the climate change agenda and secured a global commitment to addressing climate-related health impacts."
}, {
  year: "2024",
  step_name: "COP29",
  step_title: "COP29",
  step_title_mobile: "2024 COP29",
  flag_image: "./img/cop30/timeline_4.png",
  flagAlt: "Azerbaijan flag with blue, red and green horizontal stripes and white crescent moon and star, representing COP29 hosted in Baku",
  location: "BAKU",
  description: "At the 2024 COP29 in Baku, delegates committed to the <a href=\"https://www.who.int/news/item/18-11-2024-baku-cop29-advances-health-climate-commitments-with-new-coalition\" target=\"_blank\">Baku COP Presidencies Continuity Coalition for Climate and Health</a>, securing a permanent space for health within future COP agendas. "
},
{
  year: "2025",
  step_name: "COP30",
  step_title: "COP30",
  step_title_mobile: "2025 COP30",
  flag_image: "./img/cop30/timeline_5.png",
  flagAlt: "Brazil flag with green background, yellow diamond, and blue circle with stars, representing COP30 hosted in Belém, Brazil",
  location: "BRAZIL",
  description: "The COP presidency rotates each year on a regional basis. COP30 is scheduled to take place in Latin America, in Belém, Brazil, from November 10-21, 2025. Health-focused plans for COP30 are constantly evolving and include the presentation of the COP 30 Climate & Health Action Plan, led by Brazil, which aims to strengthen health system resilience to climate change impacts and support countries in implementing equitable adaptation strategies." // For an updated list of health-related activities and events, see: [link]
}
];

// Metadata for the timeline component
export const timelineMetadata = {
  title: "Timeline of COP and Health",
  description: "Evolution of health integration at COP conferences",
  totalSteps: timelineData.length
};
