import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import OGPCardWrapper from './index'

const meta = {
  title: 'Common/OGPCardWrapper',
  component: OGPCardWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    url: {
      control: 'text',
      description: 'OGP情報を取得するURL',
    },
  },
  decorators: [
    (Story: any) => (
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof OGPCardWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    url: 'https://rollingstonejapan.com/articles/detail/42971',
  },
}

export const Loading: Story = {
  args: {
    url: 'https://example.com/loading-test',
  },
  parameters: {
    docs: {
      description: {
        story: 'ローディング状態の表示。実際のAPIコールが行われるため、一瞬表示されます。',
      },
    },
  },
}

export const ErrorState: Story = {
  args: {
    url: 'https://invalid-url-for-testing.example',
  },
  parameters: {
    docs: {
      description: {
        story: 'エラー時はフォールバックデータが表示されます。',
      },
    },
  },
}