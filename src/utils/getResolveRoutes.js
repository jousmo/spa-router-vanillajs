'use strict'

import routes from '../routes/routes'

const getResolveRoutes = (pathSegs = []) => {
  const matchedRoute = routes.find(route => {
    const routePathSegs = route.path.split('/').slice(1)

    if (routePathSegs.length !== pathSegs.length) {
      return false
    }

    return routePathSegs.every((routePathSeg, i) => {
      return routePathSeg === pathSegs[i]
    })
  })

  return matchedRoute
}

export default getResolveRoutes
