import { render } from '@redwoodjs/testing/web'

import RsvpLayout from './RsvpLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RsvpLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RsvpLayout />)
    }).not.toThrow()
  })
})
