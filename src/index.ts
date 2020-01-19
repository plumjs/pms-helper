import { App } from './app'
import { router as commandRouter } from './api/command'

import { connect } from 'mongoose'
import { env } from './env'
;(async () => {
  await connect(
    env.mongoUri,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  const app = App.create({})
  app.use(commandRouter.routes())
  app.start()
})()
