import { render } from '@redwoodjs/testing/web'

import UploadAvatar from './UploadAvatar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UploadAvatar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UploadAvatar />)
    }).not.toThrow()
  })
})
