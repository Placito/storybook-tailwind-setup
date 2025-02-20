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

import FormFields from './FormFields'

const meta: Meta<typeof FormFields> = {
  component: FormFields,
}

export default meta

type Story = StoryObj<typeof FormFields>

export const Primary: Story = {}
