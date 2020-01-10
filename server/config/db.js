import mongo from 'mongoose';

export default app => {
  mongo.Promise = global.Promise
  mongo.connect(process.env.DB_URL, {useUnifiedTopology: true, useNewUrlParser: true}, async (err, db) => {
    if (err) {
      return err
    }

    console.log('connected to mongo')
  })

  // for deprecation warning
  mongo.set('useFindAndModify', false)

  mongo.set('debug', true)
  mongo.set('useCreateIndex', true)

  mongo.connection
    .once('open', () => console.log('Mongodb running'))
    .on('error', err => console.error(err))
}
