import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import OGPCardWithSuspense from './index'

const meta = {
  title: 'Components/Common/OGPCardWithSuspense',
  component: OGPCardWithSuspense,
  parameters: {
    layout: 'centered',
    // Suspenseをサポートするためにasyncを有効化
    features: {
      experimentalAsyncRender: true,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    url: {
      control: 'text',
      description: 'The URL to fetch OGP data from',
    },
    showDescription: {
      control: 'boolean',
      description: 'Whether to show the description',
      defaultValue: true,
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[320px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof OGPCardWithSuspense>

export default meta
type Story = StoryObj<typeof meta>

// モックデータを使用したストーリー
export const Default: Story = {
  args: {
    url: 'https://vulfpeck.com',
    showDescription: true,
  },
}

export const WithoutDescription: Story = {
  args: {
    url: 'https://vulfpeck.com',
    showDescription: false,
  },
}

// 複数のカードを表示
export const Multiple: Story = {
  args: {
    url: 'https://vulfpeck.com',
    showDescription: true,
  },
  decorators: [
    () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[680px]">
        <OGPCardWithSuspense url="https://vulfpeck.com" showDescription={true} />
        <OGPCardWithSuspense url="https://www.youtube.com/watch?v=le0BLAEO93g" showDescription={true} />
        <OGPCardWithSuspense url="https://pitchfork.com/reviews/albums/vulfpeck-the-beautiful-game/" showDescription={true} />
        <OGPCardWithSuspense url="https://www.rollingstone.com/music/music-news/vulfpeck-madison-square-garden-sold-out-729841/" showDescription={true} />
      </div>
    ),
  ],
}

// ローディング状態を表示（開発用）
export const Loading: Story = {
  args: {
    url: 'https://example.com',
    showDescription: true,
  },
  decorators: [
    () => {
      // Suspenseのフォールバックを強制的に表示するために、
      // 永遠に解決しないPromiseを投げるコンポーネントを作成
      const SuspendedCard = () => {
        throw new Promise(() => {})
      }
      
      return (
        <div className="w-[320px]">
          <OGPCardWithSuspense url="https://example.com" showDescription={true} />
        </div>
      )
    },
  ],
  parameters: {
    docs: {
      description: {
        story: 'Shows the loading skeleton state while data is being fetched.',
      },
    },
  },
}

// グリッドレイアウトでの表示
export const Grid: Story = {
  args: {
    url: 'https://vulfpeck.com',
    showDescription: true,
  },
  decorators: [
    () => (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[1024px]">
        <OGPCardWithSuspense url="https://vulfpeck.com" showDescription={true} />
        <OGPCardWithSuspense url="https://www.youtube.com/watch?v=le0BLAEO93g" showDescription={false} />
        <OGPCardWithSuspense url="https://pitchfork.com/reviews/albums/vulfpeck-the-beautiful-game/" showDescription={true} />
        <OGPCardWithSuspense url="https://www.rollingstone.com/music/music-news/vulfpeck-madison-square-garden-sold-out-729841/" showDescription={false} />
        <OGPCardWithSuspense url="https://www.npr.org/2019/12/26/791245028/the-best-music-of-2019" showDescription={true} />
        <OGPCardWithSuspense url="https://www.instagram.com/vulfpeck/" showDescription={false} />
      </div>
    ),
  ],
}