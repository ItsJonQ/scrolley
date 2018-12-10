import createListeners from '../createListeners'

test('Can find an item from an element', () => {
  const mockElement = {clientHeight: 10, clientWidth: 10}
  const mockListener = {element: mockElement}
  const listeners = createListeners()

  listeners.add(mockListener)

  expect(listeners.find(mockElement)).toBe(mockListener)
})
