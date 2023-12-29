// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import { Form } from '@redwoodjs/forms'

import UploadAvatar from './UploadAvatar'

const meta: Meta<typeof UploadAvatar> = {
  component: UploadAvatar,
}

export default meta

type Story = StoryObj<typeof UploadAvatar>

export const Primary: Story = {
  render: () => (
    <Form>
      <UploadAvatar></UploadAvatar>
    </Form>
  ),
}
