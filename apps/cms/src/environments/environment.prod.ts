export const environment = {
  production: true,
  apiUrl: 'https://api.example.com/api',
  useMockApi: false,
  apiTimeout: 15000,
  cacheEnabled: true,
  cacheDuration: 7200000,
  loggingLevel: 'error',
  appVersion: '1.0.0',
  sentry: {
    dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
  },
  analytics: {
    enabled: true,
  },
};
