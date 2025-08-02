import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import OGPCardSkeleton from './index'

const meta = {
  title: 'Components/Common/OGPCardSkeleton',
  component: OGPCardSkeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-[320px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof OGPCardSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Multiple: Story = {
  decorators: [
    (Story) => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[680px]">
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
    ),
  ],
}

export const InGrid: Story = {
  decorators: [
    (Story) => (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[1024px]">
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
    ),
  ],
}