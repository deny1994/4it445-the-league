export const config = {
  REQUEST_LOGGING: process.env.REACT_APP_REQUEST_LOGGING === 'true',
  MOCK_API: process.env.REACT_APP_MOCK_API === 'true',
  BASE_API_URL: process.env.REACT_APP_BASE_API_URL,
};
