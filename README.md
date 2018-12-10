# 🐹 Scrolley

[![Build Status](https://travis-ci.org/ItsJonQ/scrolley.svg?branch=master)](https://travis-ci.org/ItsJonQ/scrolley)
[![npm version](https://badge.fury.io/js/scrolley.svg)](https://badge.fury.io/js/scrolley)

> Extra scroll event listeners for DOM Elements!

## Features

- **Zero dependencies!**
- Super tiny, at ~500B gzipped
- Ultra fast performance

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [Events](#events)
- [Examples](#examples)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

To start using scrolley, add it to your project using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/) by running:

```
// npm
npm install --save scrolley

// yarn
yarn add scrolley
```

## Setup

To start listening to [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) scroll events, simply import **Scrolley** somewhere in your project, like so:

```js
import 'scrolley'
```

And that's it! 🙌

## Usage

**Scrolley**'s events can be added/removed on a DOM element, just like any other native event, like `click`, `mouseenter`, or `mousemove`.

```js
...
// Get your Element
const element = document.querySelector('.el')
// Define a callback when the element scrolls
const callbackFn = event => console.log(event)

// Subscribe
element.addEventListener('scrollDown', callbackFn)

// Unsubscribe
element.removeEventListener('scrollDown', callbackFn)
```

This library also supports a handful of other scroll events:

```js
...
// Subscribe to events
element.addEventListener('scrollUp', callback)
element.addEventListener('scrollDown', callback)
element.addEventListener('scrollTop', callback)
element.addEventListener('scrollBottom', callback)

// Unsubscribe events
element.removeEventListener('scrollUp', callback)
element.removeEventListener('scrollDown', callback)
element.removeEventListener('scrollTop', callback)
element.removeEventListener('scrollBottom', callback)
```

## Events

Below are the events that this module provides:

| Event name     | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `scrollUp`     | Fires immediately after the `Element` scrolls upward.                    |
| `scrollDown`   | Fires immediately after the `Element` scrolls downward.                  |
| `scrollTop`    | Fires immediately (once) after the `Element` scrolls to the very top.    |
| `scrollBottom` | Fires immediately (once) after the `Element` scrolls to the very bottom. |

## Examples

Check out this simply [Storybook demo](https://scrolley.netlify.com/). It was built with React. However, **Scrolley** is plain ol' vanilla JavaScript. It can work with anything JavaScript supported app, plugin, library, or framework.

## License

MIT © [Q](https://jonquach.com)
