import { render } from '@redwoodjs/testing/web'

import FormFields from './FormFields'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FormFields', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormFields />)
    }).not.toThrow()
  })
})
