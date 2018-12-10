function ScrollListener(element) {
  this.element = element
  this.getState = getState
  this.dispatch = dispatch

  const state = {
    // lastScrollTop
    l: 0,
  }

  function dispatch() {
    if (this.element.scrollTop === 0) {
      this.element.dispatchEvent(new Event('scrollTop'))
    }

    if (
      this.element.scrollHeight <=
      this.element.scrollTop + this.element.clientHeight
    ) {
      this.element.dispatchEvent(new Event('scrollBottom'))
    }

    if (state.l > this.element.scrollTop) {
      this.element.dispatchEvent(new Event('scrollUp'))
    }

    if (state.l < this.element.scrollTop) {
      this.element.dispatchEvent(new Event('scrollDown'))
    }

    state.l = this.element.scrollTop
  }

  function getState() {
    return state
  }

  return this
}

export default ScrollListener
