'use strict'

const getPath = () => {
  const pathNameSplit = window.location.pathname.split('/')
  return pathNameSplit.length > 1 ? pathNameSplit.slice(1) : ''
}

export default getPath
