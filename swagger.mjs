// swagger.mjs
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Quora-like API',
      version: '1.0.0',
      description: 'A simple Express API for Questions & Answers like Quora',
    },
  },
  apis: ['./routes/*.mjs'], // ไปอ่าน comment ที่อยู่ใน route เพื่อสร้าง doc
}

const specs = swaggerJsdoc(options)

export { swaggerUi, specs }
