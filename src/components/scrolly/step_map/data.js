// Data source configurations for StepMapScrolly component
// Simplified template with only 3 essential data sources

export const dataSources = {
  // Template data sources - replace with your own data
  municipio_centroid: {
    url: './data/sao_paolo_municipio_centroid.json',
    layer: 'geog',
    code: 'salid2',
  },
  l2: {
    url: './data/sao_paolo_l2.json',
    layer: 'geog',
    code: 'salid2',
  },
  l1ad: {
    url: './data/sao_paolo_l1ad.json',
    layer: 'geog',
    code: 'salid1',
  },
};

// Helper function to get all data source keys for iteration
export const getDataSourceKeys = () => Object.keys(dataSources);

// Helper function to get data source by key
export const getDataSource = (key) => dataSources[key];
