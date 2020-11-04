import express from 'express'
import connectDB from './config/db'
import { notFound } from './middleware/errorMiddleware'
import dealerRouter from './routes/dealers'
import adminRouter from './routes/admin'
import swaggerUi from 'swagger-ui-express'
import { specs } from './utils/documentation'
import swaggerStat from 'swagger-stats'

connectDB()

const app = express()

// Application cofiuguration
app.use(express.json())

// Swagger documentation and the analytics
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))
// http://localhost:5000/swagger-stats/ui#sws_summary
app.use(swaggerStat.getMiddleware(specs))

// API endpoints
app.use('/v1/api/dealers', dealerRouter)
app.use('/v1/api/admin', adminRouter)

// Middleware
app.use(notFound)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
