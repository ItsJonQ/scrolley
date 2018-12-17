import createListeners from '../createListeners'

test('Can find an item from an element', () => {
  const mockElement = {clientHeight: 10, clientWidth: 10}
  const mockListener = {element: mockElement}
  const listeners = createListeners()

  listeners.add(mockListener)

  expect(listeners.find(mockElement)).toBe(mockListener)
})

test('Adds events to element', () => {
  const spy = jest.fn()
  const mockElement = document.createElement('div')
  const listeners = createListeners()
  const noop = () => {}

  mockElement.scrollTop = 50
  listeners.addEventListener(mockElement, noop)

  expect(listeners.find(mockElement)).toBeTruthy()

  mockElement.addEventListener('scrollUp', spy)
  mockElement.scrollTop = 0
  mockElement.dispatchEvent(new Event('scroll'))

  expect(spy).toHaveBeenCalled()
})

test('Removes events to element', () => {
  const spy = jest.fn()
  const mockElement = document.createElement('div')
  const listeners = createListeners()
  const noop = () => {}

  mockElement.scrollTop = 50
  listeners.addEventListener(mockElement, noop)

  expect(listeners.find(mockElement)).toBeTruthy()

  mockElement.addEventListener('scrollUp', spy)

  listeners.removeEventListener(mockElement, noop)
  mockElement.removeEventListener('scrollUp', spy)

  mockElement.scrollTop = 0
  mockElement.dispatchEvent(new Event('scroll'))

  expect(spy).not.toHaveBeenCalled()
})

test('Adds multiple events to element', () => {
  const spy = jest.fn()
  const spy2 = jest.fn()
  const mockElement = document.createElement('div')
  const listeners = createListeners()
  const noop = () => {}

  mockElement.scrollTop = 50
  listeners.addEventListener(mockElement, noop)
  listeners.addEventListener(mockElement, noop)

  expect(listeners.find(mockElement)).toBeTruthy()

  mockElement.addEventListener('scrollUp', spy)
  mockElement.addEventListener('scrollUp', spy2)
  mockElement.scrollTop = 0
  mockElement.dispatchEvent(new Event('scroll'))

  expect(spy).toHaveBeenCalled()
  expect(spy2).toHaveBeenCalled()
})

test('Can retrieve state from listeners', () => {
  const mockElement = document.createElement('div')
  const listeners = createListeners()
  const noop = () => {}

  mockElement.scrollTop = 50
  listeners.addEventListener(mockElement, noop)

  expect(listeners.getState().length).toBe(1)
})

test('Can clear state from listeners', () => {
  const mockElement = document.createElement('div')
  const listeners = createListeners()
  const noop = () => {}

  mockElement.scrollTop = 50
  listeners.addEventListener(mockElement, noop)

  expect(listeners.getState().length).toBe(1)

  listeners.clear()

  expect(listeners.getState().length).toBe(0)
})

test('Removes listener if element is removed from DOM', () => {
  const mockElement = document.createElement('div')
  const listeners = createListeners()
  const noop = () => {}

  document.body.appendChild(mockElement)

  listeners.addEventListener(mockElement, noop)
  expect(listeners.getState().length).toBe(1)

  mockElement.parentElement.removeChild(mockElement)
  listeners.removeEventListener(mockElement, noop)

  expect(listeners.getState().length).toBe(0)
})

test('Does not remove listener if element stays in DOM', () => {
  const mockElement = document.createElement('div')
  const listeners = createListeners()
  const noop = () => {}

  document.body.appendChild(mockElement)

  listeners.addEventListener(mockElement, noop)
  expect(listeners.getState().length).toBe(1)

  listeners.removeEventListener(mockElement, noop)

  expect(listeners.getState().length).toBe(1)
})
