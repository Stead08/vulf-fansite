import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import LatestNews from "./LatestNews"

const mockDictionary = {
  news: {
    title: "最新ニュース",
    readMore: "続きを読む"
  }
}

const meta = {
  title: "Home/LatestNews",
  component: LatestNews,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    dictionary: mockDictionary,
    locale: 'ja' as const
  }
} satisfies Meta<typeof LatestNews>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    dictionary: mockDictionary,
    locale: 'ja'
  }
}

export const Mobile: Story = {
  args: {
    dictionary: mockDictionary,
    locale: 'ja'
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
}

export const Tablet: Story = {
  args: {
    dictionary: mockDictionary,
    locale: 'ja'
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
}

export const DarkBackground: Story = {
  args: {
    dictionary: mockDictionary,
    locale: 'ja'
  },
  decorators: [
    (Story: any) => (
      <div style={{ background: "#1a1a1a", padding: "2rem" }}>
        <Story />
      </div>
    ),
  ],
}

export const WithCustomContainer: Story = {
  args: {
    dictionary: mockDictionary,
    locale: 'ja'
  },
  decorators: [
    (Story: any) => (
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
}

export const EnglishVersion: Story = {
  args: {
    dictionary: {
      news: {
        title: "Latest News",
        readMore: "Read More"
      }
    },
    locale: 'en'
  }
}
