import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { userEvent, within } from "@storybook/test"
import Header from "./Header"

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
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    locale: 'ja' as const,
    dictionary: mockDictionary
  }
} satisfies Meta<typeof Header>

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

export const MobileMenuOpen: Story = {
  args: {
    locale: 'ja',
    dictionary: mockDictionary
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement)
    const menuButton = canvas.getByLabelText("メニューを開く")
    await userEvent.click(menuButton)
  },
}

export const WithScroll: Story = {
  args: {
    locale: 'ja',
    dictionary: mockDictionary
  },
  decorators: [
    (Story: any) => (
      <div style={{ height: "200vh" }}>
        <Story />
        <div style={{ padding: "2rem" }}>
          <p>Scroll down to see sticky header behavior</p>
        </div>
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
