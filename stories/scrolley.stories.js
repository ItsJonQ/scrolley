import React from 'react'
import '../src/index'

import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

const stories = storiesOf('Scrolley')

stories.add('Default', () => {
  class Example extends React.Component {
    state = {
      direction: undefined,
    }
    componentDidMount() {
      this.node.addEventListener('scrollUp', this.onScrollUp)
      this.node.addEventListener('scrollDown', this.onScrollDown)
      this.node.addEventListener('scrollToTop', this.onScrollTop)
      this.node.addEventListener('scrollToBottom', this.onScrollBottom)
      this.node.addEventListener('scrollFromTop', this.onScrollFromTop)
      this.node.addEventListener('scrollFromBottom', this.onScrollFromBottom)
    }
    componentWillUnmount() {
      this.node.removeEventListener('scrollUp', this.onScrollUp)
      this.node.removeEventListener('scrollDown', this.onScrollDown)
      this.node.removeEventListener('scrollToTop', this.onScrollTop)
      this.node.removeEventListener('scrollToBottom', this.onScrollBottom)
      this.node.removeEventListener('scrollFromTop', this.onScrollFromTop)
      this.node.removeEventListener('scrollFromBottom', this.onScrollFromBottom)
    }

    onScrollUp = () => {
      this.setState({
        direction: 'up',
      })
    }
    onScrollDown = () => {
      this.setState({
        direction: 'down',
      })
    }
    onScrollTop = action('scroll TO top')
    onScrollBottom = action('scroll TO bottom')

    onScrollFromTop = action('scroll FROM top')
    onScrollFromBottom = action('scroll FROM bottom')

    render() {
      return (
        <div
          style={{
            height: 300,
            overflowY: 'scroll',
            width: 300,
          }}
          ref={node => (this.node = node)}
        >
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              padding: 20,
              zIndex: 100,
            }}
          >
            Scroll Direction: {this.state.direction}
          </div>
          <div style={{height: 2000, background: 'grey'}} />
        </div>
      )
    }
  }

  return <Example />
})
