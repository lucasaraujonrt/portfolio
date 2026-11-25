const listeners = new Set<() => void>()

export function subscribeHash(onChange: () => void) {
  listeners.add(onChange)
  window.addEventListener('hashchange', onChange)
  window.addEventListener('popstate', onChange)
  return () => {
    listeners.delete(onChange)
    window.removeEventListener('hashchange', onChange)
    window.removeEventListener('popstate', onChange)
  }
}

export function getHash() {
  return window.location.hash.slice(1)
}

export function getServerHash() {
  return ''
}

export function pushHash(hash: string) {
  const url = window.location.pathname + (hash ? `#${hash}` : '')
  window.history.pushState(null, '', url)
  listeners.forEach((listener) => listener())
}
