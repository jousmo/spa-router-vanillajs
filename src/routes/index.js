'use strict'

import { getPath, getResolveRoutes, loadRoute } from '../utils'
import Header from '../templates/Header'

const router = async () => {
  const header = document.querySelector('header')
  const main = document.querySelector('main')
  const pathSegs = getPath()
  const path = getResolveRoutes(pathSegs)

  header.innerHTML = await Header()
  main.innerHTML = path.template()

  header.addEventListener('click', ({ target }) => loadRoute(target, main))
}

export default router
