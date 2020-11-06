import express from 'express'
import connectDB from './configuration/db'
import apiRouter from './routes/api'
import swaggerUi from 'swagger-ui-express'
import { specs } from './helpers/documentation'
import swaggerStat from 'swagger-stats'
import cors from 'cors'

connectDB()

const app = express()

// Application cofiuguration
app.use(express.json())

// Swagger documentation and the analytics
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))
// http://localhost:5000/swagger-stats/ui#sws_summary
app.use(swaggerStat.getMiddleware(specs))

//To allow cross-origin requests
app.use(cors());

// API endpoints
app.use("/v1/api/", apiRouter);

// request to handle undefined or all other invalid routes
app.get('*', function(req, res) {
  res.status(404).send('Invlid URL')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
