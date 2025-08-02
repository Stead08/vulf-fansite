import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import Hero from "./Hero"

const mockDictionary = {
  home: {
    hero: {
      title: "Vulfpeck",
      subtitle: "ミニマル・ファンクの革命児たち"
    },
    welcome: "Vulfpeckの音楽と活動を日本のファンに向けて発信する非公式ファンサイトです。"
  },
  navigation: {
    about: "バンド情報",
    discography: "ディスコグラフィー"
  }
}

const meta = {
  title: "Home/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    dictionary: mockDictionary
  }
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    dictionary: mockDictionary
  }
}

export const Mobile: Story = {
  args: {
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
    dictionary: mockDictionary
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
}

export const WithCustomBackground: Story = {
  args: {
    dictionary: mockDictionary
  },
  decorators: [
    (Story: any) => (
      <div style={{ background: "linear-gradient(to bottom, #f5f5f5, #e0e0e0)" }}>
        <Story />
      </div>
    ),
  ],
}
