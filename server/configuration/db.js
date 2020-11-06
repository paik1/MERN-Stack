import mongoose from 'mongoose'
import dotEnv from 'dotenv'

dotEnv.config()

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    console.log(`Connected to Cluster: ${con.connection.host}`)
  } catch (e) {
    console.error('Error Occured while connecting to the DB', e)
    process.exit(1)
  }
}

export default connectDB
