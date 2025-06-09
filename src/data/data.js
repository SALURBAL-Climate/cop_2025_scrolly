// Data source configurations for Step3Scrolly component
// Contains all geographic data sources and their metadata

export const dataSources = {
  // São Paulo primary data sources
  municipio_centroid: {
    url: './data/sao_paolo_municipio_centroid.json',
    layer: 'geog',
    code: 'salid2',
  },
  municipio: {
    url: './data/sao_paolo_municipio.json',
    layer: 'geog',
    code: 'salid2',
  },
  metro: {
    url: './data/sao_paolo_metro.json',
    layer: 'geog',
    code: 'salid2',
  },
  l1ux: {
    url: './data/sao_paolo_l1ux.json',
    layer: 'geog',
    code: 'salid1',
  },
  l1ad: {
    url: './data/sao_paolo_l1ad.json',
    layer: 'geog',
    code: 'salid1',
  },
  l2: {
    url: './data/sao_paolo_l2.json',
    layer: 'geog',
    code: 'salid2',
  },

  // São Paulo additional hierarchy levels (for Step4Scrolly)
  l3: {
    url: './data/sao_paolo_l3.json',
    layer: 'geog',
    code: 'salid2',
  },
  l25: {
    url: './data/sao_paolo_l25.json',
    layer: 'geog',
    code: 'salid2',
  },
  
  // São Paulo extended levels (for Step4Scrolly)
  ex_l3: {
    url: './data/sao_paolo_ex_l3.json',
    layer: 'geog',
    code: 'salid2',
  },
  ex_l25: {
    url: './data/sao_paolo_ex_l25.json',
    layer: 'geog',
    code: 'salid2',
  },
  ex_l2: {
    url: './data/sao_paolo_ex_l2.json',
    layer: 'geog',
    code: 'salid2',
  },

  // Monterrey (Case 1) data sources
  monterrey_l1ux: {
    url: './data/monterrey_l1ux.json',
    layer: 'geog',
    code: 'salid1',
  },
  monterrey_l1ad: {
    url: './data/monterrey_l1ad.json',
    layer: 'geog',
    code: 'salid1',
  },
  monterrey_unbuilt: {
    url: './data/monterrey_unbuilt.json',
    layer: 'geog',
    code: 'salid1',
  },
  monterrey_l2: {
    url: './data/monterrey_l2.json',
    layer: 'geog',
    code: 'salid1',
  },

  // Rio Cuarto (Case 2) data sources
  rio_cuarto_l1ad: {
    url: './data/rio_cuarto_l1ad.json',
    layer: 'geog',
    code: 'salid1',
  },
  rio_cuarto_l1ux: {
    url: './data/rio_cuarto_l1ux.json',
    layer: 'geog',
    code: 'salid1',
  },
  rio_cuarto_l2: {
    url: './data/rio_cuarto_l2.json',
    layer: 'geog',
    code: 'salid1',
  },
};

// Helper function to get all data source keys for iteration
export const getDataSourceKeys = () => Object.keys(dataSources);

// Helper function to get data source by key
export const getDataSource = (key) => dataSources[key];

// Grouped data sources for easier organization
export const dataGroups = {
  saoPaulo: [
    'municipio_centroid',
    'municipio', 
    'metro',
    'l1ux',
    'l1ad',
    'l2'
  ],
  // Step4Scrolly specific data sources
  saoPauloStep4: [
    'municipio_centroid',
    'municipio',
    'l3',
    'l25', 
    'l2',
    'l1ux',
    'l1ad',
    'ex_l3',
    'ex_l25',
    'ex_l2'
  ],
  monterrey: [
    'monterrey_l1ux',
    'monterrey_l1ad', 
    'monterrey_unbuilt',
    'monterrey_l2'
  ],
  rioCuarto: [
    'rio_cuarto_l1ad',
    'rio_cuarto_l1ux',
    'rio_cuarto_l2'
  ]
};

// Step4Scrolly specific mapping for easier data access
export const step4DataMapping = {
  municipio: 'municipio_centroid',
  municipio_boundaries: 'municipio',
  l3: 'l3',
  l25: 'l25',
  l2: 'l2',
  l1ux: 'l1ux', 
  l1ad: 'l1ad',
  ex_l3: 'ex_l3',
  ex_l25: 'ex_l25',
  ex_l2: 'ex_l2'
};
