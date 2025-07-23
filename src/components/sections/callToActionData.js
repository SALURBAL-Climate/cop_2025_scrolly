// Multilingual content for call to action items
export const actionItemsContent = {
  en: {
    items: [
      {
        iconAlt: "Research Products Icon",
        description: "<b>Developing user-friendly research products</b> to support advocacy surrounding the health impacts of climate change and the impacts of mitigation and adaptation action.",
        alignment: "left"
      },
      {
        iconAlt: "COP Delegates Icon", 
        description: "<b>Connecting with COP delegates and observers</b> to provide input and expertise throughout COP preparatory sessions.",
        alignment: "right"
      },
      {
        iconAlt: "Health Advocacy Icon",
        description: "<b>Advocating for health inclusion</b> for the inclusion of health impacts and health arguments within NDCs and other climate policy and planning documents.",
        alignment: "left"
      },
      {
        iconAlt: "Green Zone Activities Icon",
        description: "<b>Hosting and participating in health-focused green zone activities</b> (pavilions, panels, presentations).",
        alignment: "right"
      },
      {
        iconAlt: "Municipal Partnerships Icon",
        description: "<b>Forming partnerships with municipal governments</b> and urban practitioners. Local governments worldwide are leading climate action through mitigation and adaptation measures. Many are also leveraging the health co-benefits of these efforts. Researchers can support them by supplying and discussing localized data and evidence.",
        alignment: "left"
      }
    ]
  },
  es: {
    items: [
      {
        iconAlt: "Icono de Productos de Investigación",
        description: "<b>Desarrollar productos de investigación de fácil acceso</b> para promover la divulgación de los efectos del cambio climático sobre la salud, y los impactos de las medidas de mitigación y adaptación.",
        alignment: "left"
      },
      {
        iconAlt: "Icono de Delegados de la COP", 
        description: "<b>Conectar con delegados y observadores de la COP</b> para que aporten su experiencia y conocimientos a lo largo de las sesiones preparatorias.",
        alignment: "right"
      },
      {
        iconAlt: "Icono de Defensa de la Salud",
        description: "<b>Abogar por la inclusión de los efectos sobre la salud</b> en las NDC y otros documentos de política pública y planificación climática.",
        alignment: "left"
      },
      {
        iconAlt: "Icono de Actividades de Zona Verde",
        description: "<b>Coordinar y participar en actividades centradas en la salud de la zona verde</b> (pabellones, paneles, presentaciones).",
        alignment: "right"
      },
      {
        iconAlt: "Icono de Alianzas Municipales",
        description: "<b>Formar alianzas con gobiernos municipales y profesionales.</b> Los gobiernos locales de todo el mundo están liderando la acción climática a través de medidas de mitigación y adaptación. Muchos también están aprovechando los beneficios para la salud de estos esfuerzos. Los investigadores pueden apoyar aportando datos y evidencia local.",
        alignment: "left"
      }
    ]
  },
  pt: {
    items: [
      {
        iconAlt: "Ícone de Produtos de Pesquisa",
        description: "<b>Desenvolver produtos de pesquisa acessíveis</b> para apoiar a defesa dos impactos das mudanças climáticas sobre a saúde e dos efeitos das ações de mitigação e adaptação.",
        alignment: "left"
      },
      {
        iconAlt: "Ícone de Delegados da COP", 
        description: "<b>Estabelecer conexões com delegados e observadores da COP</b> para fornecer informações e conhecimentos especializados durante as sessões preparatórias da COP.",
        alignment: "right"
      },
      {
        iconAlt: "Ícone de Defesa da Saúde",
        description: "<b>Defender a inclusão dos impactos e argumentos relacionados à saúde</b> nas NDCs e em outros documentos de planejamento e política climática.",
        alignment: "left"
      },
      {
        iconAlt: "Ícone de Atividades da Zona Verde",
        description: "<b>Organização e participação em atividades da zona verde voltadas para a saúde</b> (pavilhões, painéis e apresentações).",
        alignment: "right"
      },
      {
        iconAlt: "Ícone de Parcerias Municipais",
        description: "<b>Formar parcerias com governos municipais e profissionais urbanos.</b> Governos locais em todo o mundo lideram ações climáticas por meio de medidas de mitigação e adaptação. Muitos também aproveitam os co-benefícios desses esforços para a saúde. Os pesquisadores podem apoiá-los fornecendo e discutindo dados e evidências localizadas.",
        alignment: "left"
      }
    ]
  }
};

// Static data that doesn't change with language
export const actionItemsStaticData = [
  { iconSrc: "./img/cop30/icon_action_pen.png" },
  { iconSrc: "./img/cop30/icon_action_talk.png" },
  { iconSrc: "./img/cop30/icon_action_microphone.png" },
  { iconSrc: "./img/cop30/icon_action_hand.png" },
  { iconSrc: "./img/cop30/icon_action_point_marker.png" }
];

// Helper function to get combined data for a specific language
export function getActionItems(language = 'en') {
  const content = actionItemsContent[language] || actionItemsContent.en;
  return content.items.map((item, index) => ({
    ...item,
    ...actionItemsStaticData[index]
  }));
}

// Legacy export for backward compatibility (defaults to English)
export const actionItems = getActionItems('en');
