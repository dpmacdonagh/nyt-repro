import mockResponses from './mockNytResponses';

const nytClient = {
  getNames: () => {
    return Promise.resolve({ results: mockResponses.names });
  },
  getOverview: () => {
    return Promise.resolve(mockResponses.overview);
  }
}

export default nytClient;