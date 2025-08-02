import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import LatestNews from "./LatestNews"

const meta = {
  title: "Home/LatestNews",
  component: LatestNews,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LatestNews>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
}

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
}

export const DarkBackground: Story = {
  decorators: [
    (Story: any) => (
      <div style={{ background: "#1a1a1a", padding: "2rem" }}>
        <Story />
      </div>
    ),
  ],
}

export const WithCustomContainer: Story = {
  decorators: [
    (Story: any) => (
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
}
