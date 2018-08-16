import React from 'react'
import App from '../containers/AppContainer'
function errorLoading(error) {
  throw new Error(`Dynamic page loading failed: ${error}`)
}

function loadRoute(cb) {
  return module => cb(null, module.default)
}

export default {
  path: '/',
  component: App,
  indexRoute: {
    getComponent(location, cb) {
      System.import('../pages/Home').then(loadRoute(cb)).catch(errorLoading)
    }
  },
  childRoutes: [
    

  ]
}