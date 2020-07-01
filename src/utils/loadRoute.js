'use strict'

import { getResolveRoutes } from './'

const loadRoute = (target, main) => {
  const pathSegs = target.getAttribute('data-path')
  const path = getResolveRoutes([pathSegs])
  const url = `/${pathSegs}`
  window.history.pushState({}, 'This works', url)
  main.innerHTML = path.template()
}

export default loadRoute
