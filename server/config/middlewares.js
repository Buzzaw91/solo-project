import helmet from 'helmet'
import bodyParser from 'body-parser'
import jwt from 'express-jwt'
import config from './index'


export default app => {
  // always does auth with JWT, except the paths you write below

    app.use(
    jwt({secret: config.JWT_SECRET})
      .unless({
        // we have no JWT in login/signup etc. routes
        // so we tell app not to try auth with JWT
        path: [
          'users/login',
          'users/signup'
        ]
      })

  )
   app.use((req, res, next)=> {
    console.log('\n PATH ',req.path)
    next()
  })

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))

  app.use(helmet()) // for some out of the box security
}
