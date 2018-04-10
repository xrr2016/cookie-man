export const clear = () => {
  document.cookie.split('; ').forEach(c => {
    const key = c.split('=')[0]
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`
  })
}

export const getItem = key => {
  const cookies = document.cookie.split('; ')
  return cookies.find(c => c.split('=')[0] === key)
}

export const keys = () => {
  return document.cookie.split('; ').map(c => c.split('=')[0])
}

export const length = () => {
  return document.cookie.split('; ').length
}

export const removeItem = (key, path = '', domain = '') => {
  if (!key || hasItem(key)) {
    return false
  }
  document.cookie = `${encodeURIComponent(
    key
  )}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${domain}; path=${path}`
}

const maxAge = 'max-age'

const _opts = {
  path: '/',
  domain: '',
  [maxAge]: 24 * 60 * 60 * 1000,
  expires: new Date(0x7fffffff * 1e3),
  secure: false
}

export const setItem = (key, value, opts = {}) => {
  if (!key) {
    return false
  }
  const o = Object.assign({}, _opts, opts)
  document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; path=${
    o.path
  }; domain=${o.domain}; max-age=${o[maxAge]};
    expires=${o.expires}; secure=${o.secure}
  `
  return getItem(key)
}

export const forEach = fn => {
  const cookies = document.cookie.split('; ')
  cookies.forEach((c, index) => {
    const key = c.split('=')[0]
    const value = c.split('=')[1]
    fn.call(window, key, value, index)
  })
}

export const hasItem = key => {
  return document.cookie.split('; ').findIndex(c => c.split('=')[0] === key) > -1
}
