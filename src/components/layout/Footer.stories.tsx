import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import Footer from "./Footer"

const mockDictionary = {
  navigation: {
    home: "ホーム",
    about: "バンド情報",
    discography: "ディスコグラフィー",
    live: "ライブ",
    news: "ニュース",
    media: "メディア"
  }
}

const meta = {
  title: "Layout/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    locale: 'ja' as const,
    dictionary: mockDictionary
  }
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    locale: 'ja',
    dictionary: mockDictionary
  }
}

export const Mobile: Story = {
  args: {
    locale: 'ja',
    dictionary: mockDictionary
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
}

export const Tablet: Story = {
  args: {
    locale: 'ja',
    dictionary: mockDictionary
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
}

export const DarkMode: Story = {
  args: {
    locale: 'ja',
    dictionary: mockDictionary
  },
  decorators: [
    (Story: any) => (
      <div style={{ background: "#1a1a1a", minHeight: "100vh" }}>
        <Story />
      </div>
    ),
  ],
}

export const WithContent: Story = {
  args: {
    locale: 'ja',
    dictionary: mockDictionary
  },
  decorators: [
    (Story: any) => (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, padding: "2rem" }}>
          <h1>Page Content</h1>
          <p>The footer will stick to the bottom of the page.</p>
        </div>
        <Story />
      </div>
    ),
  ],
}

export const EnglishVersion: Story = {
  args: {
    locale: 'en',
    dictionary: {
      navigation: {
        home: "Home",
        about: "About",
        discography: "Discography",
        live: "Live",
        news: "News",
        media: "Media"
      }
    }
  }
}
