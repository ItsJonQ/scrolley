import listeners from './listeners'
import {SUPPORTED_EVENTS} from './utils'

/**
 * Enhances the default addEventListener/removeEventListener
 * Element prototype to listen for our custom "resize" event.
 */
function createEventListeners() {
  const addEventListenerRef = Element.prototype.addEventListener
  const removeEventListenerRef = Element.prototype.removeEventListener

  Element.prototype.addEventListener = function(event, handler, ...args) {
    const addEvent = addEventListenerRef.bind(this)
    // Adding the custom scroll event
    if (SUPPORTED_EVENTS.includes(event)) {
      listeners.addEventListener(this, handler)
    }
    // Execute the default addEventHandler function
    return addEvent(event, handler, ...args)
  }

  Element.prototype.removeEventListener = function(event, handler, ...args) {
    const removeEvent = removeEventListenerRef.bind(this)
    // Removing the custom scroll event
    if (SUPPORTED_EVENTS.includes(event)) {
      listeners.removeEventListener(this, handler)
    }
    // Execute the default removeEventHandler function
    return removeEvent(event, handler, ...args)
  }
}

export default createEventListeners
