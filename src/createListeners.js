import ScrollListener from './ScrollListener'

/**
 * Stores the collection of listeners for the resize events.
 * @returns { Object } Methods for Listeners
 */
function Listeners() {
  let state = []

  function add(listener) {
    state.push(listener)
  }

  function addEventListener(element, handler) {
    if (!find(element)) {
      const listener = new ScrollListener(element, handler)
      element.addEventListener('scroll', listener.dispatch.bind(listener))
      add(listener)
    }
  }

  function removeEventListener(element) {
    const listener = find(element)
    const el = listener.element
    element.removeEventListener('scroll', listener.dispatch.bind(listener))
    // Remove reference to DOM node, if it no longer exists
    if (!el || !el.ownerDocument.contains(el)) {
      remove(listener)
    }
  }

  function find(element) {
    return state.find(i => i.element === element)
  }

  function dispatch() {
    for (let i = 0, len = state.length; i < len; i++) {
      state[i].dispatch()
    }
  }

  function getState() {
    return state
  }

  function remove(listener) {
    state.splice(state.indexOf(listener), 1)
  }

  function clear() {
    state = []
  }

  return {
    add,
    addEventListener,
    clear,
    dispatch,
    find,
    getState,
    remove,
    removeEventListener,
  }
}

const createListeners = () => new Listeners()

export default createListeners
