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
      this.node.addEventListener('scrollTop', this.onScrollTop)
      this.node.addEventListener('scrollBottom', this.onScrollBottom)
    }
    componentWillUnmount() {
      this.node.removeEventListener('scrollUp', this.onScrollUp)
      this.node.removeEventListener('scrollDown', this.onScrollDown)
      this.node.removeEventListener('scrollTop', this.onScrollTop)
      this.node.removeEventListener('scrollBottom', this.onScrollBottom)
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
    onScrollTop = action('scroll top')
    onScrollBottom = action('scroll bottom')

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
