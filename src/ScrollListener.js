function ScrollListener(element) {
  this.element = element
  this.getState = getState
  this.dispatch = dispatch

  const state = {
    // lastScrollTop
    t: this.element.scrollTop,
    // lastScrollBottom
    b: this.element.scrollTop + this.element.clientHeight,
  }

  function dispatch() {
    const isScrollUp = state.t > this.element.scrollTop
    const isScrollDown = state.t < this.element.scrollTop
    const scrollBottom = this.element.scrollTop + this.element.clientHeight

    // Directional
    if (isScrollUp) {
      this.element.dispatchEvent(new Event('scrollUp'))
    }

    if (isScrollDown) {
      this.element.dispatchEvent(new Event('scrollDown'))
    }

    // Waypoints
    if (this.element.scrollTop === 0) {
      this.element.dispatchEvent(new Event('scrollToTop'))
    }

    if (this.element.scrollHeight <= scrollBottom) {
      this.element.dispatchEvent(new Event('scrollToBottom'))
    }

    // From
    if (state.t === 0 && isScrollDown) {
      this.element.dispatchEvent(new Event('scrollFromTop'))
    }

    if (this.element.scrollHeight <= state.b && isScrollUp) {
      this.element.dispatchEvent(new Event('scrollFromBottom'))
    }

    // Update the cached values in state
    state.t = this.element.scrollTop
    state.b = scrollBottom
  }

  function getState() {
    return state
  }

  return this
}

export default ScrollListener
