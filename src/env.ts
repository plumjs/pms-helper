export const env = {
  domain: process.env.DOMAIN || 'localhost',
  port: process.env.PORT || '3001',
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/pms-helper',
  environment: process.env.ENVIRONMENT || 'local',
}
