import ScrollListener from '../ScrollListener'

test('Can retrieve state using getState', () => {
  const spy = jest.fn()
  const mockElement = {
    dispatchEvent: spy,
    scrollTop: 50,
    clientHeight: 100,
  }

  const listener = new ScrollListener(mockElement)

  expect(listener.getState().t).toBe(mockElement.scrollTop)
})

test('Dispatches scrollUp event when scrolling up', () => {
  const spy = jest.fn()
  const mockElement = {
    dispatchEvent: spy,
    scrollTop: 50,
    clientHeight: 100,
  }

  const listener = new ScrollListener(mockElement)

  // Mock scroll event
  mockElement.scrollTop = 0

  listener.dispatch()

  expect(spy).toHaveBeenCalled()
  expect(spy.mock.calls[0][0].type).toBe('scrollUp')
})

test('Dispatches scrollDown event when scrolling down', () => {
  const spy = jest.fn()
  const mockElement = {
    dispatchEvent: spy,
    scrollTop: 0,
    clientHeight: 100,
  }

  const listener = new ScrollListener(mockElement)

  // Mock scroll event
  mockElement.scrollTop = 50

  listener.dispatch()

  expect(spy).toHaveBeenCalled()
  expect(spy.mock.calls[0][0].type).toBe('scrollDown')
})

test('Dispatches scrollToTop event when scrolled to the top', () => {
  const spy = jest.fn()
  const mockElement = {
    dispatchEvent: spy,
    scrollTop: 50,
    clientHeight: 100,
  }

  const listener = new ScrollListener(mockElement)

  // Mock scroll event
  mockElement.scrollTop = 0

  listener.dispatch()

  expect(spy).toHaveBeenCalled()
  expect(spy.mock.calls[0][0].type).toBe('scrollUp')
  expect(spy.mock.calls[1][0].type).toBe('scrollToTop')
})

test('Dispatches scrollToBottom event when scrolled to the bottom', () => {
  const spy = jest.fn()
  const mockElement = {
    dispatchEvent: spy,
    scrollTop: 0,
    clientHeight: 100,
    scrollHeight: 200,
  }

  const listener = new ScrollListener(mockElement)

  // Mock scroll event
  mockElement.scrollTop = 100

  listener.dispatch()

  expect(spy).toHaveBeenCalled()
  expect(spy.mock.calls[0][0].type).toBe('scrollDown')
  expect(spy.mock.calls[1][0].type).toBe('scrollToBottom')
})

test('Dispatches scrollFromTop event when scrolled from the top', () => {
  const spy = jest.fn()
  const mockElement = {
    dispatchEvent: spy,
    scrollTop: 0,
    clientHeight: 100,
  }

  const listener = new ScrollListener(mockElement)

  // Mock scroll event
  mockElement.scrollTop = 10

  listener.dispatch()

  expect(spy).toHaveBeenCalled()
  expect(spy.mock.calls[0][0].type).toBe('scrollDown')
  expect(spy.mock.calls[1][0].type).toBe('scrollFromTop')
})

test('Dispatches scrollFromBottom event when scrolled from the bottom', () => {
  const spy = jest.fn()
  const mockElement = {
    dispatchEvent: spy,
    scrollTop: 100,
    clientHeight: 100,
    scrollHeight: 200,
  }

  const listener = new ScrollListener(mockElement)

  // Mock scroll event
  mockElement.scrollTop = 50

  listener.dispatch()

  expect(spy).toHaveBeenCalled()
  expect(spy.mock.calls[0][0].type).toBe('scrollUp')
  expect(spy.mock.calls[1][0].type).toBe('scrollFromBottom')
})
