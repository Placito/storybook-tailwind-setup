import type { Meta, StoryObj } from '@storybook/react'

import { Form } from '@redwoodjs/forms'

import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'

import RsvpLayout from './RsvpLayout'

const meta: Meta<typeof RsvpLayout> = {
  component: RsvpLayout,
}

export default meta

type Story = StoryObj<typeof RsvpLayout>

export const Primary: Story = {}
