const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'A simple Express API',
    },
  },
  apis: ['./routes/*.js'], // paths to files containing Swagger annotations
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const swaggerUi = require('swagger-ui-express');

module.exports = {
  swaggerDocs,
  swaggerUi
}