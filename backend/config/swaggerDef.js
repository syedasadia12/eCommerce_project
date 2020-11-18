module.exports = {
    openapi: "3.0.0",
    info: {
        title: 'Product API Documentation',
        version: '1.0.0',
        description: 'API documentation description'
    },
    basePath: '/api/',
    apis: ['models/**/*.js', 'routes/**/*.js']
};