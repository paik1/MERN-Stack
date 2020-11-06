import swaggerDoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SimplyPai Solutions',
      version: '0.0.1',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Simplypai',
        url: 'https://simplypai.com',
        email: 'simplypaisolutions@gemail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000/v1/api/dealers',
      },
    ],
  },
  apis: ['./routes/dealers.js'],
}

export const specs = swaggerDoc(options)
