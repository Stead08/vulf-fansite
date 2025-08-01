import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import Footer from "./Footer"

const meta = {
  title: "Layout/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>

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

export const DarkMode: Story = {
  decorators: [
    (Story: any) => (
      <div style={{ background: "#1a1a1a", minHeight: "100vh" }}>
        <Story />
      </div>
    ),
  ],
}

export const WithContent: Story = {
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
