import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import OGPCard from './index'

const meta = {
  title: 'Common/OGPCard',
  component: OGPCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    url: {
      control: 'text',
      description: 'リンク先のURL',
    },
    title: {
      control: 'text',
      description: 'カードのタイトル',
    },
    description: {
      control: 'text',
      description: 'カードの説明文',
    },
    image: {
      control: 'text',
      description: 'OGP画像のURL',
    },
    siteName: {
      control: 'text',
      description: 'サイト名',
    },
  },
} satisfies Meta<typeof OGPCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    url: 'https://rollingstonejapan.com/articles/detail/42971',
    title: 'Vulfpeck（ヴルフペック）とは｜メンバーやおすすめ曲を紹介',
    description: 'Vulfpeck（ヴルフペック）は、アメリカのファンクバンド。2011年に結成され、ミニマルなファンクサウンドで知られています。',
    image: 'https://rollingstonejapan.com/share/rsjp_ogp.jpg',
    siteName: 'Rolling Stone Japan',
  },
}

export const WithoutImage: Story = {
  args: {
    url: 'https://example.com/article',
    title: '画像なしのOGPカード',
    description: 'OGP画像が設定されていない場合の表示例です。',
    siteName: 'Example Site',
  },
}

export const LongContent: Story = {
  args: {
    url: 'https://example.com/long-article',
    title: 'とても長いタイトルが設定されている記事の場合の表示確認用のサンプルカードです',
    description: '説明文もとても長い場合があります。このような場合でも適切に省略されて表示されることを確認するためのサンプルです。レイアウトが崩れないように調整されています。',
    image: 'https://via.placeholder.com/1200x630',
    siteName: 'Long Content Example',
  },
}

export const MinimalInfo: Story = {
  args: {
    url: 'https://example.com',
    title: 'ミニマルな情報',
  },
}

export const YouTubeVideo: Story = {
  args: {
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    title: 'Vulfpeck - Wait for the Moment (feat. Antwaun Stanley)',
    description: 'Official video for "Wait for the Moment" by Vulfpeck',
    image: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    siteName: 'YouTube',
  },
}

export const InstagramPost: Story = {
  args: {
    url: 'https://www.instagram.com/p/ABC123/',
    title: 'Vulfpeck on Instagram',
    description: 'Check out this post from Vulfpeck',
    image: 'https://via.placeholder.com/1080x1080',
    siteName: 'Instagram',
  },
}