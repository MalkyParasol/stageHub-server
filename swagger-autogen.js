const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endpointsFiles = ['./controllers/*.js'];

const config = {
    info: {
        title: 'Blog API Documentation',
        description: '',
    },
    tags: [ ],
    host: 'localhost:3001',
    schemes: ['http', 'https'],
};

swaggerAutogen(outputFile, endpointsFiles, config);