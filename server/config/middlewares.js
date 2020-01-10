import helmet from 'helmet'
import bodyParser from 'body-parser'
import jwt from 'express-jwt'
import config from './index'


export default app => {
  // always does auth with JWT, except the paths you write below
  const unprotected = [
    '/users/login',
    '/users/signup']
  const jwtCheck = jwt({secret: config.JWT_SECRET})

   app.use(jwtCheck.unless({ path: unprotected }) )

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))

  app.use(helmet()) // for some out of the box security
}
