import mongoose from 'mongoose'

const connectionString =
  'mongodb+srv://simplyPaiUser:@@h$Simplypai@simplypai-cluster.tgduy.mongodb.net/solutionDB?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    const con = await mongoose.connect(connectionString, {
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
