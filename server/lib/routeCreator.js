// This piece of code generates API endpoints dynamically
// Each folder will become APP_URL/folderName
// and each file will become APP_URL/folderName/filename

import express from 'express';
const router = express.Router();
import fs from 'fs';

function routeCreator() {
  // get all the folders from api folder
  const mainEndpoints = fs.readdirSync('api');

  // loop in all main API endpoints
  mainEndpoints.forEach(endpoint => {
    const fileNames = fs.readdirSync(`api/${endpoint}`)

    // get the contents of the files
    // each file has a method (post, get, etc...) and an action
    // and 'params' if its GET request
    // map them to have name as well

    const files = fileNames.map(x => {
      return {
        // get rid of the file extension
        name: x.replace('.js', ''),

        file: require(`../api/${endpoint}/${x}`).default
      }
    });

    // loop in mapped files
    files.forEach(route => {
      const { method, action, params} = route.file;
      const endpointUrl = `/${endpoint}/${params ? '' : route.name}${params ? params : ''}`;
      console.log('files: ', files)
      console.log('endpointUrl', endpointUrl)

      // dynamically set the express router endpoint
      router[method](endpointUrl, action);
      // console.log(router, 'HERE--------------------->')

    });

  });
  return router;
}
export default routeCreator;
