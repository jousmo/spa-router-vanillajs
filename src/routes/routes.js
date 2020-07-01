'use strict'

import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'

const routes = [
  {
    path: '/',
    template: Home
  },
  {
    path: '/contact',
    template: Contact
  },
  {
    path: '/about',
    template: About
  }
]

export default routes
