import mongoose from 'mongoose'

const connectionString =
  'mongodb+srv://simplyPaiUser:@@h$Simplypai@simplypai-cluster.tgduy.mongodb.net/solutionDB?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    await mongoose
      .connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })
      .then(() => console.log('Connected to the DB'))
  } catch (e) {
    console.error('Error Occured while connecting to the DB', e)
  }
}

// module.exports = connectDB;
export default connectDB
