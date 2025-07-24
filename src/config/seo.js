// SEO Configuration for COP30 Health Guide
// Dynamic multilingual SEO optimization

export const seoConfig = {
  baseUrl: 'https://salurbal-climate.github.io/cop_2025_scrolly',
  
  // Metadata by language (optimized for each audience)
  metadata: {
    en: {
      title: 'Health at COP30: Guide for Public Health Researchers | SALURBAL Climate',
      shortTitle: 'Health at COP30 Guide',
      description: 'Learn how public health researchers can engage with COP30 climate conference in Belém, Brazil (Nov 2025). Practical guide for climate-health policy integration from SALURBAL Climate.',
      keywords: [
        'COP30 health', 'public health researchers', 'climate health policy', 
        'Belém Brazil 2025', 'UNFCCC health engagement', 'SALURBAL Climate',
        'urban health climate change', 'health co-benefits climate action',
        'WHO climate health', 'health pavilion COP30', 'NDCs health integration'
      ],
      ogTitle: 'Health at COP30: Essential Guide for Public Health Researchers',
      ogDescription: 'Learn how to engage with COP30 climate conference in Brazil. Step-by-step guide for health researchers to influence climate policy.',
      twitterTitle: 'COP30 Health Guide: How Public Health Researchers Can Engage',
      twitterDescription: 'Comprehensive guide for health researchers preparing for COP30 in Brazil. Learn UNFCCC processes and advocacy strategies.'
    },
    
    es: {
      title: 'Salud en COP30: Guía para Investigadores de Salud Pública | SALURBAL Climate',
      shortTitle: 'Guía Salud COP30',
      description: 'Aprende cómo los investigadores de salud pública pueden participar en la conferencia climática COP30 en Belém, Brasil (Nov 2025). Guía práctica de SALURBAL Climate.',
      keywords: [
        'salud COP30', 'investigadores salud pública', 'política salud climática',
        'Belém Brasil 2025', 'participación salud CMNUCC', 'SALURBAL Climate',
        'salud urbana cambio climático', 'cobeneficios salud acción climática',
        'OMS salud climática', 'pabellón salud COP30', 'integración salud NDCs'
      ],
      ogTitle: 'Salud en COP30: Guía Esencial para Investigadores de Salud Pública',
      ogDescription: 'Aprende cómo participar en la conferencia climática COP30 en Brasil. Guía paso a paso para investigadores de salud.',
      twitterTitle: 'Guía Salud COP30: Cómo Pueden Participar los Investigadores de Salud Pública',
      twitterDescription: 'Guía integral para investigadores de salud preparándose para COP30 en Brasil. Aprende procesos CMNUCC y estrategias.'
    },
    
    pt: {
      title: 'Saúde na COP30: Guia para Pesquisadores de Saúde Pública | SALURBAL Climate',
      shortTitle: 'Guia Saúde COP30',
      description: 'Aprenda como pesquisadores de saúde pública podem se engajar com a conferência climática COP30 em Belém, Brasil (Nov 2025). Guia prático do SALURBAL Climate.',
      keywords: [
        'saúde COP30', 'pesquisadores saúde pública', 'política saúde climática',
        'Belém Brasil 2025', 'engajamento saúde UNFCCC', 'SALURBAL Climate',
        'saúde urbana mudança climática', 'cobeneficios saúde ação climática',
        'OMS saúde climática', 'pavilhão saúde COP30', 'integração saúde NDCs'
      ],
      ogTitle: 'Saúde na COP30: Guia Essencial para Pesquisadores de Saúde Pública',
      ogDescription: 'Aprenda como se engajar com a conferência climática COP30 no Brasil. Guia passo a passo para pesquisadores de saúde.',
      twitterTitle: 'Guia Saúde COP30: Como Pesquisadores de Saúde Pública Podem Se Engajar',
      twitterDescription: 'Guia abrangente para pesquisadores de saúde se preparando para COP30 no Brasil. Aprenda processos UNFCCC e estratégias.'
    }
  },

  // Social media handles
  social: {
    twitter: '@lacurbanhealth',
    facebook: 'LACUrbanHealth',
    instagram: 'salurbalclimate'
  },

  // Key images for SEO
  images: {
    hero: '/img/cop30/hero_image.jpg',
    logo: '/img/cop30/EN_Logo_SALURBAL-Climate_png.png',
    ogDefault: '/img/cop30/hero_image.jpg'
  }
}

// Helper function to get metadata by language
export function getMetadata(lang = 'en') {
  return seoConfig.metadata[lang] || seoConfig.metadata.en;
}

// Helper function to generate hreflang URLs
export function getHreflangUrls() {
  return {
    en: `${seoConfig.baseUrl}/?lang=en`,
    es: `${seoConfig.baseUrl}/?lang=es`,
    pt: `${seoConfig.baseUrl}/?lang=pt`,
    'x-default': seoConfig.baseUrl
  };
}
